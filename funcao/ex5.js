function valorCerto(result){
    valorEmReais = `R$ ${result.toFixed(2).toString().replace(".",",")}`
    console.log(valorEmReais)
}

console.log(valorCerto(0.14+0.16))