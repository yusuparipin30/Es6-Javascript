//FILTER () berfungsi untuk mempermudah menyaringsebuah data

//1. EXAMPLE menggunakan looping biasa 

// var products = [
// {nama: 'tumun', jenis: 'sayur'},
// {nama: 'pisang', jenis: 'buah'},
// {nama: 'apel', jenis: 'buah'},
// {nama: 'jeruk', jenis: 'buah'},
// {nama: 'wortel', jenis: 'sayur'},
// ];

// var filteredProducts = [];

// for (var i = 0; i < products.length; i++) {
//     if (products[i].jenis === 'buah') {
//         filteredProducts.push(products[i]);
//     }
// }

// console.log(filteredProducts);
//outut :
// [
//     { nama: 'pisang', jenis: 'buah' },
//     { nama: 'apel', jenis: 'buah' },
//     { nama: 'jeruk', jenis: 'buah' }
//   ]


//2. EXAMPLE Menggunakan filter()

var products = [
    {nama: 'tumun', jenis: 'sayur'},
    {nama: 'pisang', jenis: 'buah'},
    {nama: 'apel', jenis: 'buah'},
    {nama: 'jeruk', jenis: 'buah'},
    {nama: 'wortel', jenis: 'sayur'},
    ];
    
    var filteredProducts = [];

    filteredProducts = products.filter((product) => {
        return product.jenis === 'buah'
    });

    console.log(filteredProducts);

    //output :
    /*
                    [
                { nama: 'pisang', jenis: 'buah' },
                { nama: 'apel', jenis: 'buah' },
                { nama: 'jeruk', jenis: 'buah' }
                ]

*/

/*pada method filter() return setiap iterator function bernilai bolean(true atau false).
setiap return yang bernilai true akan di return pada result atau hasil array, pada contoh di atas
 iterator pada baris 42-44 berisikan proses untuk menyaring object yang ada di dalam 
 array products yang memiliki jenis: 'buah', */
    