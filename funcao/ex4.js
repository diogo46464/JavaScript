function div(dividendo, divisor){ 
    console.log("Resultado:" + Math.floor(dividendo/divisor))
    console.log(`Resto: ${dividendo % divisor}`)
}
console.log(div(10,2))