let tanggal = 7;
let bulan = 11;
let tahun = 2004;
let bulanConvert;

switch(bulan) {
    case 1:
        bulanConvert = "Januari";
        break;
    case 2:
        bulanConvert = "Februari";
        break;
    case 3:
        bulanConvert = "Maret";
        break;
    case 4:
        bulanConvert = "April";
        break;
    case 5:
        bulanConvert = "Mei";
        break;
    case 6:
        bulanConvert = "Juni";
        break;
    case 7:
        bulanConvert = "Juli";
        break;
    case 8:
        bulanConvert = "Agustus";
        break;
    case 9:
        bulanConvert = "September";
        break;
    case 10:
        bulanConvert = "Oktober";
        break;
    case 11:
        bulanConvert = "November";
        break;
    case 12:
        bulanConvert = "Desember";
        break;
    default:
        bulanConvert = "Bulan tidak valid";
}

console.log(`${tanggal} ${bulanConvert} ${tahun}`);