// DOM Selection
// document.querySelector() - mengembalikan element
const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '30px';
p4.style.backgroundColor = 'grey';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.color = 'blue';
li2.style.backgroundColor = 'orange';
// karena querySelector() mengembalikan element
// maka jika kita select banyak element, dia akan mengembalikan
// element pertama yang ditemukan
// const p = document.querySelector('p');
// p.innerHTML = 'p diubah menggunakan Javascript'

// document.querySelectorAll() - mengembalikan NodeList
const p = document.querySelectorAll('p');
for ( let i = 0; i < p.length; i++ ) {
    p[i].style.backgroundColor = 'lightgreen';
}

