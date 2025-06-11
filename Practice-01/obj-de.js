
const course={
    coursename:"js-hindi",
    id:"999",
    courseInstructor:"hitesh"

}

// de-structuring the object
const{courseInstructor:instructor}=course
console.log(instructor);
const{coursename:c_name}=course
console.log(c_name);
