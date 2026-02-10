function venderFruta(fruta) {
    switch (fruta) {
        case 'maças':
            console.log("Não vendemos está fruta aqui")
            break

        case 'kiwi':
            console.log("Estamos com escassez de kiwi.")
            break

        case 'melancia':
            console.log("Aqui está, custa R$ 3,00 o quilo")

            break
        default:
            console.log("Erro, fruta inválida")
    }
}

venderFruta('maças')
venderFruta('kiwi')
venderFruta('melancia')
venderFruta('alcatra')