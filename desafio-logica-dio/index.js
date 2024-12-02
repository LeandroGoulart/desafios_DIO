//  1️⃣ Desafio Classificador de nível de Herói

const nome = "lGoulart";

// Objetivo: Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói
let nivel;
let xp = 5000;

// Utilizar estrutura de decisão para definir o nível
switch (true) {
    case xp <= 1000:
        nivel = "Ferro";
        break;
    case xp >= 1001 && xp <= 2000:
        nivel = "Bronze";
        break;
    case xp >= 2001 && xp <= 5000:
        nivel = "Prata";
        break;
    case xp >= 5001 && xp <= 7000:
        nivel = "Ouro";
        break;
    case xp >= 7001 && xp <= 8000:
        nivel = "Platina";
        break;
    case xp >= 8001 && xp <= 9000:
        nivel = "Ascendente";
        break;
    case xp >= 9001 && xp <= 10000:
        nivel = "Imortal";
        break;
    case xp > 10000:
        nivel = "Radiante";
        break;
    default:
        nivel = "Ferro";
}

console.log(`O Herói ${nome} está no nível: ${nivel}`);
        
