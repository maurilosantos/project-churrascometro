

let inputHomens = document.getElementById("homens");
let inputMulheres = document.getElementById("mulheres");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("Calculando...");
    let homens = inputHomens.value;
    let mulheres = inputMulheres.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePH(duracao) * homens + carnePM(duracao) * mulheres + (carnePH(duracao)/2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * (homens + mulheres);
    let qtdTotalBebidas = bebidasPP(duracao) * (homens + mulheres) + (bebidasPP(duracao)/2 * criancas);
    let qtdTotalAcompanhamento = AcompanhamPP(duracao) * (homens + mulheres) + (AcompanhamPP(duracao)/2 * criancas);

    resultado.innerHTML = `<p><img src="./assets/meat.png" width="35px"> ${qtdTotalCarne/1000} Kg de Carne</p>`
    resultado.innerHTML += `<p><img src="./assets/cheers.png" width="35px"> ${Math.ceil(qtdTotalCerveja/350)} Latas de Cerveja (350ml)</p>`
    resultado.innerHTML += `<p><img src="./assets/soda.png" width="35px"> ${Math.ceil(qtdTotalBebidas/2000)} Garrafas (2L) de bebida não-alcoólica</p>`
    resultado.innerHTML += `<p><img src="./assets/espeto.png" width="35px"> ${qtdTotalAcompanhamento/1000} Kg de Acompanhamentos</p>`
function carnePH(duracao){
    
    if (duracao >= 6){
        return 650;
    } else {
        return 400;
    }
    }
    
    function carnePM(duracao){

     if (duracao >= 6){
            return 550;
    } else{
        return 300;
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
        function AcompanhamPP(duracao){
            if (duracao >= 6){
                return 450;
            } else {
                return 200;
            }
        }
  }
