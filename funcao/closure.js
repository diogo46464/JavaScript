//Closure é o escopo criado quando uma função e declarada
// Esse escopo permite a função acessar manipular variáveis externas á função


const x = 'Global'

function fora () {
    const x = 'Local'
    function dentro() {
        return x
    }

    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())