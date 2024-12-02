const listaNumeros = [];
function geraListaRandon() {
    for (let i = 0; i < 15; i++) {
        listaNumeros.push(Math.floor(Math.random() * 80) + 1);
    }
    return listaNumeros
}
geraListaRandon();
console.log(listaNumeros);


for (let i = 0; i < listaNumeros.length; i++) {
    const pares = listaNumeros[i];
    if (pares % 2 === 0) {
        console.log(pares);
    }
}
 
