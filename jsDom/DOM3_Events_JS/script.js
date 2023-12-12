// Events
// add new paragraph
function tambahParagraf() {
    const sectionA = document.getElementById('a');
    const pBaru = document.createElement('p');
    const isiPBaru = document.createTextNode('Paragraf baru');
    pBaru.appendChild(isiPBaru);

    sectionA.appendChild(pBaru);
}

const p1 = document.querySelector('section#a .p1');
p1.onclick = tambahParagraf;

// delete last paragpraph
function hapusParagraf() {
    const sectionA = document.getElementById('a');
    const remove = sectionA.querySelector('p:last-child');
   
    sectionA.removeChild(remove);

}
const p2 = document.querySelector('section#a .p2');
p2.onclick = hapusParagraf; 

// addEventListener - add new List item
const p4 = document.querySelector('section#b p:nth-child(2)');
p4.addEventListener('click', function() {
    const ul = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');
    const isiLiBaru = document.createTextNode('item baru');
    liBaru.appendChild(isiLiBaru);

    ul.appendChild(liBaru);
})

// addEventListener - remove last List item
const p5 = document.querySelector('section#b p:nth-child(3)');
p5.addEventListener('click', function(){
    const ul = document.querySelector('section#b ul');
    const hapusLi = ul.querySelector('li:last-child');
    ul.removeChild(hapusLi);
})


// Date
function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}

const dateStyle = document.getElementById('demo');
dateStyle.style.backgroundColor = 'lightblue';