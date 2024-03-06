let StringAleatoria: string = 'estagio ribeirao preto'
let stringInvertida: string = "";

for (let i = StringAleatoria.length - 1; i >= 0; i--) {
    stringInvertida += StringAleatoria[i];
}

console.log(stringInvertida);