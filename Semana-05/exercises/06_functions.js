console.log('-- EXERCISE 6: FUNCTIONS');

//a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

console.log('-Exercise 6.a:');

function sum(numberOne, numberTwo){
    return numberOne + numberTwo
};
var result = sum(6, 5);
console.log(result);

//b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número; de no ser un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.

console.log('-Exercise 6.b:');
function sumSecond(numberOne, numberTwo){
    if(typeof numberOne !=='number'){
        alert ('Number not found '+ numberOne)
        return NaN;
}   if(typeof numberTwo !=='number'){
    alert ('Number not found '+ numberTwo)
    return NaN;
}   
    return numberOne + numberTwo;
}
console.log(sumSecond(10,'5'));

//c. Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva verdadero si es un número entero.

console.log('-Exercise 6.c:');
function validateInteger(numberTest){
    return Number.isInteger(numberTest);
}
console.log('Are the parameters integer? Y/N', validateInteger(12.5));
console.log('Are the parameters integer? Y/N', validateInteger(5))

//d. A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. y que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retornar el número convertido a entero (redondeado).

console.log('-Exercise 6.d:');

function sumThird(numberOne, numberTwo){
    if(typeof numberOne !=='number'){
        alert ('Number not found '+ numberOne)
        return NaN;
}   else if (typeof numberTwo !=='number'){
        alert ('Number not found '+ numberTwo)
        return NaN;
}   else if (!validateInteger(numberOne)){
        alert ('Number not integer '+ numberOne)
        return Math.round(numberOne)
}   else if (!validateInteger(numberTwo)){
        alert ('Number not integer '+ numberTwo)
        return Math.round(numberTwo)
}   else{
    return numberOne + numberTwo
    }
};
console.log(sumThird(10.5, 12));

//e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.

console.log('-Exercise 6.e:');

function validateIntNumber(numberOne){
    if(typeof numberOne !=='number'){
        alert ('Number not found '+ numberOne)
        return NaN;
    } else if (!validateInteger(numberOne)){
        alert ('Number not integer '+ numberOne)
        return Math.round(numberOne)
    }
    return numberOne
}

function sumFourth(numberOne, numberTwo){
    numberOne = validateIntNumber(numberOne);
    numberTwo = validateIntNumber(numberTwo);
    return numberOne + numberTwo;
};

console.log(sumFourth(12.5, 15))