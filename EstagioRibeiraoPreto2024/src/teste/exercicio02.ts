function fibonacci(n: number): string {
    let num1: number = 0;
    let num2: number = 1;
    let result: number = 0;
    
    //ele vai continuar a buscar até result ser maior que n
    while (result < n){
        result = num1 + num2
        num1 = num2;
        num2 = result;
    }

    if( result === n){
        return `O numero: ${n} pertence a sequêcia`;
    } else {
        return `O numero: ${n} não pertence a sequêcia`;
    }
}

//coloocando o numero
let FIBONACCI: number = 13

//testando o codigo
console.log(fibonacci(FIBONACCI));

