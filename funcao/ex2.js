function trianguloModelos(Lado1, Lado2, Lado3) {
    if (Lado1 == Lado2 && Lado2 == Lado3) {
        return "Equilátero"
    } else if (Lado1 == Lado2 || Lado2 == Lado3 || Lado1 == Lado3) {
        return "Isósceles"
    } else {
        return "Escaleno"
    }
}

console.log(trianguloModelos(2, 2, 2))
console.log(trianguloModelos(2, 3, 3))
console.log(trianguloModelos(2, 3, 4))
