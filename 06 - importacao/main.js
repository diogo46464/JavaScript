const {gets, print} = require('./funcoes-auxiliares'); 

const quantidadeDeAlunos = gets();
let maiorValorDeEntrada = 0;

for(i = 1; i < quantidadeDeAlunos; i++){
    const numerosSorteado = gets();
    if(numerosSorteado > maiorValorDeEntrada){
        maiorValorDeEntrada = numerosSorteado
    }
}

print(maiorValorDeEntrada);
