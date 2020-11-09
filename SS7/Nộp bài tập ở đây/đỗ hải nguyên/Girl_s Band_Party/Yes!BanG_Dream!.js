let a,b
b=''
a=prompt('nhap string day')
for(let c= a.length-1;c>=0;c--)
{
    b=b+a[c]
}
document.writeln("reverse string la",b)