function jurosimples(capitalInicial,taxa,tempo){
    return   capitalInicial + capitalInicial*taxa*tempo
     
}
function jurocomposto(capitalInicial,taxa,tempo){
    return    capitalInicial * (1 +taxa) **tempo
     
}

console.log(jurosimples(10,30/100,5))
console.log(jurocomposto(10,30/100,5))