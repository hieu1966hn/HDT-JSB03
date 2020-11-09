let a = prompt("nhap so a:");
if (a == Number(a)){
    a = Number(a);
    if(a%2==0){
        console.log("true");
    }else{
        console.log("false");
    }
}else{
    console.log("false");
}