const http = require("http");

http.createServer(router).listen(3000);

function router(req, res) {
    console.log("nueva petición");
    console.log(req.url);

    switch (req.url) {
        case "/hola":
            res.write("hola, que tal?");
            res.end();
            break;
        default:
            res.write("error 404: no se lo que quieres");
            res.end();
    }

    /* res.writeHead(201, {
        "content-type": "text/plain"
    })
    //escribir respuesta al usuario
    res.write("hola, ya sé usar http de node.js")

    res.end();*/
}
console.log("escuchando http en el puerto 3000");