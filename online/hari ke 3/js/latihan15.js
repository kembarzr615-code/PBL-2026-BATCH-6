var phone = {
    name: "Samsung Galaxy Note 20",
    brand: "Samsung",
    colors: ["Black"],
    release: 2020
};

// Membuat function addColors
function addColors(warnaBaru) {
    // Mengakses properti colors pada objek phone dan menggunakan method push()
    phone.colors.push(warnaBaru);
}

addColors("Gold");
addColors("Silver");
addColors("Brown");

console.log(phone);