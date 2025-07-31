import path from 'path';
import cookie from '@fastify/cookie';
import formBody from '@fastify/formbody';
import staticFiles from '@fastify/static';
import dotenv from 'dotenv';
import Fastify from 'fastify';
import nunjucks from 'nunjucks';
import { z } from 'zod';

import { comparePassword, hashPassword } from './auth';
import { connect, newDb, SqliteSession, SqliteUserRepository } from './db';

dotenv.config();
const PORT = 3000;

const environment = process.env.NODE_ENV;
const cookieSecret = process.env.COOKIE_SECRET;
if (cookieSecret === undefined) {
    console.error('must set COOKIE_SECRET environment variable');
    process.exit();
}

const templates = new nunjucks.Environment(new nunjucks.FileSystemLoader('src/backend/templates'));
const USERS_DB = './users.sqlite';

const fastify = Fastify({
    logger: true,
});

const accountLoginRequestSchema = z.object({
    email: z.string(),
    password: z.string(),
});

type AccountLoginRequest = z.infer<typeof accountLoginRequestSchema>;

const accountCreateRequestSchema = z.object({
    email: z.string(),
    password: z.string(),
    agreedToTerms: z.string().optional(),
});

type AccountCreateRequest = z.infer<typeof accountCreateRequestSchema>;

{
    fastify.register(formBody);
    fastify.register(cookie, {
        secret: cookieSecret,
    });
    fastify.register(staticFiles, {
        root: path.join(__dirname, '../../dist'),
    });
}

fastify.get('/', async (request, reply) => {
    await reply.redirect('/signin');
});

fastify.get('/signup', async (request, reply) => {
    const rendered = templates.render('signup.njk', { environment });
    return await reply
        .header('Content-Type', 'text/html; charset=utf-8')
        .send(rendered);
});

fastify.get('/signin', async (request, reply) => {
    const rendered = templates.render('signin.njk', { environment });
    return await reply
        .header('Content-Type', 'text/html; charset=utf-8')
        .send(rendered);
});

fastify.post('account/signin', async (request, reply) => {
    let requestData: AccountLoginRequest;
    try {
        requestData = accountLoginRequestSchema.parse(request.body);
    } catch (e) {
        return await reply.redirect('/signin');
    }

    const db = await connect(USERS_DB);
    const userRepository = new SqliteUserRepository(db);

    try {
        const user = await userRepository.findByEmail(requestData.email);
        if (user === undefined) {
            // TODO: show error message
            return await reply.redirect('/signin');
        }
        const passwordMatches = await comparePassword(requestData.password, user.hashedPassword);
        if (!passwordMatches) {
            // TODO: show error message
            return await reply.redirect('/signin');
        }
        return await reply.redirect('/welcome');
    } catch (e) {
        // TODO: show error message
        return await reply.redirect('/signin');
    }
});

fastify.post('/account/signup', async (request, reply) => {
    let requestData: AccountCreateRequest;
    try {
        requestData = accountCreateRequestSchema.parse(request.body);
    } catch (e) {
        return await reply.redirect('/signup');
    }

    if (requestData.agreedToTerms !== 'on') {
        // TODO: show error message
        return await reply.redirect('/signup');
    }

    const db = await connect(USERS_DB);
    const userRepository = new SqliteUserRepository(db);

    const hashedPassword = await hashPassword(requestData.password);

    try {
        const newUser = {
            ...requestData,
            id: 0,
            agreedToTerms: true,
            hashedPassword,
        };
        const user = await userRepository.create(newUser);
        return await reply.redirect('/welcome');
    } catch (e) {
        // TODO: show error message
        return await reply.redirect('/signup');
    }
});

const start = async (): Promise<void> => {
    try {
        const db = await connect(USERS_DB);
        newDb(db);
        await fastify.listen({ port: PORT });
        console.log(`Listening on port ${PORT}`);
    } catch (e) {
        fastify.log.error(e);
        process.exit(1);
    }
}

start();