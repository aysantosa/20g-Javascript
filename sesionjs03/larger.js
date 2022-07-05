
//pedirle al usuario que inserte tres números.
//imprimir en console cuál es el mayor de todos

console.log('Ingresa 3 números diferentes')
let num1 = parseInt (prompt('ingresa  número1'))
let num2 = parseInt (prompt('ingresa  número2'))
let num3 = parseInt (prompt('ingresa  número3'))

if (num1 > num2 && num1 > num3){
    console.log('El número mayor es: num1')
}
 else if ( num2 > num1 && num2 > num3){
    console.log('El número mayor es:num2')
 }
 else if (num3 > num1 && num1 > num2){
    console.log('El número mayor es:num3')
 }
 