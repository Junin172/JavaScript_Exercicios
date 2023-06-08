
function comodos () {
    let loop = true;
    let areaTotal = 0;
    let comodosTotal = 0;
    while (loop==true) {

        let comodo = prompt('Digite o nome do cômodo: ')
        let largura = Number (prompt('Digite a largura do cômodo: '))
        let comprimento = Number (prompt('Digite o comprimento do cômodo: '))
        let area = largura * comprimento
        areaTotal += area 
        comodosTotal += 1
        alert ("A area do cômodo " + comodo + "é dê " + area + "m2")
        
        let escolha = prompt('Você deseja continuar (S) sim, (N) não: ')

        switch (escolha) {
            case  'S': 
            break;
            case 'N':
            loop = false;
            break;
            default: 
            break;
        }
        
        
    }

    alert('A quantidade de cômodos é: '+ comodosTotal + ' E a area total do ' + areaTotal)}