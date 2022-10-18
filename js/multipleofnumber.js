//Q- Using loop print multiple of number which user will decide

function user()
{
let a=document.getElementById("number").value
 for(i=1;i<=10;i++){
    total=a*i
    document.write(a+"*"+i+"="+total+"<br>")
 }
}