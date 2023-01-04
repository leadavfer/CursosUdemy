let a = 3, b = 2, c = "3";

let z = (a == b);// === se revisa el valor sin importar el tipo
console.log(z);

z = (a === c);//revisa los valores pero tambien los tipos
console.log(z);

z = a != c;//se pregunta si a es diferente de c
console.log(z);

z = a !== c;//se pregunta si a es estrictamente diferente de c
console.log(z);