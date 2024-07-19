//#1
function saudacao(GustavoRafaMelo) {
    console.log(`Bom dia ${GustavoRafaMelo} seja bem vindo`)
}
//#2
function nomeDoMes(num) {
    const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

    if (num >= 1 && num <= 12) {
        return meses[num - 1]
    } else {
        return "mês inválido"
    }
    console.log(nomeDoMes(4))
}
//#3
function comparaValores(valor1, valor2) {
    if (typeof valor1 === 'number' && typeof valor2 === 'number') {
        if (valor1 >= valor2) {
            return `${valor1} é maior ou igual a ${valor2}`
        } else {
            return `${valor1} é menor que ${valor2}`
        }
    } else {
        return 'Ambos os valores devem ser números.'
    }
}


console.log(comparaValores(10, 5))
console.log(comparaValores(3.14, 2.71))
console.log(comparaValores('abc', 123))
//#4

function calculaSalario(salarioBase, horasExtras, faltas) {
    const valorHoraBase = salarioBase / 176;
    const valorHoraExtra = 1.5 * valorHoraBase;
    const horasTrabalhadas = 176 + horasExtras - faltas * 8;
    const salarioBruto = horasTrabalhadas * valorHoraBase;
    const salarioLiquido = salarioBruto - horasExtras * valorHoraBase + faltas * 8 * valorHoraBase;
    const totalHorasExtras = horasExtras * valorHoraExtra;
    const totalFaltas = faltas * 8 * valorHoraBase;

    return {
        'Salário bruto': salarioBruto.toFixed(2),
        'Salário líquido': salarioLiquido.toFixed(2),
        'Total em horas extras': totalHorasExtras.toFixed(2),
        'Total descontado em faltas': totalFaltas.toFixed(2),
    };
}

const resultado = calculaSalario(10000, 20, 2);
for (const chave in resultado) {
    console.log(`${chave}: R$ ${resultado[chave]}`);
}
//#5
function primeiroEUltimoElemento(arr) {
    if (arr.length >= 2) {
        return [arr[0], arr[arr.length - 1]];
    } else {
        return 'O array deve ter pelo menos 2 elementos.';
    }
}


const arrayExemplo = [2, 4, 67, 8, 9, 90, 0, 'dia', 'hoje', 'tio', 'yellow', 'ui'];
console.log(primeiroEUltimoElemento(arrayExemplo));
