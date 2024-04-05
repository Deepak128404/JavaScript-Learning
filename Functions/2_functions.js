// function inputFunction(...numbers){//rest operator for handling multiple values in function (used in e-commerce cart kind of used cases)
//     return numbers
// }

// console.log(inputFunction(23,24,25,26.27));

// const myObject = {
//     name: 'objectFunction',
//     work: 'whatever',
//     usedcase: 'notKnown'
// }

function returnObject(yourObject){
    return `the name of the Object is ${yourObject.name}, it's work is ${yourObject.work}, it's used case is ${yourObject.usedcase}`
}

console.log(returnObject({
    name: 'object',
    work: "don't know",
    usedcase: 'whatever'
}))

//function to return the third value in an array

const myNoArray = [100,500,700,900,9400]

function noReturn(Array) {
    return Array[2]   
}

console.log(noReturn(myNoArray));