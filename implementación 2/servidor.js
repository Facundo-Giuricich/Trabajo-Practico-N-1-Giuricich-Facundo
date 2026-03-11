const http = require("http");
const fs = require("fs");

const servidor = http.createServer((req, res) => {

    fs.readFile("index.html", (err, data) => {

        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data);
        res.end();

    });

});

servidor.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});