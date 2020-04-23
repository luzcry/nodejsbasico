const bcrypt = require("bcrypt");
//cifrar contraseña

const password = "1234segura!";
//hash es aplicar un algoritmo para poder cambiar el texto por una cadena de caracteres
bcrypt.hash(password, 5, function (err, hash) {
    console.log(hash);

    bcrypt.compare(password, hash, function (err, res) {
        //console.log(err);
        console.log(res);
    })
});