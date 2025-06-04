/* 

Ֆայլի ամբողջական absolute ուղին
Քեզ տրված է հարաբերական ուղի՝ "./files/input.txt"
Տպի դրա բացարձակ ուղին path.resolve()-ով։

*/

import path from "node:path"

console.log(path.resolve("files", "file.txt"));

/* 

Ստեղծել թղթապանակներ ըստ user-ի
Ունեց անունների զանգված՝ ["anna", "armen", "saro"]
Ստեղծիր մի հիմնական թղթապանակ՝ "users"
Այդ թղթապանակում յուրաքանչյուր օգտատիրոջ անունով ստեղծիր ներսի թղթապանակ, օրինակ՝ users/anna, users/armen, և այլն։

*/

import fs from "node:fs/promises"

async function usersName(arr) {  
    const newArr = new Set(arr);

    for(const item of newArr) {
        try {
            await fs.mkdir(`./users/${item}`, { recursive: true });
        } catch(err) {
           
        }
    }
}

usersName(["anna", "armen", "saro", "hakob", "saro", "asd"])
