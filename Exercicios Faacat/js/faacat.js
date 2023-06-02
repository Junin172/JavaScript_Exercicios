function avaliacaodez() {
    let valor = Number(prompt('Digite um número'))
    if (valor > 10) {
        alert('O número deve ser maior que 10');
    }
    else if (valor == 10) {
        alert('O número é igual que 10');
    }
    else (valor < 10); {
        alert('valor menor que 10');
    }
}

function positivoounegativo() {
    let valor = Number(prompt('Digite um número: '))
    if (valor > 0) {
        alert('O número é positivo');
    }
    else if (valor < 0) {
        alert('O número é negativo')
    }
    else {
        alert('O número é zero')
    }
}

function maca() {
    let qtd_maca = Number(prompt('Digite a quantidade de maçãs: '))
    let preco = 0;
    if (qtd_maca >= 12) {
        preco = qtd_maca * 1;
        alert(`O preço total ficou: ${preco}`)
    }
    else {
        preco = qtd_maca * 1.30;
        alert(`O preço total ficou: ${media}`)
    }
}

function media() {
    let nota1 = Number(prompt('Digite a sua primeira nota: '));
    let nota2 = Number(prompt('Digite a sua segunda nota: '));
    let media = (nota1 + nota2) / 2;
    alert(`Sua média é: ${media}`)
}

function idade() {
    let nascimento = Number(prompt('Digite o seu ano de nascimento: '));
    let ano_atual = Number(prompt('Digite o ano em que estamos: '));
    let idade = (ano_atual - nascimento);
    if (idade > 16) {
        if (idade < 18) {
            alert('Você pode votar opcionalmente.')
        }
        else {
            alert("O seu voto é obrigatório")
        }
        // else if(idade==16||17){
        //     alert('Você pode votar caso queira este ano.')
        // }
    }
    else {
        alert('Você não pode votar ainda.')
    }

}

function maior() {
    let valor = Number(prompt('Digite o valor: '))
    let valor1 = Number(prompt('Digite outro valor: '))
    if (valor > valor1) {
        alert('O maior valor é: ' + valor)

    }
    else {
        alert('O maior valor é: ' + valor1)
    }
}
// ex20
function ordemCrescente() {
    let valor1 = Number(prompt('Digite o valor'));
    let valor2 = Number(prompt('Digite o segundo valor'));

    if (valor1 > valor2) {
        alert('A ordem crescente dos núemros será: ' + valor2 + ' ' + valor1)
    }
    else {
        alert('A ordem crescente dos números será: ' + valor1 + ' ' + valor2)
    }
}


// ex21
function xadrez() {
    let inicio = Number(prompt('Digite a hora de início da partida: '));
    let fim = Number(prompt('Digite a hora de fim da partida: '));
    let duracao;

    if (fim < inicio) {
        duracao = (24 - inicio) + fim;

    }
    else if (inicio = fim) {
        duracao = fim
    }

    else {
        duracao = fim - inicio;
    }

    alert('O total de horas da partida foi: ' + duracao);
}


//ex22
function HoraExtra() {
    let hora = Number(prompt('Digite a quantidade de horas trabalhadas: '));
    let salario = Number(prompt('Digite o seu salário hora: R$'));
    let extra = (hora - 160) * (salario * 1.5);
    let calculo;

    if (hora > 160) {
        calculo = (160 * salario) + extra
    }
    else {
        calculo = (hora * salario)
    }
    alert(`O salário total no mês será de: R$ ${calculo}`);
}

//ex23
function pesoIdeal() {
    let nome = prompt("Digite seu nome: ")
    let altura = prompt('Digite sua altura em metros: ')
    let sexo = prompt("Digite seu sexo: (M ou F)")
    let peso_ideal;

    if (sexo === "M" || sexo === "m") {
        peso_ideal = (72.7 * altura) - 58
    }
    else if (sexo === "F" || sexo === "f") {
        peso_ideal = (62.1 * altura) - 44.7
    }
    alert(nome + ', seu peso ideal seria: ' + peso_ideal.toFixed(2) + ' quilos.')
}

//ex 24
function comissao() {
    let salario = Number(prompt('Digite seu salário: '));
    let vendas = Number(prompt('Digite o valor total de vendas que foram efetuadas: R$'));
    let calculo;

    if (vendas < 1500) {
        calculo = salario + (vendas * 0.03)
    }
    else if (vendas > 1500) {
        calculo = salario + ((vendas - 1500) * 0.05) + (1500 * 0.03)
    }
    alert('O seu salário total será de: R$ ' + calculo)
}

//ex25
function saldo() {
    let conta = Number(prompt('Digite o número de sua conta: '));
    let saldo = Number(prompt('Digite seu saldo: R$ '));
    let debito = Number(prompt('Digite seu débito: R$ '));
    let credito = Number(prompt('Digite seu crédito: R$ '));
    let SaldoAtual = Number(saldo - debito + credito);

    if (SaldoAtual >= 0) {
        alert(`Seu saldo é positivo! ${SaldoAtual}`)
    }
    else if (SaldoAtual < 0) {
        alert(`O saldo da conta de número ${conta} é negativo! ${SaldoAtual}`)
    }
}
//ex26

function estoque(){
    let quantidade_atual= Number(prompt('Digite a quantidade atual do estoque: '))
    let quantidade_maxima= Number(prompt('Digite a quantidade máxima deste estoque: '))
    let quantidade_minima= Number(prompt('Digite a quantidade mínima deste estoque: '))
    let quantidade_media= Number((quantidade_maxima+quantidade_minima)/2)
    
    if (quantidade_atual>= quantidade_media){
        alert('Não Efetuar Compra.')
    }
    else('Efetuar Compra.')
}

