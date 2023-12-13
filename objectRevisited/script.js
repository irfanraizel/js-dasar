// Cara untuk membuat Object pada javascript
// 1. Object Literal
// Problem : Tidak efektif untuk object yang banyak

// let mahasiswa1 = {
//     nama : 'Irfan',
//     energi : 20,
//     makan : function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`)
//     }
// }

// let mahasiswa2 = {
//     nama : 'Fadlan',
//     energi : 40,
//     makan : function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan.!`)
//     }
// }

// 2. function Declaration
// function mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan.!`)
//     }

//     mahasiswa.main = function(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain.!`)
//     }

//     return mahasiswa;
// }

// let irfan = mahasiswa('Irfan', 30);
// let agung = mahasiswa('Agung', 20);

// 3. Constructor Declaration
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
//     this.makan = function(porsi) {
//         this.energi += porsi;
//         return this.energi;
//     }

//     this.main = function(jam) {
//         this.energi -= jam;
//         return this.energi;
//     }
// }

// let orang1 = new Mahasiswa('AgungHapsah', 40)


// 4. Object.create()
// const methodMahasiswa = {
//     makan : function(porsi) {
//         this.energi += porsi;
//         return this.energi;
//     },
    
//     main : function(jam) {
//         this.energi -= jam;
//         return this.energi;
//     },

//     tidur : function(lamaTidur) {
//         this.energi += (lamaTidur * 2);
//         return this.energi;
//     }

// }


// function mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa)
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     return mahasiswa;
// }

// let agus = mahasiswa('Agus', 400)

// 5. Prototype
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
// }

// Mahasiswa.prototype.makan = function(porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama}, Selamat makan energi mu bertambah ${this.energi}`
// }

// Mahasiswa.prototype.main = function(jam) {
//     this.energi -= jam
//     return `Halo ${this.nama}, Selamat Bermain energimu berkurang ${this.energi}`
// }

// let irfan = new Mahasiswa('Irfan', 50)

// 6. Versi Class
class Mahasiswa {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi) {
        this.energi += porsi;
        return `Halo ${this.nama}, Selamat makan`
    }

    main(jam) {
        this.energi -= jam;
        return `Halo ${this.nama}, Selamat main`
    }

    tidur(jam) {
        this.energi += jam * 2;
        return `Halo ${this.nama}, Selamat Tidur`
    }
}

let irfan = new Mahasiswa('Irfan', 50)
