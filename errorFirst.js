function asincrona(callback) {
    setTimeout(function () {
        try {
            let a = 3 + z;
            callback(null, a);
        } catch (e) {
            callback(e);
        }
    }, 1000);
}


asincrona(function (err, dato) {
    if (err) {
        console.error('tenemos un error');
        console.error(err);
        return false;
        // throw err; en funciones asincronas no sirve el try catch
    }
    console.log('todo ha salido bien, la data es', dato);

})