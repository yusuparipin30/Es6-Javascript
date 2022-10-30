//untuk mendeklarasikan ada 3 cara yaitu dengan const,let dan var

//1. variabel (function scope) var berjalan pada cakupan function

//EXAMPLE 1 (var berjalan pada cakupan function scope)

// for (var i =0; i <= 5; i++){
//   console.log(i); // 0 1 2 3 4 5
// }

// console.log(i); //6

//EXAMPLE 2

// function looping(){
//     for (var i = 0; i < 5; i++){
//     console.log(i); // 0 1 2 3 4
  
//     }
// }

// looping();
// console.log(i); // i is not defined

/*error i is not defined karena variablel di 
deklarasikan menggunakan variabel di dalam function looping() */

/*pada baris 23 memanggil variable i di luar function looping(), 
ini menunjukan variable berjalan dalam cakupan function scope */

//EXAMPLE 3

function looping(){
    for(var i = 0; i < 5; i++){
        console.log(i); // 0 1 2 3 4
    }
    function inLooping(){
    console.log(i); //5
    }

    inLooping();
}
looping();

/* variabel i tidak masuk dalam cakupan function inLooping tidak error,
karena function inlLoping masuk dalam scope function looping,
 oleh karena itu baris 38 dapat di panggil*/

 /*kesimpulannya adalah variabel yang di deklarasikan menggunkan var hanya
 dapat di panggil dengan cKUPn fungsi dimana variabel tersebut di deklarasikan 
 child fungsi juga dapan memanggil variabel yang di deklarasikan 
 menggunakan var pada root function*/

