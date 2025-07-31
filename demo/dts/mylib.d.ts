export function add(a: number, b: number, ...numbers: number[]): number;

export function max(arr: number[]): number | null;

export type CaseKind = 'lowercase' | 'uppercase';
export function setCase(message: string, kind: CaseKind): string;

export function quote(message: string): () => string;