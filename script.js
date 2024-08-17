let default_progress = 50;
let default_color = '#555555';
let default_family = 'sans-serif';
let default_font = 'lato';

if (Boolean(location.href.split('p=')[1]) !== false) {
  var progress = location.href.split('p=')[1];
  if (Boolean(progress.includes('&'))) {
    progress = Number(progress.split('&')[0]);
  }
}
else {
  var progress = default_progress;
}

if (Boolean(location.href.split('c=')[1]) !== false) {
  var color = location.href.split('c=')[1];
  if (Boolean(color.includes('&'))) {
    color = color.split('&')[0];
  }
}
else {
  var color = default_color;
}

if (Boolean(location.href.split('s=')[1]) !== false) {
  var family = location.href.split('s=')[1];
  if (Boolean(family.includes('&'))) {
    family = family.split('&')[0];
  }
  if (family ==='ss') {
    family ='sans-serif';
  }
  else if (style ==='s') {
    family ='serif';
  }
}
else {
  var family = default_family;
}

if (Boolean(location.href.split('f=')[1]) !== false) {
  var font = location.href.split('f=')[1];
  if (Boolean(font.includes('&'))) {
    var font = font.split('&')[0];
  }
}
else {
  var font = default_font;
}

document.querySelector('.bar').setAttribute('style', `width: ${progress}px !important;`);
document.querySelector('.progress').innerText = `${progress}%/100%`;
document.body.setAttribute('style', `--text-color: ${color}; --font-family: ${family}; --font-name: ${font};`);