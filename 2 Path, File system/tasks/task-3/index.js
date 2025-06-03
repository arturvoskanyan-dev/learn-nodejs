/* 

Բոլոր .js ֆայլերի ցուցակ
Քո նախագծի թղթապանակում կա մի թղթապանակ՝ "src" անունով։
Գտիր այդ թղթապանակում եղած բոլոր .js ֆայլերը։
Տպի դրանց անունները։
Օգտագործիր fs.readdir, path.extname, և ցանկության դեպքում fs.stat՝ ստուգելու՝ դա ֆայլ է թե թղթապանակ։

*/

import path from "node:path"
import fs from "node:fs/promises"

async function checkFolderJS() {
    try {
        const generalExt = await fs.readdir("./src");

        for (const item of generalExt) {
            const itemPath = path.join("./src", item);

            const stats = await fs.stat(itemPath);

            if (stats.isFile() && path.extname(item) === ".js") {
                console.log(item);
            }
        }
    } catch (err) {
        console.error(err);
    }
}

checkFolderJS();