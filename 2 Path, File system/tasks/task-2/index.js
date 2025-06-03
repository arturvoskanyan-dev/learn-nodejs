/* 

Ստանալ ֆայլի ընդլայնումը path.extname()-ով
Ունես ֆայլի անուն՝ "report.final.version.pdf"
Գտիր ու վերադարձրու ֆայլի ընդլայնումը։

*/

import path from "node:path"

async function fileExtname(filPath) {
    try {
        const ext = path.extname(filPath);
        console.log(ext);
    } catch(err) {
        console.log(err);
    }
}

fileExtname("report.final.version.pdf");