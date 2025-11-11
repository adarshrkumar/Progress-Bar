import type { APIContext } from 'astro';

const default_progress = 50;
const default_color = 'green';

export async function GET(context: APIContext) {
    const qP = context.url.searchParams;
    const progress = qP.get('p') || default_progress;
    const color = qP.get('c') || default_color;

    return new Response(`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 25" width="100" height="25">
    <rect x="0" y="0" width="100" height="25" fill="gray"></rect>
    <rect x="0" y="0" width="${progress}" height="25" fill="${color}"></rect>
</svg>`, {
        headers: { 'Content-Type': 'image/svg+xml' }
    });
}