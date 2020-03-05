# Unit Testing

## TTD
TDD (Test Driven Development) merupakan sebuah metodologi pengembangan sistem dengan mengedepankan testing untuk memastikan bahwa sistem berjalan dengan semestinya.

> Beberapa proses yang dilakukan selama pengembangan sistem dengan TDD:
- Skenario testing pada setiap komponen.
- Development skenario komponen sampai lulus testing.
- Menyusun semua komponen yang sudah testing.
- Menggabungkan semua testing hingga sistem selesai. 

## BDD
BDD (Behavior Driven Test) merupakan kebalikan dari BDD. Metodologi BDD lebih mengedepankan behavior dari suatu sistem dimana hanya berfokus terhadap harapan dari client bahwa sistem berjalan sesuai harapan dari client. 

>Beberapa proses yang dilakukan dalam metodologi BDD:
- Skenario testing pada setiap behavior.
- Memastikan sudah lulus pada behavior test.
- Deployment

## Unit Testing Tools
Tools untuk melakukan testing di JavaScript ada:
- Jest
- Mocha/Chai
- Jasmine
- Ava
- Tape

#### - JEST
Sebuah framework testing pada JavaScript yang mengedepankan kesederhanaan.

Untuk memulai Unit Testing "Jest" :
> npm i --save-dev jest
Untuk menjalankan Unit Testing "Jest" :
> npm run test

#### - Mocha/Chai
 Mocha merupakan framework untuk testing pada NodeJS, sedangkan Chai merupakan assertion library yang akan digunakan untuk mengetes kode.
 
 Untuk memulai Unit Testing "Mocha/Chai" :
> npm install chai chai-http mocha --save-dev

#### - Tape
Tape adalah salah satu framework unit testing yang dapat digunakan.

 Untuk memulai Unit Testing "Tape" :
> npm install chai chai-http mocha --save-dev

# Functional Programming Paradigm
Functional Programming Paradigm adalah sebuah style penulisan pada sebuah function yang menekankan pada komputasi didalam sebuah fungsi matematis dan menghindari perubahan data.

#### Function harus bersifat pure 
dimana ia akan menerima parameter sebagai input dan mengembalikan nilai, tanpa mengubah nilai dari variabel manapun.
```sh
function sum(a,b) { return a + b }
//Tidak seperti ini
const a = 10
function multiply(b) { return a * b }
//Tidak seperti ini
let b = 9
function divide(a) {
    b = b % 2 == 0 ? b : b + 1
    return b/2
}
```

#### Callback & High Order Functions 
Sebuah function yang meminta parameter sebuah function dan menjalankan function tersebut
```sh
function callback(a,b) {
    return a * b    
}
function fun(a,b) {
    const c = b(a,3)
    return c * 2
}
console.log(fun(a, callback))

```
 ### Recursive Function
 Sebuah function yang memanggil dirinya sendiri.
 ```sh
 function increment(a) {
     if (a < 10) {
         console.log(a)
         increment(a += 1)
     }else{
         console.log("Sudah samai ke Angka sepuluh")
     }
 }
 increment(1)
 ```
 
 
 ### Method pada array seperti filter, map, reduce, sort, forEach dll. sudah menerapkan callback.