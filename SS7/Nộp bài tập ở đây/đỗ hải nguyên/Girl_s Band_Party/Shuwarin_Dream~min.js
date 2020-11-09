var a=[]
let b,n,count
count=0
do
{
    n=Number(prompt('ban muon nhap bao nhieu so'))
    }while(n!==parseInt(n) || n<0)
    for(let i=1;i<=n;i++)
    {
        a[i]=Number(prompt('nhap so thu',i))
if (a[i]%2==0) 
{
count++    
}

}
console.log('co',count,'so chan')