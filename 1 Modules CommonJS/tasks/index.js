/* 

💻 ԽՆԴԻՐՆԵՐ
1. Մոդուլ բաշխում
Ստեղծիր 2 ֆայլ՝ math.js և main.js։
math.js-ում գրիր ֆունկցիա՝ add(a, b) և multiply(a, b)։
Դուրս բեր դրանք module.exports-ի միջոցով։
main.js-ում ներմուծիր մոդուլը և տպիր add(3, 5) և multiply(4, 2)։

2. Մոդուլների կապակցում
Ստեղծիր երեք ֆայլ՝
user.js — ունի getUser() ֆունկցիա, որը վերադարձնում է { name: "Anna", age: 20 }
logger.js — ունի ֆունկցիա log(obj) որը տպում է console.log(obj)
main.js — ներմուծում է getUser() և log(), կանչում է log(getUser())

3. Circular dependency (չափավոր բարդ)
Ստեղծիր երկու մոդուլ՝ a.js և b.js, որոնք իրար ներմուծում են, և main.js։
Յուրաքանչյուր մոդուլ exports.done = false
Իրար ներմուծելուց հետո, տպի իրենց դիմացի done արժեքը
main.js-ում տպի վերջնական արժեքները

*/