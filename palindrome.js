let str="aba"
let b="";
for(i=str.length-1;i>=0;i--){
    b+=str[1];
}
if(str==b){
    console.log("palindrome");
}else{
    console.log("not palindrome");
}