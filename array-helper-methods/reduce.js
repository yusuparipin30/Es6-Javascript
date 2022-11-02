//reduce() helper adalah method yang paling flexible

//1. EXAMPLE code summary menggunakan looping biasa

var numbers = [10,20,30];
var sum = 0;

for(var i = 0; i < numbers.length; i++){
    sum += numbers[i];
}

console.log(sum);//60



//2. EXAMPLE code menggunakan method reduce()

var numbers =[10,20,30];
var sum = 0;

console.log(numbers.reduce((sum, number) => {
    return sum + number;
}, 0)); //60


/*Pada code 2.EXAMPLE proses yang dilakukan adalah
 proses summary dari semua number yang terdapat pada 
 variabel numbers. pada helper reduce() agak 
 sedikit spesial dikarenakan ada dua argument yang dipakai
  oleh method ini yaitu argument pertama adalah iterator function 
  dan argument kedua adalah initial value yaitu 0.

arrayVariabel.reduce(iteratorFunction(){some code}, initialValue)*/

/*
 Setelah mencoba code di atas coba ubah nilai sum menjadi 100 atau 
 berapa nilainya, berapa hasilnya? hasilnya adalah tetap 60. Why?
  karena initial value diset dengan nilai 0. Coba ubah initial 
  value dengan nilai 100, pasti hasilnya akan berubah dengan nilai 160.*/

