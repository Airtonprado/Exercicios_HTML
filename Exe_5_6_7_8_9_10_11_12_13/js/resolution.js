// Exercício 5
// Implementar um algoritmo em JavaScript que permita validar matrículas de automóveis.
// Existem actualmente 4 tipos de matrículas autorizadas:
// AA-00-00
// 00-00-AA
// 00-AA-00
// AA-00-AA
// O "separador" entre os números e as letras pode ser o hifen,
// AA-00-AA
// ou o espaço:
// AA 00 AA
//Ansher:

function validarMatricula(matricula) {
    // Expressões regulares para os diferentes formatos de matrículas
    const regex1 = /^[A-Z]{2}-\d{2}-\d{2}$/;  // AA-00-00
    const regex2 = /^\d{2}-\d{2}-[A-Z]{2}$/;  // 00-00-AA
    const regex3 = /^\d{2}-[A-Z]{2}-\d{2}$/;  // 00-AA-00
    const regex4 = /^[A-Z]{2}-\d{2}-[A-Z]{2}$/; // AA-00-AA

    const regex5 = /^[A-Z]{2} \d{2} \d{2}$/;  // AA 00 00
    const regex6 = /^\d{2} \d{2} [A-Z]{2}$/;  // 00 00 AA
    const regex7 = /^\d{2} [A-Z]{2} \d{2}$/;  // 00 AA 00
    const regex8 = /^[A-Z]{2} \d{2} [A-Z]{2}$/; // AA 00 AA

    // Verificar se a matrícula corresponde a um dos formatos permitidos
    return regex1.test(matricula) || regex2.test(matricula) || regex3.test(matricula) || regex4.test(matricula) ||
        regex5.test(matricula) || regex6.test(matricula) || regex7.test(matricula) || regex8.test(matricula);
}

// Exemplos de uso
console.log("Ansher 5 quention");
console.log(validarMatricula("AA-00-00")); // true
console.log(validarMatricula("00 00 AA")); // true
console.log(validarMatricula("AA 00-AA")); // false
console.log("*********************************************************************");


/*Exercício 6
Dada uma variável com um ano,
let ano=2004;
determinar se o ano é bissexto.
Ver imagem anexa*/

//Ansher:
function isAnoBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        return true;
    }
    return false;
}
console.log("Ansher 6 quention");
// Exemplo de uso
console.log(isAnoBissexto(2004)); // true
console.log(isAnoBissexto(1900)); // false
console.log(isAnoBissexto(2000)); // true

console.log("**********************************************************************");

/*Exercício 7
Criar uma função que simule o método repeat, isto é, recebe dois parâmetros, numRepeticoes e texto,
function repete(numRepeticoes, texto) {
e retorna o valor da variável "texto" repetido "numRepeticoes" vezes.
Para a seguinte invocação da função,
repete(3, "Primavera")
o resultado deverá ser:
PrimaveraPrimaveraPrimavera
Testar a função para valores diferentes das variáveis "repetições" e "texto".*/

//Ansher:
function repete(numRepeticoes, TesteCode) {
    let resultado = "";
    for (let i = 0; i < numRepeticoes; i++) {
        resultado += TesteCode;
    }
    return resultado;
}
console.log("Ansher 7 quention");
// Exemplo de uso
console.log(repete(3, "-Primavera-")); // PrimaveraPrimaveraPrimavera
console.log(repete(2, "-Verão-")); // VerãoVerão

console.log("**********************************************************************");

/*Exercício 8
Gerar uma chave aleatória do euromilhões (5 números + 2 estrelas) - não podem existir números repetidos!
Os números podem variar entre 1 e 50, e as estrelas entre 1 e 12.*/

//Ansher:

function gerarChaveEuromilhoes() {
    let numeros = [];
    let estrelas = [];

    while (numeros.length < 5) {
        let numero = Math.floor(Math.random() * 50) + 1;
        if (!numeros.includes(numero)) {
            numeros.push(numero);
        }
    }

    while (estrelas.length < 2) {
        let estrela = Math.floor(Math.random() * 12) + 1;
        if (!estrelas.includes(estrela)) {
            estrelas.push(estrela);
        }
    }

    return { numeros: numeros.sort((a, b) => a - b), estrelas: estrelas.sort((a, b) => a - b) };
}

