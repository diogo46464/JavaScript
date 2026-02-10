/*
    2) Crie uma classe para representar pessoas
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
    Instancie uma pessoa chamada José que tenha 70 kg de peso e 1,75 de altura e peça ao José para dizer o valor do seu IMC;

*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / (this.altura * this.altura);
    }

    classificarImc() {

        const imc = this.calcularImc();
        if (imc < 18.5) {
            return 'peso';

        } else if (imc >= 18.5 && imc < 25) {
            return'Peso normal';

        } else if (imc >= 25 && imc < 30) {
            return'Acima do peso';

        } else if (imc >= 30 && imc < 40) {
           return'Obeso';

        } else {
            return 'Obesidade grave';

        }

    }

}

const jose = new Pessoa('jose', 70, 1.75);
console.log(jose.classificarImc());

const diogo = new Pessoa('diogo', 59, 1.70);
console.log(diogo.classificarImc())

