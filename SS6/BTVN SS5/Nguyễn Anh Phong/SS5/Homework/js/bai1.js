let a;
a = Number(prompt("Hãy điền số bạn muốn"));
if(a % 2 == 0){
    document.writeln("Số bạn nhập là số chẵn");
}else if(a % 2 == 1){
    document.writeln("Số bạn nhập là số lẻ");
}else{
    document.writeln("Nội dung bạn nhập không phải là số hoặc không phải số tự nhiên");
}