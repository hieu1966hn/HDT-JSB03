let a,b,c;
a = Number(prompt("Số thứ nhất"));
b = Number(prompt("Số thứ hai"));
c = Number(prompt("Số thứ ba"));
if(a<b && a<c){
    if(b<c){
        document.writeln("Sắp xếp ba số theo thứ tự tăng dần là: " + a + ", " + b + ", " + c);
    }else{
        document.writeln("Sắp xếp ba số theo thứ tự tăng dần là: " + a + ", " + c + ", " + b);
    }
}else if(b<a && b<c){
    if(a<c){
        document.writeln("Sắp xếp ba số theo thứ tự tăng dần là: " + b + ", " + a + ", " + c);
    }else{
        document.writeln("Sắp xếp ba số theo thứ tự tăng dần là: " + b + ", " + c + ", " + a);
    }
}else if(c<a && c<b){
    if(a<b){
        document.writeln("Sắp xếp ba số theo thứ tự tăng dần là: " + c + ", " + a + ", " + b);
    }else{
        document.writeln("Sắp xếp ba số theo thứ tự tăng dần là: " + c + ", " + b + ", " + a);
     }
}else{
        document.writeln("Error");
}
