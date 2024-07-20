function calcularMassaCorporal (altura, peso) {
    return peso / (altura * altura);
}

console.log(calcularMassaCorporal(1.68, 57));

function calcularFatorial(numero) {
    if (numero === 0  ||  numero === 1) {
        return 1;
    }

    let fatorial = 1;
    while (numero >= 1) {
        fatorial = fatorial * numero;
        numero--;
    }

    fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }

    return fatorial;
}

console.log(calcularFatorial(6));

function converterDolarReal(dolar) {
    let cotacao = 4.8;
    return (dolar * cotacao).toFixed(2);
}

console.log(converterDolarReal(10));

function calcularAreaPerimetroRetangulo (largura, comprimento) {
    let area = largura * comprimento;
    let perimetro = 2 * (largura + comprimento);
    console.log(`A área do retângulo é ${area}`);
    console.log(`O perímetro do retângulo é ${perimetro}`);
}

calcularAreaPerimetroRetangulo(3, 4);

function calcularAreaComprimentoCircunferencia (raio) {
    let pi = 3.14;
    let area = (pi * raio * raio).toFixed(2);
    let comprimento = (2 * pi * raio).toFixed(2);
    console.log(`A área da circunferência é ${area}`);
    console.log(`O comprimento da circunferência é ${comprimento}`);
}

calcularAreaComprimentoCircunferencia(10);

function exibirTabuada (numero) {
    for (let i = 1; i <= 10; i++) {
        multiplicacao = numero * i;
        console.log(`${numero} * ${i} = ${multiplicacao}`);
      }
}

exibirTabuada(6);

