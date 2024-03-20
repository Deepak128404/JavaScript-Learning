const mySymbol = Symbol('mySym')
const jsUser = {
    name: 'WhatEverName',
    email: 'noidea@gmai.whatever',
    phone: '572058075705',
    "access": 'WhateverAccess',
    "full name": "Whatever Whatever",
    [mySymbol]: 'mykey'
}

// console.log(jsUser.name);//ways to access objects
// console.log(jsUser['full name']);//another way to access this kind of key


// Object.freeze(jsUser)

// jsUser.name = 'username';

// console.log(jsUser);

// console.log(jsUser[mySymbol]);//way to access Symbols

jsUser.greetings = function () {
   console.log( "Hello From Greetings");
}
jsUser.greetings();

jsUser.nameGreetings = function () {
    console.log(`Hello this is Greetings "()" Welcome ${this.name}`);
}

jsUser.nameGreetings();