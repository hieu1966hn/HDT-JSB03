let a
do
{
    a=Number(prompt('ban muon nhap bao nhieu so'))
    }while(a!==parseInt(a) || a<0)
    for(let i=1;i<=a;i++)
    {
        let c
        c=""
        for(let k=1;k<=i;k++)
        {
            c=c+'*'
        } 
        console.log(c)

    }