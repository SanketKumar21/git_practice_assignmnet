let num=13;
let count=0;
for(i=1;i<=num;i++){
    if(num%i==0){
        count++;
    }
    if(count==2){
        console.log(num,"Prime number");
    }else{
        console.log(num,"Not prime number");
    }
}