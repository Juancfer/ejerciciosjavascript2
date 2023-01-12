/*
    Crea una función que imprima todos los números primos entre el 1 y el 100.
        Después, tendrá que imprimir la suma de todos esos
*/


let numeros = 100
let primos = []

for(let dividendo = 2; dividendo <= numeros; dividendo++){
    let isPrimo = true;
    for(let divisor = 2; divisor < dividendo; divisor++){
        if(dividendo % divisor === 0){
            isPrimo = false
        }
    }
    if(isPrimo === true) {
        primos.push(dividendo);
    }
}
console.log(primos);

let suma = 0

for(let i = 0; i < primos.length; i++){
    suma = primos[i] + suma;
}

console.log(suma);


/*
    Crea una función que reciba 2 arrays de números y devuelva uno unificado,
    sumando los números de la misma posición.
    Los arrays pueden tener diferente longitud.

    Elemplo: 
      Entrada: [1,4,5,7] [2,1,5,1,1]
      Salida: [3,5,10,8,1]
*/



let array1 = [1,4,5,7]
let array2 = [2,1,5,1,1]
let resultado = []

function arraySuma(array1, array2) {
    let longitud = Math.max(array1.length, array2.length);
    let suma1, suma2;

    for(let i = 0; i < longitud; i++){

        if(array1[i]) {
            suma1 = array1[i]
        }else {
            suma1 = 0
        }

        if(array2[i]){
            suma2 = array2[i]
        }else {
            suma2 = 0
        }

        let totalArray = suma1 + suma2
        resultado.push(totalArray);
    }
    console.log(resultado);
}

arraySuma(array1, array2);

/*
    Un palíndromo es una palabra que se deletrea de la misma manera en ambos sentidos.
    Crea una función que reciba una palabra y devuelva true o false si es o no palíndromo.

    Ejemplo:
        Entrada: 'oso'
        Salida: true
*/

let word = "oso"

function palindromo(word) {
    let newWord = word.split("").reverse().join("");

    if(word === newWord){
        return true
    } else {
        return false
    }
}

console.log(palindromo(word))

/*
    Crea una función que reciba un array de personas y devuelva un string con las personas separadas
    por el símbolo recibido en el segundo argumento.

    Ejemplo:
        Entrada: (['Pedro', 'Gon', 'Luis', 'Fran'], '/')
        Salida: 'Pedro/Gon/Luis/Fran'
*/

let person = ['Pedro', 'Gon', 'Luis', 'Fran']
let symbol = "/"

function personArray(person, symbol) {
    return person.join(symbol)
}

console.log(personArray(person, symbol))

/*
    Crea una función que reciba un array de objetos persona y devuelva un array con el nombre de las personas
    cuyo id coincida con la posición del array en el que se encuentra.


    Ejemplo:
        Entrada: [{id:2, name:'Pedro'},{id:1, name:'Juan'},{id:5, name:'Luis'},{id:3, name:'Gon'},{id:4, name:'Fran'} ]
        Salida: ['Juan','Gon','Fran']
*/

let arrayName = [{id:2, name:'Pedro'},{id:1, name:'Juan'},{id:5, name:'Luis'},{id:3, name:'Gon'},{id:4, name:'Fran'} ]

function nameArray(arrayName) {
    let resultado = []

    for(let i = 0; i < arrayName.length; i++){
        if(arrayName[i].id === i) {
            resultado.push(arrayName[i].name)
        }
    }

    return resultado
}

console.log(nameArray(arrayName))