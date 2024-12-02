// Defina aqui os tipos de minerais Carvao, Ferro, Diamante e Pedra
let minerais = ["Carvao", "Ferro", "Diamante", "Pedra"];

quantidadeGolpes = 4;
quantidadeGolpes = 3;
quantidadeGolpes = 2;

// Loop para cada golpe, de 1 até a quantidade informada
for (let i = 1; i <= quantidadeGolpes; i++) {
    // Calcula o índice do mineral usando o operador de módulo (%) para garantir que o índice esteja dentro do tamanho do array
    let minaIndex = i % minerais.length;
    
    // Exiba o número do golpe (i), concatene com o caractere ":", após, concatene com o tipo de minerais[minaIndex] e imprima
    console.log(i + ": " + minerais[minaIndex]);
}

