const title = 'Made it!';
const playlist = [
  ['Stella Jang', 'Villain'],
  ['Claude Debussy', 'Préludes Book2 No.5. Bruyeres'],
  ['Jake25.17', 'What Falling in Love Feels Like'],
  ['Ohzora Kimishima', 'Muko gami'],
  ['Donny Hathaway', 'This Christmas']
];
const path_to_playlist_code = './img/code.png';
const photo_by = 'me';
const place = 'Kamiiso no Torii';
const address = 'Oarai, Ibaraki, Japan.';

let text = '';
playlist.forEach((e, i) => {
  text += `<span style='font-weight: bold;'>${('00' + (i+1)).slice(-2)}</span> `;
  text += `${e[0]} - ${e[1]}`;
  if (i < playlist.length - 1) { text += ', ' }
});

const _playlist = document.querySelector('#playlist');
_playlist.innerHTML = text;

const _title = document.querySelector('#title');
_title.innerHTML = title;

const _photo_by = document.querySelector('#photo-by');
_photo_by.innerHTML = `Photo by ${photo_by}`;

const _place = document.querySelector('#place');
_place.innerHTML = place;

const _address = document.querySelector('#address');
_address.innerHTML = address;

const _playlist_code = document.querySelector('#playlist-code');
_playlist_code.src = path_to_playlist_code;

document.querySelector('button').addEventListener('click', () => {
  html2canvas(document.querySelector("#canvas")).then(canvas => { 
    const a = document.createElement("a");
    a.href = canvas.toDataURL("image/png");
    a.download = "out.png";
    a.click();
  });
});

