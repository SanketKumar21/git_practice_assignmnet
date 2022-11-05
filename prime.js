let number=13;
let count=0;
for(i=1;i<=number;i++){
    if(number%i==0){
        count++;
    }
    if(count==2){

        console.log(number,"Is a Prime number");
    }else{
        console.log(number,"Is Not a prime number");

}