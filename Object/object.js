// Membuat Object Literal

var mahasiswa = {
    nama : "Irfan",
    kelas : "3DKOM",
    lulus : false,
    ipSemester : [3.68, 3.65, 3.80],
    ipKumulatif : function() {
        var total = 0;
        var ips = this.ipSemester
        for(i = 0; i < ips.length; i++) {
            total += ips[i];
        }
        return total/ips.length;
    }
}

ipk = mahasiswa.ipKumulatif();

console.log(ipk)

var orang = {
    nama : "Aan Khoirul Anam",
    umur : 31,
    alamat : {
        jalan : "Jl. Raya Serang 100",
        kota : "Kota Serang",
        provinsi : "Banten"
    },
    pekerjaan : "Dosen",
    sapa : function() {
        return "Hi, Nama saya " + this.nama + "Usia saya " + this.umur + "tahun, dan saya adalah seorang" + this.pekerjaan;
    }
}

namaOrang = orang.nama = "Aan Nama Baru"
console.log(namaOrang)
console.log(orang.umur)
console.log(orang.alamat.jalan)
console.log(orang.alamat.kota)
console.log(orang.alamat["provinsi"])
console.log(orang.pekerjaan)
console.log(orang.sapa())