const loginInfo = {
    userName: 'Deepak',
    address: 'Whatever',
    phoneNo: 'WhatEver',
    greet: function myGreet() {
        // console.log(this);
        return `${this.userName} welcome to this page` //this keyword used to store the context
    }
}


// console.log(loginInfo.greet());

//this keyword doesn't work inside a function

const myAddFunction = (num1 , num2) => num1 + num2; //arrow function
// const myAddFunction = (num1 , num2) => (num1 + num2); //another way of declaring arrow function

console.log(myAddFunction(25,30)) 

//how to return an object with arrow function

const userInfo = () => ({username1: 'username', title: 'whatevertitle'})

console.log(userInfo());