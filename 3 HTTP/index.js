import {createServer} from "node:http"

// const server = createServer((req, res) => {
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.headers);

    // res.end()
// })

const server = createServer((req, res) => {
    if(req.method === "GET") {
        switch (req.url) {
            case "/":
                res.writeHead(200, {"Content-Type": "text/plain"})
                res.end("Sa Home page");
                break;
            case "/about":
                res.writeHead(200, {"Content-Type": "text/plain"})
                res.end("About page");
                break;
            default:
                res.writeHead(404, {"Content-Type": "text/plain"})
                res.end("Ays eji masin texekutyun chunenq")
        }
    }
})

// server.listen(3000, () => {
//     console.log("Server@ ashxatum e http://localhost:3000");
// })
