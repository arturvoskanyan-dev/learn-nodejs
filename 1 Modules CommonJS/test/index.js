/*

🧠 ԹԵՍՏԱՅԻՆ ՀԱՐՑԵՐ 
🟢 Հեշտ
Ո՞ր ֆունկցիան է օգտագործվում մոդուլ ներմուծելու համար CommonJS-ում։

ա) require()
բ) import
գ) include
դ) fetch

Պատասխան՝ require()

Ինչպիսի՞ տիպի փոփոխական է module.exports։

ա) function
բ) object
գ) string
դ) undefined

Պատասխան՝ object

Եթե մոդուլում գրում ենք exports.name = "Artur" ապա մյուս ֆայլում require('./module')-ի արդյունքը կլինի՝

ա) "Artur"
բ) { name: "Artur" }
գ) undefined
դ) name

Պատասխան՝ {name: "Artur"}

🟡 Միջին
Գտիր սխալը հետևյալ կոդում՝

a.js

exports = { message: "Hi" };

main.js

const a = require('./a');
console.log(a.message);
Ինչ է արտածելու այս կոդը․

Պատասխան՝ undefined որովհետև պետք է գրեինք module.exports = {message: "Hi"}

// a.js
console.log("a.js loaded");
module.exports = { value: 10 };

// b.js
const a = require('./a');
a.value = 20;
console.log("b.js done");

// main.js
const b = require('./b');
const a = require('./a');
console.log(a.value);


1. a.js loaded
2. b.js done
3. 20

*/