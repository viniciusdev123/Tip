function formatMoney(value) { // Math é usado para cálculos matemáticos. A função CEILING ou CEIL é usada para arredondar um número para o número inteiro seguinte. Pois neste ponto aqui, é melhor eu dar à mais para o garçom, do que deixar faltar e ficar sempre devendo.
    value = Math.ceil(value * 100) / 100 // (value * 100) / 100 --> desta forma, estarei sempre arredondando os centavos.
    value = value.toFixed(2) // o 'toFixed' vai permitir fixar os valores em apenas duas casas decimais, evitando assim, a dízima periódica
    return 'R$ ' + value // -> vai finalizar a função e retornar o valor para a função.
}

function formatSplit(value) {
    if (value == 1) return value + " pessoa" // apenas 2 sinais de igual, pois quero apenas o valor. Com 3 sinais iguais, o programa iria verificar o tipo e o valor.
    else
        return value + " pessoas"
}


function update() {
    let bill = Number(document.getElementById('yourBill').value) //.value vai puxar o valor. Caso eu não colocasse o 'value', então, somente a propriedade seria puxada. Com isso, vou obter o valor que o usuário fornecer no html, possibilitando assim, manipular os resultados aqui em js.
    let tipPercent = document.getElementById('tipInput').value // não vou precisar fazer a conversão, pois já está como número no html.
    let split = document.getElementById('splitInput').value

    let tipValue = bill * (tipPercent / 100) // coloquei entre parênteses para ser dividido primeiro
    let billTotal = bill + tipValue
    let billEach = billTotal / split

    document.getElementById('tipPercent').innerHTML = tipPercent + ' %' // é necessário utilizar o .innerHTML, pois eu tenho que INSERIR algo de volta ao HTML.
    document.getElementById('tipValue').innerHTML = formatMoney(tipValue)
    document.getElementById('totalWithTip').innerHTML = formatMoney(billTotal)
    document.getElementById('splitValue').innerHTML = formatSplit(split)
    document.getElementById('billEach').innerHTML = formatMoney(billEach)
}

//posso passar um argumento diferente para cada vez que eu chamar a função. Dessa forma, vou conseguir aplicar uma mesma formatação para vários itens, facilitando assim, todo o meu código.

