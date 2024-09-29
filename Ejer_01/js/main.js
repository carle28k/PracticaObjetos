let arrayNumeros = [4, 6, 80]

const sumaArray = (arrayEntrada) => {
    let suma = arrayEntrada.reduce(function (acumulador, dato) {
        return acumulador + dato;
    }, 0);

    console.log(suma)
    document.write(suma)
}

sumaArray (arrayNumeros)
