let Number =  5555;

let Bool = true;

let String = "hey this is string";

let Server = null;

let Later = undefined;

//symbol & bigint
console.table([Number, Bool, String, Server, Later]);

//Primitive DataTypes


//Non-Primitive DataTypes Function, Array, Objects
let myFunction = Function();{
   console.log("Hello From Function");
}

let myArray = ['1','2','3', '4'];

console.log(myArray);


//----------------------------------------------------------------------------------------------------------------------------//

//Stack Memory
let variableOne =10;
let variableTwo = variableOne; // in Stack Memory Only a Copy of The Original Data is sent

variableTwo= 20;
console.log(variableOne);
console.log(variableTwo);

//Heap Memory

let userOne = {
   'userEmail': 'userOne@g.com',
   'userName': 'someuser'
}


let userTwo = userOne; //Reference of Original value is sent Thus changing in userTwo will lead to change in userOne as well

userTwo.userEmail = 'userTwo@g.com';

console.log(userOne.userEmail);
console.log(userTwo.userEmail);