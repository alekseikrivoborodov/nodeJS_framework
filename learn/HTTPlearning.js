const http = require('http')

const PORT = process.env.PORT || 5000

const server = http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'application/json'})

    switch (req.url){
        case "/users": res.end(JSON.stringify([
            {id: 1, name: "Alexey"},
            {id: 2, name: "Anton"},
            {id: 3, name: "Gennadiu"},
        ]))
        case "/posts": res.end("this is posts")
        default: req.url
}})

server.listen(PORT, () => console.log(`Server started on ${PORT}`))
