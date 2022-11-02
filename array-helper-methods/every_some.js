//every() dan some()
/*kedua method tersebut berfungsi untuk menentukan apakah nilaidari 
data yang di berikan sesuai dengan kondisi yang di inginkan.*/

/*method every() hanya memberikan nilai true ketika semua data sesuai dengan kondisi 
yang di tentukan*/

/*method some() akan memberikan nilai true ketika minimal ada satu data yang sesuai 
dengan kondisi yang di tentukan.*/

//1. EXAMPLE kode every() dan some() menggunakan looping forEach()

// var computers = [
//     {name: 'Apple', ram: 24},
//     {name: 'Asus', ram: 4},
//     {name: 'Acer', ram: 32}
// ];

// function requirementCheck(minimumRam, dataComputers){
//     var allComputersCanRunProgram = true;
//     var onlySomeComputersCanRunProgram = false;

//     dataComputers.forEach(computer => {
//         if(computer.ram < minimumRam){
//             allComputersCanRunProgram = false;
//         }else{
//             onlySomeComputersCanRunProgram = true;
//         }
//     });

//     return {
//         every :[allComputersCanRunProgram],
//         some : [onlySomeComputersCanRunProgram]
//     }
// }

// console.log(requirementCheck(16,computers).every);//[false]
// console.log(requirementCheck(1, computers).every);//[true]
// console.log(requirementCheck(16,computers).some);//[true]
// console.log(requirementCheck(1, computers).some);//[true]



//2. EXAMPLE menggunakan code every() dan some()

var computers = [
    {name: 'Apple', ram: 24},
    {name: 'Asus', ram: 4},
    {name: 'Acer', ram: 32}
];

console.log(computers.every(computer => computer.ram > 16)); //false
console.log(computers.every(computer => computer.ram > 1)); // true
console.log(computers.some(computer => computer.ram > 16)); // true
console.log(computers.some(computer => computer.ram > 1)); // true

/*roses every() helper pada code every_some.js pada baris 52. Pada code tersebut
 mengecek apakah semua computer memiliki ram diatas 16 dan jawabannya adalah tidak 
 semuat atau not every computer memiliki nilai ram diatas 16 maka nilainya adalah false.
 Pada proses ini operator yang digunakan adalah operator “dan” atau
 lambang matematikanya “^” operator ini hanya meberikan nilai true ketika nilai semuanya bernilai true.*/

 /*proses some() operator yang digunakan adalah “atau” lambang matematikanya “v” operator
  ini akan memberikan nilai true ketika minimal ada satu nilai yang bernilai true.

*/





