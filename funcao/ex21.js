function valorPago(idade){

    if(idade < 10){
        return 180
    }else if(idade < 30){
        return 150

    }else if(idade < 60){
        return 195
    }else{
        return 230
    }
}

console.log(valorPago(8))
console.log(valorPago(15))
console.log(valorPago(35))
console.log(valorPago(52))
console.log(valorPago(80))

