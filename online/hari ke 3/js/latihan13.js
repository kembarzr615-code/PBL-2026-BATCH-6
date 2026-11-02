const dataFilm = [];

function tambahDataFilm(judul, durasi, genre, tahun) {
    // Membuat objek film dari parameter yang diterima
    const filmBaru = {
        judul: judul,
        durasi: durasi,
        genre: genre,
        tahun: tahun
    };

    // Menambahkan objek film ke dalam array dataFilm menggunakan push()
    dataFilm.push(filmBaru);
}

tambahDataFilm("LOTR", "2 jam", "action", "1999");
tambahDataFilm("avenger", "2 jam", "action", "2019");
tambahDataFilm("spiderman", "2 jam", "action", "2004");
tambahDataFilm("juon", "2 jam", "horror", "2004");

console.log(dataFilm);