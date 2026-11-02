let text = " hello world! ";

console.log("text = " + text.trim());
console.log("length = " + text.length);

let charAt = text.charAt(2);
console.log("charAt = " + charAt);

let slice = text.slice(2, 4);
console.log("slice = " + slice);

let substring = text.substring(2, 5);
console.log("substring = " + substring);

console.log("toUpperCase = " + text.toUpperCase());
console.log("toLowerCase = " + text.toLowerCase());

let concat = charAt.concat(" ", slice);
console.log("concat = " + concat);

console.log("trim = " + text.trim());

let split = text.trim().split(" ");
console.log("split = " + split);

let replace = text.trim().replace("world", "dunia");
console.log("replace = " + replace);

let sliceLast = text.trim().slice(-1);
console.log("slice = " + sliceLast);