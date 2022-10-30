/*Arrow Function sintaxnya seperti ini (=>) ,
arrow function hanya sebuah penyederhanaan function
 dan kapan satnya harus menggunakan arrow function */

 //EXAMPLE 1 sintax biasa
//  const funct1 =function(a, b){
//     return a + b;
//  };
//  console.log (funct1(3, 3)); //6

 //EXAMPLE 2 dg Arrow function
//  const funct2 =(a, b) =>{
//     return a + b;
//  };
//  console.log(funct2(3, 3));// 6

 //EXAMPLE 3 
//  const funct3= (a, b) => a + b;
//  console.log(funct3(3,3)); //6

//EXAMPLE 4
// const funct4 = (dobel) => dobel + dobel;
// console.log(funct4(5));  //10

//EXAMPLE 5
// const funct5 = dobel => dobel + dobel;
// console.log(funct5(5)); //10

//EXAMPLE 6 sintax biasa
// const numbers = [1,2,3,4,5];
// const kalidua1 = numbers.map(function(number){
//     return 2 * number; 
// });
// console.log(kalidua1); // [ 2, 4, 6, 8, 10 ]

//EXAMPLE 7 dg arrow function
const numbers = [1,2,3,4,5];
const kalidua2 = numbers.map(number => 2 * number);
console.log(kalidua2); //[ 2, 4, 6, 8, 10 ]

/*perbedaan tulisan pada contoh code 1–3. Namun outputan dari ketiga potongan code tersebut adalah sama.
Perbedaan dari contoh code 1 dan contoh code 2 hanyalah dipenulisan
yaitu menghilangkan kata function sebelum paramater dan menambahkan => setelah parameter.

Begitu juga perbedaan dari contoh code 2 dan code 3, karena pada body fungsi tersebut
hanya mempunyai single javascript expression maka kita dapat menghilangkan kata return dan kurung kurawalnya.

Sedangkan pada contoh code 4 dan 5, karena function tersebut hanya mempunyai satu argument
maka kita dapat menghilangkan kurung buka dan tutupnya.*/








