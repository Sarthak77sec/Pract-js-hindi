// object literals
const js_user={
    name:"ronit",
    "email":"ronit@firemail",
    age:23,
    logindays:["Monday","tuesday","wednesday"]

}
// console.log(js_user.email);

const tinder ={}
tinder.id="123abc"
tinder.name="sonic"
tinder.loggedin=false

// console.log(tinder);
// nestedobjects 
const regularuser={
    email:"mink@gmail.com",
    full_name:{
        userfull_name:{
            firstname:"hitesh",
            lastname:"choudhary"
        }

    }

}
// console.log(regularuser.full_name.userfull_name.firstname);
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj3=Object.assign({},obj1,obj2)
//using spread opertor
const obj3 = {...obj1,...obj2}
// console.log(obj3);
console.log(Object.keys(tinder));
console.log(Object.values(tinder));
console.log(Object.entries(tinder));
