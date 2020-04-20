function otraFuncion() {
  seRompe();
}

function seRompe() {
  return 3 + z;
}

function seRompeAsicrona(cb) {
  setTimeout(function () {
    try {
      return 3 + z;
    } catch (err) {
      console.error('error en funcion asincroma');

      cb(err);
    }
  })
}
try {
  //otraFuncion();
  seRompeAsicrona(function (err) {
    console.log(err.message)
  });
} catch (err) {
  console.error("vaya, algo se ha roto...");
  console.error(err.message);
  console.log("pero no pasa nada c: lo hemos capturado");
}
console.log("esto de aqui esta al final");