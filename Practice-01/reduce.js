 //accumulator how it is used in 
 const mynums =[1,2,3]
//  const mytotal = mynums.reduce( function(acc,curval){
//     console.log(`acc:${acc} and currval :${curval}`);
    
//     return acc + curval
//  },500)
const mytotal = mynums.reduce((acc,curval) =>acc+curval,0) 
console.log(mytotal)

//making a total format
const course =[{
    itemname:"oswp",
    price:2000
},
{
    itemname:"ccna",
    price:2900
},
{
    itemname:"oscp",
    price:2500

},
{
    itemname:"cwsp",
    price:2000
}
]
const total= course.reduce((acc,item)=>acc+item.price,0)
console.log(total);
