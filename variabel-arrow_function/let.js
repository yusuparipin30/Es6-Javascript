//LET (BLOCK SCOPE)

//EXAMPLE 1
// for (let i = 0; i < 5; i++){
//     console.log(i); // 0 1 2 3 4
// }

// console.log(i); // error i is not defined

/*jika di jalan kan pada baris 6 akan mengelurakan output error i is not defined,
ini karena batas sebuah blok adalah sebuah kurung kurawal{}, variabel i di deklarasikan
menggunakan let di dalam blok kurungkurawal antara baris 2 - 4, namun variabel i
dipanggil di luar blok scope (baris 6)
*/

//EXAMPLE 2
for (let i = 0; i < 5; i++){
    console.log(i); // 0 1 2 3 4
}

if(true){
    let i = 100;
    console.log("i = ",i); //i = 100
}

/*apabila di jalankan akan mengeluarkan output pada bari 18 & 23,
ini di karenakan variabel yang di deklarasikan  
menggunakan let di panggil dalam block scope masing - masing
terdapan 2 block scope (baris 17 - 19)  dan (baris 21 - 24)*/

/*kesimpulannya adalah dari contoh diatas adalah variabel yang di deklarasikan 
menggunakan let hanya dapat di panggil dalan sebuah block scope yang sama,
sebuah block scope di tandain dengan sebzuah kurung kurawal{}*/


