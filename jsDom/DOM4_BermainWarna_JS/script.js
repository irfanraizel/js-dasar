// bermain warna
// const ubahBg = document.querySelector('body');
// const btn = document.getElementById('btn');

// btn.onclick = function(){
//     ubahBg.style.backgroundColor = 'lightblue';
// }

const body = document.querySelector('body');
const btnBaru = document.createElement('button');
const namaBtn = document.createTextNode('Ubah Warna Background');
btnBaru.appendChild(namaBtn);

body.appendChild(btnBaru);

btnBaru.onclick = function() {
    body.style.backgroundColor = 'lightblue';
}