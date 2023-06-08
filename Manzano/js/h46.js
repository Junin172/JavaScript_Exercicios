function conversao(){
    let celsius = 10;
    let contadora = 1;
    let fahrenheit = 0;
    

    while(contadora<=100){
        fahrenheit = celsius*1.8+32
        console.log('Os graus em Celsius são' + celsius + '° e o valor em fahrenheit é' + fahrenheit)    
        celsius=celsius+10
    }
}