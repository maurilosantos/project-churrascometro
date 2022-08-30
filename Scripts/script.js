var inputAdultos = document.getElementById("inputAdultos");
var inputCriancas = document.getElementById("inputCriancas");
var inputDuracao = document.getElementById("inputDuracao");
var ExpCarne = 0;
var ExpCerveja = 0;
var ExpBebida = 0;

function calcular() {
    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value

    ExpCarne = (((adultos * qtdCarne(duracao)) + (criancas * qtdCarne(duracao) / 2)) / 1000).toFixed(1)
    ExpCerveja = Math.ceil(adultos * qtdCerveja(duracao))
    ExpBebida = Math.ceil((adultos * qtdBebida(duracao)) + (criancas * qtdBebida(duracao) / 2))

    
    document.getElementById("carne").innerHTML = ExpCarne + " Kg de Carne";
    document.getElementById("cerveja").innerHTML = ExpCerveja + " Latinhas de Cerveja (350ml)";
    document.getElementById("bebidas").innerHTML = ExpBebida + " Garrafas não-alcoólicas (1L)";
    duracao > 0 ? document.getElementById("resultado").style.display = "inline" : document.getElementById("resultado").style.display = "none"
}

function qtdCarne(duracao) {
     return duracao >= 6 ? 650 : 400
}

function qtdCerveja(duracao) {
    return duracao >= 6 ? 6 : 4
}

function qtdBebida(duracao) {
    return duracao > 6 ? 1.5 : 1
}
