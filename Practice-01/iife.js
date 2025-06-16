// immidiately invoked function
// named iife function
(function chai(user){
    console.log(`${user},DB CONNECTED`);
    
})("blackbird");

//unnamed iife
((name)=>{
    console.log(`${name},db connected`);
    
})("robin")