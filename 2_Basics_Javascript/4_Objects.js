// const newUser = {
//     fullName: {
//         fName: 'Something',
//         lName: 'Whatever'
//     },
//     email: 'someting@gmail.com'
// }//nested objects

// console.log(newUser.fullName.lName);//printing nested objects 


const newLog = {
    email: 'whatever@google.com',
    isLoggedI: false,
    id: 'WhateverId-570302705070'

}

const oldLog = {
    whatever: 'whatever',
    isWhatever: false,
    oldId: 'whateverOldId'
}

const mixObject = {...newLog, ...oldLog} //spread operator we can also use Object.assign({}, newLog, oldLog)
// console.log(typeof mixObject);

// console.log(mixObject.hasOwnProperty('kuchbhi'));

// console.log(Object.keys(mixObject));
// console.log(Object.values(mixObject)); //fetching all keys and values from Objects