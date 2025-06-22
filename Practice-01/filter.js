//filter in js how and what to use
//have to use return when using curly braces with return 
const mynum=[1,2,3,5,6,7,8,9,10]

// const greater = mynum.filter( (num) => {
    // return num > 5
//})
// console.log(greater);
//map

// const newnum=mynum.map( (num)=>{
//     return num +10
// }
// )
//chaining in map and filter
const num1 = mynum
.map( (num) => num * 10)
.map( (num)=> num+1)
.filter((num) => {
    return num > 41
})
console.log(num1)