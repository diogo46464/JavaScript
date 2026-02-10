function comprar(veiculos) {
    switch (veiculos) {
        case 'hatch':
            return ('Compra efetuada com sucesso')
        case 'sedans':
        case 'motocicletas':
        case 'camionete':
            return 'Tem certeza que não prefere este modelo'

        default:
            return "Não trabalhamos com este tipo de automóvel aqui"
    }
}

console.log(comprar('sedans'))
console.log(comprar('hatch'))
console.log(comprar('motocicletas'))
console.log(comprar('Jetski'))