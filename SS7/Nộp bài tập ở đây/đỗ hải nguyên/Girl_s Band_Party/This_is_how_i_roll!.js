let a,b
do
{
    a=Number(prompt('nhap a'))

    }while(a!==parseInt(a) || a<0)
   a=String(a)
   b=a.length
   console.log('so cua ban co',b,'chu so')
