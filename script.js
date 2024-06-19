const color_1 = document.querySelector('#color-1');
const color_2 = document.querySelector('#color-2');
const color_3 = document.querySelector('#color-3');
const color_4 = document.querySelector('#color-4');
const color_5 = document.querySelector('#color-5');
const country_1 = document.querySelector('#country-1');
const country_2 = document.querySelector('#country-2');
const country_3 = document.querySelector('#country-3');
const country_4 = document.querySelector('#country-4');
const country_5 = document.querySelector('#country-5');
const pet_1 = document.querySelector('#pet-1');
const pet_2 = document.querySelector('#pet-2');
const pet_3 = document.querySelector('#pet-3');
const pet_4 = document.querySelector('#pet-4');
const pet_5 = document.querySelector('#pet-5');
const language_1 = document.querySelector('#language-1');
const language_2 = document.querySelector('#language-2');
const language_3 = document.querySelector('#language-3');
const language_4 = document.querySelector('#language-4');
const language_5 = document.querySelector('#language-5');
const club_1 = document.querySelector('#club-1');
const club_2 = document.querySelector('#club-2');
const club_3 = document.querySelector('#club-3');
const club_4 = document.querySelector('#club-4');
const club_5 = document.querySelector('#club-5');

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

document.querySelector('#check').addEventListener('click', () => {
  let b1 = color_1.children[0].id == 'drag4';
  let b2 = color_2.children[0].id == 'drag1';
  let b3 = color_3.children[0].id == 'drag2';
  let b4 = color_4.children[0].id == 'drag5';
  let b5 = color_5.children[0].id == 'drag3';
  let b6 = country_1.children[0].id == 'drag9';
  let b7 = country_2.children[0].id == 'drag7';
  let b8 = country_3.children[0].id == 'drag6';
  let b9 = country_4.children[0].id == 'drag10';
  let b10 = country_5.children[0].id == 'drag8';
  let b11 = pet_1.children[0].id == 'drag17';
  let b12 = pet_2.children[0].id == 'drag20';
  let b13 = pet_3.children[0].id == 'drag16';
  let b14 = pet_4.children[0].id == 'drag18';
  let b15 = pet_5.children[0].id == 'drag19';
  let b16 = language_1.children[0].id == 'drag21';
  let b17 = language_2.children[0].id == 'drag25';
  let b18 = language_3.children[0].id == 'drag22';
  let b19 = language_4.children[0].id == 'drag23';
  let b20 = language_5.children[0].id == 'drag24';
  let b21 = club_1.children[0].id == 'drag13';
  let b22 = club_2.children[0].id == 'drag11';
  let b23 = club_3.children[0].id == 'drag12';
  let b24 = club_4.children[0].id == 'drag14';
  let b25 = club_5.children[0].id == 'drag15';
  let b = b1 && b2 && b3 && b4 && b5 && b6 && b7 && b8 && b9 && b10 && b11 && b12 && b13 && b14 && b15 && b16 && b17 && b18 && b19 && b20 && b21 && b22 && b23 && b24 && b25;
  if (b) {
    alert('yes');
  }
});

document.querySelector('#reset').addEventListener('click', () => {
  location.reload();
});