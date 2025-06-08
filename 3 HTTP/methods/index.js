import {createServer} from "node:http"

const server = createServer((req, res) => {
    // GET

    if(req.method === "GET") {
        switch (req.url) {
            case "/":
                const user = {
                    name: "Ashot",
                    age: 25,
                    salary: 400000
                }

                res.writeHead(200, {"Content-Type": "application/json"})
                res.end(JSON.stringify(user))
                break;
            case "/blog":
                res.writeHead(200, {"Content-Type": "text/plain"});
                res.end("Blog page")
                break;
            default:
                res.writeHead(400, {"Content-Type": "text/plain"})
                res.end("Error 404")
        }
    }

    ///////////////////////////////////////////////////////////////////////////////

    //POST

    else if(req.method === "POST" && req.url === "/send") {
        let body = "";

        req.on("data", chunk => {
            body += chunk;
        })

        req.on("end", () => {
            console.log(body);

            res.writeHead(200, {"Content-Type": "text/plain"})
            res.end("Tvyalner@ @ndunvecin")
        })
    } else if(req.method === "POST" && req.url === "/user") {
        let obj = "";

        req.on("data", chunk => {
            obj += chunk
        })

        req.on("end", () => {
            console.log(JSON.parse(obj));

            res.writeHead(200, {"Content-Type": "application/json"})
            res.end(JSON.stringify(obj))
        })
    }

    ///////////////////////////////////////////////////////////////////////////////

    // PUT

    else if(req.method === "PUT" && req.url === "/update_user") {
        let body = "";

        req.on("data", chunk => {
            body += chunk
        })

        req.on("end", () => {
            console.log(body);

            res.writeHead(200, {"Content-Type": "text/plain"});
            res.end("Tvyalner@ tarmacvel en")
        })
    }
    
    else {
        res.writeHead(404, {"Content-Type": "text/plain"})
        res.end("Ej@ chi gntvel")
    }
})

server.listen(3000, () => console.log("Server@ ashxatum e http://localhost:3000"))