let default_progress = 50;
let default_color = '#555555';
let default_family = 'sans-serif';
let default_font = 'lato';

const queryParams = new URLSearchParams(window.location.search);

let progress = queryParams.has('p') ? Number(queryParams.get('p')) : default_progress;
let color = queryParams.has('c') ? queryParams.get('c') : default_color;
let family = queryParams.has('s') ? queryParams.get('s') : default_family;
if (family === 'ss') {
    family = 'sans-serif';
} else if (family === 's') {
    family = 'serif';
}
let font = queryParams.has('f') ? queryParams.get('f') : default_font;

document.querySelector('.bar').setAttribute('style', `width: ${progress}px !important;`);
document.querySelector('.progress').innerText = `${progress}%/100%`;
document.body.setAttribute('style', `--text-color: ${color}; --font-family: ${family}; --font-name: ${font};`);

// Dynamically add a link font import for the selected font to the head
const fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.type = 'text/css';
// Google Fonts load (basic Lato fallback if not present)
let fontFamilyName = font.replace(/\+/g, ' ');
// Build Google Fonts URL
let fontUrl = `https://fonts.googleapis.com/css?family=${encodeURIComponent(fontFamilyName)}:400,700&display=swap`;
fontLink.href = fontUrl;
document.head.appendChild(fontLink);
