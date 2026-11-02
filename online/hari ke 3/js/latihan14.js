var people = [
  { name: "John", job: "Programmer", gender: "male", age: 30 },
  { name: "Sarah", job: "Model", gender: "female", age: 27 },
  { name: "Jack", job: "Engineer", gender: "male", age: 25 },
  { name: "Ellie", job: "Designer", gender: "female", age: 35 },
  { name: "Danny", job: "Footballer", gender: "male", age: 30 },
];

// Menggunakan filter untuk menyaring data
var resultFilter = people.filter(function (person) {
  return person.gender === "male" && person.age > 29;
});

console.log(resultFilter);