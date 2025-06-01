import path from "node:path";
import fs from "fs";

const currentDir = path.resolve();
// const filePath = path.join(currentDir, "index.js");

// console.log(filePath);
// console.log(path.parse(filePath));

//////////////////////////////////////////////////////////////

// const filePath = path.join(currentDir, "package.json");
// fs.readFile(filePath, "utf8", (error, text) => {
//     console.log(text);
// })

// fs.promises.readFile(filePath, "utf8").then((res) => console.log(res))


//////////////////////////////////////////////////////////////

const filePath = path.join(currentDir, "hello.txt");
// fs.promises.writeFile(filePath, "Hello Node js");
fs.promises.unlink(filePath);