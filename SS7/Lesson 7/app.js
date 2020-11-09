//  Array
/**
 * Number : 
 * String :
 * Boolean : true || false
 * Null : 
 * NaN: Not a Number
 * undefined: khong xac dinh
 * 
 * 
 * 
 * 
 * Object:
 * Array:
 */

/** phuong thuc cua mang
 * push:
 * unshift:
 * pop:
 * shift:
 */


//  let a = new Array();
// let a = ['Phong','Nguyen do', ' Quang do']; //Array
// let b =3; // Number
// let c = true; // Boolean
// console.log(Array.isArray(a)); // cu phap nhan biet mang
// // console.log(typeof b);
// console.log(typeof c);
// a.push('Anh Lam','Trang');
// a.unshift("Hung");


// a.splice(1,1); // xin xo
// a.splice(1,1);
// a.splice(0,1,"Lam","hung",'bach');




// a.splice(1,1,"hi","hello");


// a.pop();
// a.pop();
// a.pop();
// a.pop();
// a.pop();
// a.pop();

// a.shift();
// a.shift();
// a.shift();
// console.log(a.length);
// console.log("day la mang a",a);

//  function la cai gi:  de rut gon code va tinh tái sử dụng.
// dinh nghia ham
function sum(a, b) {
    return a + b;
}

// console.log(sum(1, 2));
// // nhap vao n, kiem tra xem n co phai la
// // so nguyen to hay khong
// function snt(n) {
//     if (n < 2) {
//         return false;
//     }
//     let count = 0;
//     for (let i = 2; i < n; i++) {
//         if (n % i == 0) {
//             count++;
//             return false;
//         }
//     }
//     if (count == 0) {
//         return "dung la so nguyen to do";
//     }
// }
// let a = 3;
// console.log(`${a} co la so nguyen to hay khong: `,snt(a));




// function pushArr(arr,chuoi){
//     arr.push(chuoi);
//     return arr;
// }
// let array = [];
// pushArr(array,2);
// console.log(array);

let n;
n = Number(prompt("Nhap so"));
function cpi(number){
    if(number == parseInt(n) && n > 0){
        return true;
    }else{
        return false;
    }
}

console.log("La so nguyen duong: " + cpi(n));