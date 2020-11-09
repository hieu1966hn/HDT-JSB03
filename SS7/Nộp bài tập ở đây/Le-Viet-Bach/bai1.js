function reverseString(str) {
    var splitString = str.split(""); 
    var reverseArray = splitString.reverse(); 
    var joinArray = reverseArray.join(""); 
    return joinArray; 
}
let a = prompt("Nhap day a:");
a = reverseString(a);
console.log(a);
