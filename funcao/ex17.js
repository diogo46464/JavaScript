function funcionario(plano, salario){
    switch(plano){
        case 'A':
            return salario * 1.1
        case 'B':
            return salario * 1.15
        case 'C':
            return salario * 1.20
        default:
            return 'Número inválido'
           
    }
}
console.log(funcionario('A',1000))
console.log(funcionario('B', 1000));
console.log(funcionario('C', 1000));
console.log(funcionario('D', 1000));