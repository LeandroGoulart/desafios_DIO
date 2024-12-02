// ContaBanco.java
public class ContaBanco {
    private String titular;
    private double saldo;
    private int numeroConta;
    private String agencia;

    

    // Construtor
    public ContaBanco(String titular) {
        this.titular = titular;
        this.saldo = 0.0; // saldo inicial
    }

    // Método para depositar
    public void depositar(double valor) {
        if (valor > 0) {
            saldo += valor;
            System.out.println("Depósito de R$ " + valor + " realizado com sucesso!");
        } else {
            System.out.println("Valor do depósito deve ser positivo.");
        }
    }

    // Método para sacar
    public void sacar(double valor) {
        if (valor > 0 && valor <= saldo) {
            saldo -= valor;
            System.out.println("Saque de R$ " + valor + " realizado com sucesso!");
        } else {
            System.out.println("Saque inválido. Verifique o valor e o saldo disponível.");
        }
    }

    // Método para obter o saldo
    public double getSaldo() {
        return saldo;
    }

    // Método para mostrar informações da conta
    public void mostrarInformacoes() {
        System.out.println("Titular: " + titular);
        System.out.println("Saldo: R$ " + saldo);
    }
}
