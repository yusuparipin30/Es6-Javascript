//CONST (Variabel konstanta
/*sifat const seperti let ,tetapi perbedaanya variabel yang di deklarasikan 
menggunakan const tidak dapat di rubah nilainya lagi atau immutable variables*/

//EXAMPLE 1
// const phi = 3.14;
// phi = 3.147;

// console.log(phi);

/*Jika code const.js dijalankan maka akan mengeluarkan output 
error TypeError: Assignment to constant variable. Ini menandakan sebuah variabel
 yang dideklarasikan menggunakan const nilainya tidak dapat diubah atau di-reassign.*/

//EXAMPLE 2
// const person = {
//     id : 1,
//     nama : 'Yusuf'
// };

// console.log(person); // {id : 1, nama: 'Yusuf'}

/*apabila di jalankan akan mendapat output {id : 1, nama: 'Yusuf'} karena variabel const di deklarasikan
1 kali atau tidak di ubah*/


//EXAMPLE 3 

const person = {
    id : 1,
    nama : 'Yusuf'
};
person ={
    id : 2, nama: 'Yeyen'
}

console.log(person); //TypeError: Assignment to constant variable.

/*output akan error karena variabel person sudah di deklarasikan pada const yang pertama dan di rubah
atau di deklarasiakn kembali dengan merubah id:1,dan nama:Yeyen*/


