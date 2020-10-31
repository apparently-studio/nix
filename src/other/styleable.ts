export interface Styleable {
    className ?: string
    style ?: React.CSSProperties
} 

let globalBase = 14;

export function setSizeBase(base : number) : void {
    globalBase = base;
}

export function size(target : number, base = globalBase) : string {
    return `${target / base}rem`;
}