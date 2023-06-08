function tabuada(){

        let numero = Number(prompt("Digite um número: "))
    
        let contador=1;
    
        multiplicacao = 0;
    
        while (contador <11){
    
            multiplicacao = contador*numero;
    
            document.getElementById(`${contador}`).innerHTML= (`${numero} X ${contador} = ${multiplicacao}`)
    
            (`${contador} `)
    
            contador++;
    
        }
    
    }