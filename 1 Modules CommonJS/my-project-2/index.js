// 1. .mjs
// 2. .js package.json "type": "module"

// export`
// const person = require("./person.mjs");
// console.log(person);

// export default 
// const Person = require("./person.mjs").default;
// const myPerson = new Person("Karapet", 24);

// console.log(myPerson);

// export`
// const foo = require("./foo.mjs");
// console.log(foo.sum([1, 2, 4]));

// export default
// const foo = require("./foo.mjs").sum;
// console.log(foo([1, 2, 8, 24]));

//////////////////////////////////////////////////

const Person = require("./person.mjs").default;
const myPerson = new Person("Vazgen", 43);

const add = require("./person.mjs").add;

console.log(myPerson);
console.log(add(4, 5));