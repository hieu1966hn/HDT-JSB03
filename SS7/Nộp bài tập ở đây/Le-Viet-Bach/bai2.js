let a = Number(prompt("Nhap so a:"));
for (let i = 0; i < 100; i++){
    if (a / Math.pow(10, i) >= 1){
        continue;
    }else{
        console.log(i);
        break;
    }
}