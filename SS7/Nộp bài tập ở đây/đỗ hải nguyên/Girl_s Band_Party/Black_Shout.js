let a,count
do
{
    a=Number(prompt('ban muon nhap bao nhieu so'))
    }while(a!==parseInt(a) || a<0)
    while(a==a)
    {
        count=0
        for(let i=1;i<=a;i++)
        {
            if (a%i==0) {count++}
        }
        if (count==2) {console.log(a,'la so nguyen to bn dg tim')
        break
        }
        a++
    }