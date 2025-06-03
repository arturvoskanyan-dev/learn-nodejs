/* 

Ստուգել՝ գոյություն ունի՞ արդյոք մի ֆայլ
Ստեղծիր ֆունկցիա, որը կստուգի՝ "data.txt" ֆայլը գոյություն ունի՞։
Եթե կա, տպի՝ ֆայլը արդեն կա։
Եթե չկա՝ ստեղծի այն, և ներսում գրի՝ Նոր ֆայլ։

*/

import fs from "node:fs/promises"

async function checkFile(file) {
    try {
        await fs.stat(file);
        console.log("ֆայլը արդեն կա");
    } catch(err) {
        fs.writeFile(file, "New file", "utf8")
        console.log(`${file} file stexcvec`);
    }
}

checkFile("data.txt")
// checkFile("index.js")