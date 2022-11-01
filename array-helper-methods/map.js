/*map hapir mirip dengan forEach, bedanya pada map() setiap iteratir functon yang di kita dapat 
mengembaliakn sebuah nilai  dan dapat di masukan kedalam variabel  array yang baru */

//1. Example  menggunakan looping biasa tanpa map() 

// var numbers =[1,2,3];
// var doubleNumbers = [];

// for (let i = 0; i < numbers.length; i++){
//     //numbers[i] =numbers [i] * 2;
//     doubleNumbers.push(doubleNumberFunction(numbers[i]));
// }

// //iterator function
// function doubleNumberFunction(number){
//     return number * 2;
// }

// console.log(doubleNumbers); //output : [2, 4, 6]



//2. EXAMPLE menggunakan map() helper
// var numbers = [1, 2, 3];
// var doubleNumbers = numbers.map((number) => {
//     return number * 2;
// });

// console.log(doubleNumbers); // output : [ 2, 4, 6 ]


//3. EXAMPLE (Perbandingan map dan forEach)
var numbers = [1, 2, 3,];
var doubleNumbersForEach, doubleNumbersMap = [];

doubleNumbersForEach = numbers.forEach((number) => number * 2)
doubleNumbersMap = numbers.map((number) => number * 2)

console.log(doubleNumbersForEach); //output :undefines
console.log(doubleNumbersMap); //output:  [2, 4, 6]

