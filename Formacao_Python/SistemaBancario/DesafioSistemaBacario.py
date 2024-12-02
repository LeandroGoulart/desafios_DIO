# Desenvolvido por Leandro Goulart
import os
from datetime import datetime  # Importando modulo

# Variáveis
transacoes = []
saldo_atual = 0  
limite = 500
numero_saques = 0
LIMITE_SAQUES = 3
nome_arquivo = "extrato.txt"

# Operações
def depositar():
    limpar_terminal()  # Limpar a tela antes da operação
    global saldo_atual
    valor = float(input("Informe o valor do depósito: "))
    if valor > 0:
        saldo_atual += valor
        transacao = f"{datetime.now()} - Depósito: R$ {valor:.2f} - Novo saldo: R$ {saldo_atual:.2f}"  # Include the current date and time in the transaction record
        transacoes.append(transacao)
        salvar_transacao(transacao)
        print("Operação realizada. Novo saldo:", saldo_atual)
    else:
        print("Operação falhou! O valor informado é inválido.")

def sacar():
    limpar_terminal()  
    global saldo_atual
    global numero_saques
    valor = float(input("Informe o valor do saque: "))
    excedeu_saldo = valor > saldo_atual
    excedeu_limite = valor > limite
    excedeu_saques = numero_saques >= LIMITE_SAQUES

    if excedeu_saldo:
        print("Operação falhou! Você não tem saldo suficiente.")
    elif excedeu_limite:
        print("Operação falhou! O valor do saque excede o limite.")
    elif excedeu_saques:
        print("Operação falhou! Número máximo de saques excedido.")
    elif valor > 0:
        saldo_atual -= valor
        numero_saques += 1
        transacao = f"{datetime.now()} - Saque: R$ {valor:.2f} - Novo saldo: R$ {saldo_atual:.2f}"  
        transacoes.append(transacao)
        salvar_transacao(transacao)
        print("Operação realizada. Novo saldo:", saldo_atual)
    else:
        print("Operação falhou! O valor informado é inválido.")

def extrato():
    limpar_terminal()  # Limpar a tela antes da operação
    print("\n===================== HISTÓRICO DE TRANSAÇÕES =====================")
    for transacao in transacoes:
        print(transacao)
    print("===================================================================")
    print("Saldo atual: R$", "{:.2f}".format(saldo_atual))

def saldo():
    limpar_terminal()
    print("Seu saldo atual é: R$", "{:.2f}".format(saldo_atual))

def sair():
    global running
    running = False

# Gravação no arquivo
def salvar_transacao(transacao):
    with open(nome_arquivo, 'a') as arquivo:
        arquivo.write(transacao + "\n")

# Limpeza do terminal
def limpar_terminal():
    os.system('cls' if os.name == 'nt' else 'clear')

# Carrega as transações do arquivo ao iniciar o programa
def carregar_transacoes():
    if os.path.exists(nome_arquivo):
        with open(nome_arquivo, 'r') as arquivo:
            for linha in arquivo:
                transacoes.append(linha.strip())

# Carrega as transações do arquivo ao iniciar o programa
carregar_transacoes()

# Menu principal
switch = {
    'd': depositar,
    's': sacar,
    'e': extrato,
    'r': saldo,
    'q': sair
}

running = True
while running:
    menu = """
*************************
#   [d] Depositar       #  
#   [s] Sacar           #
#   [e] Extrato         #
#   [r] Saldo           #         
#   [q] Sair.           #  
*************************

=> """
    opcao = input(menu)
    if opcao in switch:
        switch[opcao]()
    else:
        print("Operação inválida, por favor selecione novamente a operação desejada.")