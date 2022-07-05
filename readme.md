Apuntes JS
Comentar todo : Ctrl+K Ctrl+C
Quitar comentario: Ctrl+k+u



ternary operator

sintaxis
<evaluación>? <resultado si es verdadero> :< resultado si es falso></resultado>

nesting ternary

let a = 1
let result = a >= 0 ? a == 0 ? 'zero' : positive : 'negativo '
console.log('resultado')


switch

let a = 2 
switch(a){
    case 1 :
     console.log('es uno');
     break
     case 2:
     console.log('es dos');
     break
     default: //default  es un ELSE//
     console.log('no es ni uno ni dos')
}
método evaluativo limitado