// 1
let x;
console.log(typeof x);
// undefined

//2
console.log(typeof 10);
console.log(typeof "10");
// number,string

//3
console.log(typeof true);
console.log(typeof false);
// boolean,boolean

//4
console.log(typeof null);
// object(поскольку null являетс примитивом, осознанно пустым значением)

//5
"15" + 1 
// 151 конкатенация строки

//6
"12" - 1 
// 11 числовая операция

//7
console.log(Boolean(""));
//пустая строка приводится к false

//8
console.log(Boolean(" "));
//непустая строка, даже если содержит только пробел, приводится к true

//9
let str = " 13 ";
   let num = Number(str);
   console.log(num); //13
//13

//10
function isNumber(v) {
 return typeof v === 'number' && !isNaN(v);
}
//готово