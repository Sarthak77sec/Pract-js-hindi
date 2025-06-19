//high order loops for 
// for of loop
array=[1,3,5,7,4]
for (const element of array) {
    //console.log(element);
    
}
//map in js and iterating with for of loop
const map = new Map()
map.set('IN',"INdia")
map.set("fr","france")
map.set("usa","united states")

for(const [key,value] of map){
    // console.log(key,':-',value);
    // console.log(key,value);
    
}
// forin for accessing objects 
const myobject={
    js:'javascript',
    py:'python',
    sh:'bash',
    rb:"ruby"
}
for(const key in myobject){
    // console.log(`${key} shortcut for ${myobject[key]}`);
    
}
// foreach loop
const lang=["js","py","rb","cpp"]
lang.forEach( function (val){ //a callback function is added here for iteration in array
    // console.log(val);
})
//returning values from array of objects
//this is how we can filter using forEach loop 
const mycode=[
    {
        lang_name:"javascript",
        lang_extension:"js"

    },
    {
        lang_name:"python",
        lang_extension:"py"
    },
    {
        lang_name:"bash",
        lang_extension:"sh"
    }
]
mycode.forEach( (value)=> {
    console.log(value.lang_extension);
    
})