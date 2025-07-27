import dotenv from 'dotenv';
import { fetchLocationData } from "./location";
import { fetchWeatherData } from './weatherapi';
import type { LocationInfo } from "./location";
dotenv.config();

const GEOCODE_API_URL = "https://geocode.maps.co/search";
const WEATHER_API_URL = "https://api.open-meteo.com/v1/forecast";

async function main(): Promise<number> {
    // pnpm run weather LOCATION
    if (process.argv.length !== 3) {
        console.error("usage: weather LOCATION");
        return 1;
    }
    // get location
    const location = process.argv[2];
    // convert location to lat/lon
    let LocationInfo: LocationInfo;
    try {
        LocationInfo = await fetchLocationData(GEOCODE_API_URL, location);
    } catch (e) {
        console.error(e);
        return 1;
    }    
    console.log(`Location weather data for ${LocationInfo.display_name}...\n`); 
    try {
        const weather = await fetchWeatherData(
            WEATHER_API_URL,
            LocationInfo.lat,
            LocationInfo.lon,
        );
        console.log(weather.format());
    } catch (e) {
        console.error(e);
        return 1;
    }
    // fetch weather data
    // display weather data
    return await Promise.resolve(0);
}

main().catch(err => console.error(err));