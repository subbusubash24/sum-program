
// sum program
var num=prompt("enter the number")
var sum=0;
var rem=0;

while (num){
    rem=num%10;
    sum=sum+rem;
    num=(num-rem)/10
}
console.log(sum);

// sorting prgm

var a=[1,8,33,22,99,56,77,54,81,12];
const ascendingorder=a.sort(function(a,b){
    return a-b;
})

console.log(ascendingorder);

// email prgm

function Email(email){
    if(email=='subbu123@gmail.com'){
    console.log(valid);
}else{
    console.log(invalid);
}
}