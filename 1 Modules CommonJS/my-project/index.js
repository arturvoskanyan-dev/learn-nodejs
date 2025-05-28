// 1. .cjs
// 2. .js bayc ayn depqum erb package.json-um "type": "commonjs"
// 3. .cjs package.json "type": "module"

const math = require("./math.js");
const greet = require("./greet.js");

console.log(greet("Artur"));
console.log(math.add(2, 3));
console.log(math.multiply(4, 6))