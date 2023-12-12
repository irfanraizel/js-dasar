// DOM Selection
// document.getElementById() - mengembalikan element
const judul = document.getElementById("judul");
judul.style.color = "crimson";
judul.style.backgroundColor = "grey";
judul.innerText = "Irfan ingin menjadi programmer";

// document.getElementsByTagName() - mengembalikan HTMLCollections
const p = document.getElementsByTagName("p");

for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightgreen";
}

const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontFamily = "Poppins";
h1.style.fontSize = "45px";

// document.getElementsByClassName() - mengembalikan HTMLCollections
const p1 = document.getElementsByClassName("p1")[0];
p1.innerText = "Ini diubah oleh Javascript";
