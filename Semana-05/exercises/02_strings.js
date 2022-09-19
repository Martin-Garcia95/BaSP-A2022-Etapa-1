console.log('-- EXERCISE 2: STRINGS');

//a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).

console.log('-Exercise 2.a:');
var firstStringTest = 'mastropiero';
console.log(firstStringTest.toUpperCase());

//b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('-Exercise 2.b:');
var secondStringTest = 'mastropiero';
var thirdStringTest = secondStringTest.substring(0,5);
console.log(thirdStringTest);

//c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('-Exercise 2.c:');
var fourthStringTest = 'mastropiero';
var fifthStringTest = fourthStringTest.substring(fourthStringTest.length-3);
console.log(fifthStringTest);

//d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).

console.log('-Exercise 2.d:');
var sixthStringTest = 'mASTROPIERO';
var seventhStringTest = sixthStringTest.substring(0,1).toUpperCase() + sixthStringTest.substring(1).toLowerCase();
console.log(seventhStringTest);

//e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

console.log('-Exercise 2.e:');
var eighthStringTest = 'radium rocket';
var ninethStringTest = eighthStringTest.indexOf(' ');
console.log(ninethStringTest);

//f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

console.log('-Exercise 2.f:');
var tenthStringTest = 'rADIUM rOCKET';

var eleventhStringTest = tenthStringTest.substring(0,1).toUpperCase() + tenthStringTest.substring(1, tenthStringTest.indexOf(' ')).toLowerCase();

var twelfthStringTest = tenthStringTest.substring(tenthStringTest.indexOf(' ') +1, tenthStringTest.indexOf(' ') +2).toUpperCase() + tenthStringTest.substring(tenthStringTest.indexOf(' ') +2).toLowerCase();

var stringResult = eleventhStringTest + ' ' + twelfthStringTest

console.log(stringResult);