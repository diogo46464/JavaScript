const pessoa = {
    nome: 'Diogo H de Paula Pincetta',
    idade: 23,

    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

pessoa['nome'] = 'teste';
pessoa.nome = 'teste';