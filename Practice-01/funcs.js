function greet(username){
    if(!undefined){
    return `enter username`
}
else{
     return `${username} just logged in`
   }
 }
// console.log(greet());

//function with array and objects
const item={
    item_name:"trimmer",
    price:899
}

function objecthandler(anyobject){
//    console.log(`the item name is ${anyobject.item_name} and price is ${anyobject.price}`);
}
objecthandler(item)

// function with array
const Array1 =[300,400,500,200]
function myarray(getArray){
    return getArray[2]
}
console.log(myarray(Array1))