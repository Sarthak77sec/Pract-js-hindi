user_stat= true
usergooglelog=false

if(user_stat && usergooglelog){
    console.log("logging is done");
    
}
else{
    console.log("there is an error");
    
}
//nullish coliance value
value1=10
value2=undefined
result=value2 ?? value1
console.log(result);
