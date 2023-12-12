// Membuat Object Menggunakan function

function buatObjectMahasiswa(nama, nim, jurusan, email) {
    var mhs = {}
        mhs.nama = nama;
        mhs.npm = nim;
        mhs.jurusan = jurusan;
        mhs.email = email;
        return mhs;
}

console.log(buatObjectMahasiswa("Irfan", "14012200134", "Ilmu Komputer", "irfanraizel@gmail.com"))