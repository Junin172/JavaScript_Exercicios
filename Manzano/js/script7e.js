let valor= Number(prompt('Digite o valor da dívida:'))
let taxa= Number(prompt('Digite o valor da taxa:'))
let tempo= Number(prompt('Digite quantos meses esta dívida está em atraso:'))

let prestacao= valor + (valor*taxa/100)*tempo

alert('Você terá de pagar uma prestação de R$ ' + prestacao)