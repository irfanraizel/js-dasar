// Membuat Object Dengan Constructor
function Mahasiswa(nama, nim, jurusan, email) {
    this.nama = nama;
    this.nim = nim;
    this.jurusan = jurusan;
    this.email = email;
}

var mhs = new Mahasiswa('Agung', '14012200135', 'Ilmu Komputer', 'agungraizel@gmail.com')

console.log(mhs)