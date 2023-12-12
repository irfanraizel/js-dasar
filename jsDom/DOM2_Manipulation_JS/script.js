// const judul = document.getElementById('judul');
// judul.innerHTML = 'IRFAN';
// judul.style.color = 'lightblue';

// const judul = document.querySelector('#judul');
// judul.style.color = 'salmon';
// judul.innerHTML = 'Irfan';

// buat element baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf baru');
// simpan tulisan kedalam paragraf
pBaru.appendChild(teksPBaru);
// simpan p baru diakhir section a
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);


const liBaru = document.createElement('li');
const isiLiBaru = document.createTextNode('Item baru');
liBaru.appendChild(isiLiBaru);

const ul = document.querySelector('section#b ul');
const child = ul.querySelector('ul li:nth-child(2)');
ul.insertBefore(liBaru, child);


const link = sectionA.getElementsByTagName('a')[0];
sectionA.removeChild(link);

const sectionB = document.getElementById('b');
const judulBaru = document.createElement('h2');
const isiJudulBaru = document.createTextNode('Judul Baru');
judulBaru.appendChild(isiJudulBaru);

const p4 = sectionB.getElementsByTagName('p')[0];
sectionB.replaceChild(judulBaru, p4);