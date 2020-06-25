let vetor = []
let tab = document.getElementById('selnumeros')
let resultado = document.getElementById('res')
let numero = document.getElementById('numero')

function inLista(numero, lista){
    if(lista.indexOf(Number(numero)) != -1){
        return true
    } else {
        return false;
    }
}

function adicionarNumero() {
    if (numero.value.length == 0) {
        alert('Campo está vazio. Por favor, digite um número entre 1 e 100')
    } else if (Number(numero.value) <= 0 || Number(numero.value) > 100) {
        alert('Numero digitado inválido. Por favor, digite um número entre 1 e 100')
    } else if (inLista(numero.value, vetor)){
        alert('Valor já adicionado na lista. Escolha um novo valor!')
    } else{
        let numeroDigitado = Number(numero.value)
        vetor.push(numeroDigitado)

        let item = document.createElement('option')
        item.text = `Valor ${numeroDigitado} adicionado`
        tab.appendChild(item)
        resultado.innerHTML = ''
    }
}

function finalizar() {
    //Soma os valores do array
    let soma = 0;
    for (let pos in vetor) {
        soma += Number(vetor[pos])
    }

    let media = soma / vetor.length

    resultado.innerHTML += `Ao todo temos ${vetor.length} números cadastrados <br>`
    resultado.innerHTML += `O maior número informado foi: ${Math.max.apply(null, vetor)} <br>`
    resultado.innerHTML += `O menor número informado foi: ${Math.min.apply(null, vetor)} <br>`
    resultado.innerHTML += `Somando todos os valores, temos: ${soma} <br>`
    resultado.innerHTML += `A média dos valores digitados é: ${media} <br>`


}

