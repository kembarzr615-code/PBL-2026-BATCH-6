function introduce(nama,jk,pekerjaan,umur){
    // ( kondisi ? true : false )
    return (jk=="laki-laki" ? "Pak" : "Bu") + ` ${nama} adalah seorang ${pekerjaan} yang berusia ${umur} tahun`
}

let john = introduce("John", "laki-laki", "penulis", "30")
console.log(john) // Menampilkan "Pak John adalah seorang penulis yang berusia 30 tahun"

let sarah = introduce("Sarah", "perempuan", "model", "28")
console.log(sarah) // Menampilkan "Bu Sarah adalah seorang model yang berusia 28 tahun"