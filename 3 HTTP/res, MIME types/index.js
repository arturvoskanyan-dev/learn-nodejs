import {createServer} from "node:http"
import fs from "node:fs"
import path from "node:path"

// res methods

// const server = createServer((req, res) => {
    // res.writeHead(200, {"Content-Type": "text/plain"})
    // res.end("Hello World");

    // res.write("Hello Node JS")
    // res.end()

    // res.setHeader("Content-Type", "text/html");
    // res.end("Hello")
// })

// MIME types

const server = createServer((req, res) => {
    // res.writeHead(200, {"Content-Type": "text/html"});
    // res.end("<h1>Hello Node JS</h1><p>learning node js</p>")

    // const data = {
    //     name: "John",
    //     age: 25
    // }

    // res.writeHead(200, {"Content-Type": "application/json"});
    // res.end(JSON.stringify(data))

    if(req.url === "/") {
        res.writeHead(200, {"Content-Type": "text/html"})
        fs.createReadStream(path.resolve("public/index.html")).pipe(res)
    } else if(req.url === "/style.css") {
        res.writeHead(200, {"Content-Type": "text/css"})
        fs.createReadStream(path.resolve("public/style.css")).pipe(res)
    }
})


server.listen(3000, () => {
    console.log("Server@ ashxatum e http://localhost:3000");
})