// Exemplo de uso
console.log("Ansher 8 quention");
// Exemplo de uso
console.log(gerarChaveEuromilhoes());
console.log("************************************************************************************");
/*Exercício 9
Criar uma função que permita identificar a maior palavra existente numa frase e o respectivo número de caracteres.
function maiorPalavra(texto) {
para a seguinte invocação,
maiorPalavra("Exemplo de uma frase com palavras");
deve apresentar como resultado
"palavras" - 8 letras
Podem utilizar métodos de strings de JavaScript. (editado) */

//Ansher:
function maiorPalavra(texto) {
    const palavras = texto.split(" ");
    let maior = palavras[0];

    for (let palavra of palavras) {
        if (palavra.length > maior.length) {
            maior = palavra;
        }
    }

    return `${maior} - ${maior.length} letras`;
}

// Exemplo de uso
console.log("Ansher 9 quention");
// Exemplo de uso
console.table(maiorPalavra("Gigante")); // "palavras - 7letras"

console.log("******************************************************************");
/*Exercício 10
Criar uma função que receba como parâmetro uma string e devolva o número de palavras existentes na string.
Podem resolver o exercício utilizando métodos disponíveis no JavaScript, mas também terão de resolver o exercício sem esses métodos.*/

//Ansher:
function contarPalavras(texto) {
    return texto.trim().split(/\s+/).length;
}

// Exemplo de uso
console.log(contarPalavras("Professor é Porreiro!")); // 


// sem metodos de string
function contarPalavrasSemMetodos(texto) {
    let count = 0;
    let dentroDaPalavra = false;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] !== ' ' && !dentroDaPalavra) {
            dentroDaPalavra = true;
            count++;
        } else if (texto[i] === ' ') {
            dentroDaPalavra = false;
        }
    }

    return count;
}
console.log("Ansher 10 quention");
// Exemplo de uso
console.log(contarPalavrasSemMetodos("Curso Termina em Outubro")); // 6
console.log("**********************************************************************");

/*Exercício 11
Remova os números repetidos de um array.
Por exemplo, partindo do array,
[12,6,3,12,8,6,5]
o resultado é:
[12,6,3,8,5]
Poderá remover os números repetidos do próprio array ou criar um novo array com os valores não repetidos.*/

//Ansher:
function removerRepetidos(arr) {
    return [...new Set(arr)];
}

// Exemplo de uso
console.log("Ansher 11 quention");
console.log(removerRepetidos([12, 6, 3, 12, 8, 6, 5])); // [12, 6, 3, 8, 5]
console.log("**********************************************************************");


/*Exercício 12
Ver o seguinte vídeo até aos 2:31m. Parar o vídeo e resolver o exercício.
How to: Work at Google — Example Coding/Engineering Interview
https://www.youtube.com/watch?v=XKu_SEDAykw&t=196s
Ver depois o vídeo até ao fim e tentar perceber as outras soluções apresentadas.*/


//Ansher:
function hasPairWithSum(arr, sum) {
    const complements = new Set();

    for (let num of arr) {
        let complement = sum - num;
        if (complements.has(complement)) {
            return "yes";
        }
        complements.add(num);
    }
    return "no";
}

// Testes
console.log("Ansher 12 quention");
console.log(hasPairWithSum([1, 2, 3, 9], 8)); // Output: "no"
console.log(hasPairWithSum([1, 2, 4, 4], 8)); // Output: "yes"
console.log("**********************************************************************");

/*Exercício 13
Dado um array com números,
let dados = [90,190,20,240,340,220,470,60,430,460,400];
ordená-los por ordem crescente sem recorrer ao método sort(), utilizando o bubble sorting.
Ver imagem em anexo para perceber o funcionamento deste algoritmo de ordenação.*/

//Ansher:
function bubbleSort(arr) {
    let n = arr.length;
    let trocado;
    do {
        trocado = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // Troca
                trocado = true;
            }
        }
    } while (trocado);
    return arr;
}

// Exemplo de uso
console.log("Ansher 13 quention");
let dados = [90, 190, 20, 240, 340, 220, 470, 60, 430, 460, 400];
console.table(bubbleSort(dados)); // [20, 60, 90, 190, 220, 240, 340, 400, 430, 460, 470]
console.log("**********************************************************************");

console.log("Foi Utilizado para realizar esses Exercicios Pequisas em: w3school, chatgpt,freecode.")