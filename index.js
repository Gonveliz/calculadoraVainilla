let numUno = document.getElementById("numUno")
let numDos = document.getElementById("numDos")

let accion = ""
let numero = '';
let numeroMemoria = '';

function asignandoNumeros(params){
    event.preventDefault()
    numero += params
    console.log(numero)
}

function accionar(params, memoria) {
    event.preventDefault()
    console.log(params)
    accion = params
    numero = ''
    numeroMemoria = memoria
}

function calcular(){
    let resultado = 0
    let num1Int = parseInt(numeroMemoria)
    let num2Int = parseInt(numero)
    console.log(num2Int)
    if (accion === "/"){
        resultado = num1Int / num2Int
        alert(`La division es igual a ${resultado}`)
    } else if (accion === "x"){
        resultado = num1Int * num2Int
        alert (`La multiplicacion es igual a ${resultado}`)
    } else if (accion === "+"){
        resultado = num1Int + num2Int
        alert(`La suma es igual a ${resultado}`)
    } else if (accion === "-"){
        resultado = num1Int - num2Int
        alert(`La resta es igual a ${resultado}`)
    }
    console.log(resultado)
}