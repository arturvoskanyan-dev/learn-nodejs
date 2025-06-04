/* 

Կարդալ, վերագրել, տեղափոխել
Գոյություն ունի ֆայլ՝ old-data/data.txt
Կարդա դրա պարունակությունը։
Գրիր նույն բովանդակությունը նոր ֆայլում՝ new-data/copied.txt
Այնուհետև ջնջիր սկզբնական ֆայլը։

*/

import fs from "node:fs/promises"
 

async function read() {
    try {
        const data = await fs.readFile("./old-data/data.txt", "utf8");
        await fs.writeFile("./old-data/copied.txt", data, "utf8")
        await fs.unlink("./old-data/data.txt")
    } catch(err) {
        console.log(err);
    }
}

read()