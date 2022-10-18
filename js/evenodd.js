//Q. Take an integer from user using prompt.
//check whether it is even or odd and display the result

function user(){
    let a=document.getElementById('number').value
    if(a%2==0){
        document.write(a+'Is a even number')
    }
    else{
        document.write(a+'Is a odd number')
    }
}