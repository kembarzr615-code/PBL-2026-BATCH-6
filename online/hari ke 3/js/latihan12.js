const sayuran = [];

// Menambahkan data ke variabel sayuran menggunakan method push() di belakang elemen terakhir
sayuran.push("Kangkung");
sayuran.push("Bayam");
sayuran.push("Buncis");
sayuran.push("Kubis");
sayuran.push("Timun");
sayuran.push("Seledri");
sayuran.push("Tauge");

// Mengurutkan array berdasarkan alfabet menggunakan method sort()
sayuran.sort();

// Menampilkan data menggunakan perulangan for dengan nomor urut
for (let i = 0; i < sayuran.length; i++) {
    console.log(`${i + 1}.${sayuran[i]}`);
}