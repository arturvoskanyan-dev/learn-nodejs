// Թղթապանակ ստեղծել	fs.mkdir

// import fs from "node:fs"
import fs from "node:fs/promises"

// fs.readFile(path[, options], callback) => veradardznume file parunakutyun@ ev karox enq nshel te inch formatov petqe veradardzni

// fs.readFile("../path/main.js", "utf8", (err, data) => {
//     if(err) {
//         console.log(err);
//         return;
//     }

//     console.log(data);
    
// })

// async function read() {
//     try {
//         const data = await fs.readFile("../path/main.js", "utf8");
//         console.log(data);
//     } catch(err) {
//         console.log(err);
//     }
// }

// read()

// fs.readFile("../path/main.js", "utf8").then((data) => console.log(data))
// fs.readFile("../path/main.js", "hex").then((data) => console.log(data))


////////////////////////////////////////////////////////////////////////////////////////////////////

// fs.writeFile(file, data[, options], callback) => sra mijocov stexcum enq file

// fs.writeFile("message.txt", "Hello NodeJS", "utf8", (err) => {
//     if(err) {
//         console.log(err);
//         return;
//     }

//     console.log("File hajoxutyamb stexcvec");
// })

// try {
//     await fs.writeFile("message.txt", "Hello World", "utf8");
//     console.log("file hajoxutyamb stexcvec");
// } catch(err) {
//     console.log(err);
// }

// const user = {name: "Hakob", age: 24}
// const user2 = {name: "Karapet", age: 52}

// fs.writeFile("user.json", JSON.stringify(user, null, 2), "utf8")
// fs.writeFile("user.json", JSON.stringify(user2, null, 2), {encoding: "utf8", flag: "a"})


////////////////////////////////////////////////////////////////////////////////////////////////////

// fs.appendFile(path, data[, options], callback) => sra mijocov file-um avelacnum enq tvyal

// fs.appendFile("foo.txt", "Hello \n\n", "utf8", (err) => {
//     if(err) {
//         console.log(err);
//         return;
//     }

//     console.log("Tvyalner@ hajoxutyamb avelacvel en");
// })


// try {
//     await fs.appendFile("foo.txt", "Sa arden promises \n", "utf8");
//     console.log("Tvyalner@ hajoxutyamb avelacvel en");
// } catch(err) {
//     console.log(err);
// }


////////////////////////////////////////////////////////////////////////////////////////////////////

// fs.unlink(path, callback) => sa jnjum e file

// try {
//     await fs.unlink("foo.txt");
//     console.log("Hajoxutyamb jnjvel e");
// } catch(err) {
//     console.log(err);
// }


////////////////////////////////////////////////////////////////////////////////////////////////////

// fs.readdir => return e anum [] vori mej kan ayd folder bolr filer@ 

// try {
//     const files = await fs.readdir("./");
//     console.log(files);
// } catch(err) {
//     console.log(err);
// }


////////////////////////////////////////////////////////////////////////////////////////////////////

// fs.stat => sa talis e information tvyal file kam folder masin

// try {
//     const stats = await fs.stat("main.js");
//     console.log(stats);
//     console.log(stats.isFile());
//     console.log(stats.isDirectory());
// } catch(err) {
//     console.log(err);
// }


////////////////////////////////////////////////////////////////////////////////////////////////////

// mkdir, rmdir => sarqel, jnjel folder

// try {
//     await fs.mkdir("new-folder");
// } catch(err) {
//     console.log(err);
// }

try {
    await fs.rmdir("../new-folder")
} catch(err) {
    console.log(err);
}