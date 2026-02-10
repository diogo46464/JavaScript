function escrevaMeuNome(nome){
    return 'Meu nome é ' + nome;
}

escrevaMeuNome('Diogo');
escrevaMeuNome('Renan');

function verificarIdade(idade){
    if(idade >= 18){
       console.log(escrevaMeuNome('Vitor') +' é maior');
    }
    else{
       console.log(escrevaMeuNome('Vitor') +' é menor');
    }

}

verificarIdade(18);