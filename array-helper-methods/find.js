/*fungsi method find() adalah untuk mempermudah untuk mencari sebuah data.
proses yang di lakukan method find()  mirip dengan method filter, hanya saja yang di lakukan method find 
hanya mengembalikan sebuah data. */

//1. Example menggunakan looping biasa

// var mobil = [
//     {nama: 'honda'},
//     {nama: 'toyota'},
//     {nama: 'wuling'}
// ];

// var findMobil = '';

// for (var i = 0; i < mobil.length; i++){
//     if (mobil[i].nama === 'toyota'){
//         findMobil = mobil[i];
//         break;
//     }
// }

// console.log(findMobil); //outpu : { nama: 'toyota' }

/*code diatas mirip dengan code filter-1.js, bedanya terdapat proses break
 (code baris 18) pada looping, ini menunjukan bahwa proses looping akan berhenti.*/



 //2. EXAMPLE menggunakan method find()

 var mobil = [
    {nama: 'honda'},
    {nama: 'toyota'},
    {nama: 'wuling'}
];

var findMobil = mobil.find(kendaraan => kendaraan.nama === 'wuling')

console.log(findMobil); //output : { nama: 'wuling' }

/*proses pada method find() mirip dengan method filter() bedanya ketika iterator
 function mendapatkan sebuah return true maka proses find akan berhenti. 
 Jadi method find() ini cocok digunakan untuk mencari sebuah data.*/
