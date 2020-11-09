//nhap abc , in ra man hinh 3 so theo thu tu tang dan 
let a,b,c,s;

a =Number ( prompt("nhập vào a là ")) ;
b =Number(prompt("nhập vào b là"));
c =Number(prompt("nhập vào c là "));
D = (a<b<c)



intmain()
{
    int ,a, b, c ,D; // 3 số nguyên

    printf(" nhap abc lan luot la:");
    scanf("%d %d %d",a,b,c);
 
    // chuyển số bé nhất vào a
    if(a>b){
		D=a;a=c;b=D;
        temp=a;
        a=b;
        b=temp;
    }
 
    if(a>c){
		D=a;a=c;c=D
        temp=a;
        a=c;
        c=temp;
    }
 
    // chuyển số bé nhì vào b
   if(b>c){
	   D=b;b=c;c=D
        temp=b;
        b=c;
        c=temp;
    }
 
    printf("\nthu tu tang dan:%d    %d    %d", a, b, c);
    getch();
    return(0);
}

    