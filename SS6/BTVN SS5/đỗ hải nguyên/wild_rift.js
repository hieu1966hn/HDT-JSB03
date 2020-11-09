let a
a=Number(prompt('anh muốn kiểm tra bài nào'))
if(a<=5)
{
switch(a)
{
    case 1 :
{             
            let b
            b=Number(prompt('nhập number nhá thách ông nào nhập string đấy'))
           
            if (b%2==0) 
            {
         document.writeln('đây là số chẵn')
             }
             else if (b&2==1)
             {
                document.writeln('đây là số lẻ')
             }
             else{
                 document.writeln('à dám k.o nhập number ak reset lại đi')
             }
        
       
        break

}        

   case 2:
       {
           let k,i
           i=prompt('nhập string 1 dây')
           k=prompt('nhập string 2 đây ')
           if (i<k) { document.writeln(i,' có trc')
               
           } else if(i==k) { document.writeln('string giống nhau')
               
           }
           else{ document.writeln(k,' có trc')
            
           }
           
           break
       } 
       case 3:
           {
               let c,d,e,f;
               c=Number(prompt('nhập số a'))
               d=Number(prompt('nhập số b'))
               e=Number(prompt('nhập số c'))
               if(d>c && d>e){
                   if (e>c) 
                   {
                    document.writeln('after sắp xếp ',d,e,c)
                   } else 
                   {
                    document.writeln('after sắp xếp ',d,c,e)
                   }
               }
               else if (d>c && d<e )  
               {
                document.writeln('after sắp xếp ',e,d,c)
               }
               else if (d>e && d<c)  
               {
                document.writeln('after sắp xếp ',c,d,e)
               }
               else
               {
                if (e>c) 
                {
                 document.writeln('after sắp xếp ',e,c,d)
                } else 
                {
                 document.writeln('after sắp xếp ',c,e,d)
                }   
               }
               break
           }  
           case 4:
               {
                   let n,m
                   n=Number(prompt('nhập số a'))
                   m=Number(prompt('nhập số b'))
                   console.log('thương a/b la',Math.round(n/m))
                   console.log('phần nguyên của a/b la',Math.floor(n/m))
                   console.log('phần dư của a/b la',(n%m))
                   console.log('a^b=',Math.pow(n,m))
                   break
               }  
               case 5:
                   {
                       console.log('Hello \"ooo\" \'ooo\' \\ \\ \\\\')
                       break
                   }
}
}
else
{
    document.writeln('chém vừa thôi có mỗi 5 bài còn định check bài nào nữa ')
}