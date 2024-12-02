function calcularRank(vitorias, derrotas) {
    const saldo = vitorias - derrotas;
    
    let elo;
    if (vitorias < 10) {
        elo = "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
        elo = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        elo = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        elo = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        elo = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        elo = "Lendário";
    } else {
        elo = "Imortal";
    }

    return `O Herói tem saldo de ${saldo} e está no Elo ${elo}`;
}

// Exemplo de uso
let vitorias = 45;
let derrotas = 15;
const resultado = calcularRank(vitorias, derrotas);
console.log(resultado);
