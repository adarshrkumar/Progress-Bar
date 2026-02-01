# Progress-Bar

A simple service for generating customizable progress bar visualizations.

## Endpoints

### HTML Page
`/?p=75&c=%23ff0000&f=Roboto`

### SVG Image
`/bar.svg?p=75&c=green`

## Query Parameters

| Parameter | Description | Default |
|-----------|-------------|---------|
| `p` | Progress percentage (0-100) | 50 |
| `c` | Color (hex or name) | #555555 (HTML) / green (SVG) |
| `f` | Font name | lato |
| `s` | Font family | sans-serif |

## Usage Examples

### Embed in Markdown
```markdown
![Progress](https://your-domain.com/bar.svg?p=80&c=blue)
```

### HTML Embed
```html
<img src="/bar.svg?p=65&c=%2300ff00" alt="65% complete">
```

## Tech Stack

- [Astro](https://astro.build/) with SSR
- SCSS for styling
- Dynamic SVG generation

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
