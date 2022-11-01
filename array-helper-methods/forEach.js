//fungsi dari method forEach() helper seperti ketika membuat looping untuk mengakses isi dari sebuah array.
//1.a forEach() 
//contoh menggunakan perulangan for 
//menggunakan looping biasa
// const days =["senin", "selasa", "rabu"];

// for (let i = 0; i < days.length; i++){
// printDay(days[i]); // senon selasa rabu
// }


// //iterator function
// function printDay(day){
//     console.log(day);
// }

//1.b menggunakan forEach () helper
const days = ["senin", "selasa", "rabu"];

//arraw function adalah iterator function
days.forEach(day => {
    console.log(day); // senin selasa rabu
});

/*setiap iterasi atau perulangan pda forEach()helper akan mem passing/mengoper 
setiap object ["senin", "selasa", "rabu"] yang ada di dalam array kesebuah iterator function. pada contoh 1.b 
terdapat iterator function yaitu adalah arraw function, yang mempunyai parameter variabel day
setiap iterasi/perulangan, variabel day hanya menggambarkan sebuah object, bisa di ganti namanya atau bebas 
hanya untuk meggunakan fungsi saja*/