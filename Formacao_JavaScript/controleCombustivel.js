class consumo{
    constructor(carro,consumoMedio,distancia,precoCombustivel,tempo){
    this.carro= carro;
    this.consumoMedio= consumoMedio; // kmLv
    this.distancia= distancia;
    this.precoCombustivel= precoCombustivel;
    this.tempo= tempo;
    }
    calcularconsumoMedio(){
        return this.distancia/this.consumoMedio;
    }
}
const teste = new consumo ('Ford_Focus',8.9, 8, 5.82, 11);
const formulaConsumo = (teste.distancia/teste.consumoMedio*teste.precoCombustivel)

console.log(`consumo médio Km/L do ${teste.carro} é: ${teste.calcularconsumoMedio().toFixed(2)}`);
console.log(`O valor gasto para percorrer ${teste.distancia}km é: R$${formulaConsumo.toFixed(2)}`);
console.log(`Gasto mensalmente a quantia de R$${(formulaConsumo*24*2).toFixed(2)}`);





