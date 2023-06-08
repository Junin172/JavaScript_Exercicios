let tempo = Number(prompt("Quanto tempo foi gasto na viagem em horas?"))
let velocidade = Number(prompt('Qual foi a velocidade média?'))

let distancia = velocidade * tempo
let litros = distancia / 12
let minutos = tempo*60

alert('Você gastou ' + minutos + ' minutos para chegar' + ' e percorreu ' + distancia + ' km, sua velocidade média foi de ' + velocidade + "km², e você gastou " + litros + ' de gasolina.')