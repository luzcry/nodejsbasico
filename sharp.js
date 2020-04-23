const sharp = require("sharp");
//trabajar con imagenes
sharp("icons8-heart-lock-100.png").resize(80).grayscale().toFile("resize.png");
