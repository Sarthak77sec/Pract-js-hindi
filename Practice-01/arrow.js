const user={
    username:"hitesh",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
    }
}
function chai(){
    let username="hitesh"
    console.log(this.username);
    
}

// user.welcomeMessage()
// user.username="michael"
// user.welcomeMessage()
// arrow functions 
const addTwo =(num1, num2)=>{
   return num1+num2
}
result=addTwo(5,8)
// console.log(result);
// arrow function with implicit return
const addTwo1=(num1,num2) =>(num1+num2)
result=addTwo1(5,6)
console.log(result);

