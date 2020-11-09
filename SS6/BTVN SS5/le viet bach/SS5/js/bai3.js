let a = prompt("nhap so a:");
let b = prompt("nhap so b:");
let c = prompt("nhap so c:");
let temp;
for(let i = 0; i < 2; i++){
if(a > b){
    temp = a;
    a = b;
    b = temp;
}
if(b > c){
    temp = b;
    b = c;
    c = temp;
}
}
console.log(a, b, c);