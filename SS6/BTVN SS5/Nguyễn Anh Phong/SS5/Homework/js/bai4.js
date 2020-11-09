let a,b;
a = Number(prompt("Số thứ nhất"));
b = Number(prompt("Số thứ hai"));
console.log("Phép chia " + a + " : " + b + " = " + a/b);
console.log("Phần nguyên của " + a + " : " + b + " = " + Math.floor(a/b));
console.log("Phần dư của " + a + " : " + b + " = " + a%b);
console.log("Làm tròn phép chia " + a + " : " + b + " = " + Math.round(a/b));
console.log("Luỹ thừa " + a + "^" + b + " = " + Math.pow(a,b));