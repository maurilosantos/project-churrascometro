// SEMPRE QUE FOR CRIAR ALGUM PROGRAMA, SAIBA AS REGRAS:
// Carne -   400 gr por pessoa                  + de 6 horas -> 650 gr por pessoa
// Cerveja - 1200 ml por Pessoa               + de 6 horas -> 2000 ml por pessoa
// Refrigerante/água  -  1000 ml por pessoa   + de 6 horas -> 1500ml por pessoa
// crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("Calculando...");
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao)/2 * criancas)
    console.log(qtdTotalCarne)

    resultado.innerHTML = `<p>${qtdTotalCarne/1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja/350)} Latas de Cervejas</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas/2000)} Garrafas (2L) de Bebidas</p>`

function carnePP(duracao){
    
    if (duracao >= 6){
        return 650;
    } else {
        return 400;
    }
    }
    
    function cervejaPP(duracao){
        
        if (duracao >= 6){
            return 2000;
        } else {
            return 1200;
        }
        }

        function bebidasPP(duracao){
            
            if (duracao >= 6){
                return 1500;
            } else {
                return 1000;
            }
            }
  }