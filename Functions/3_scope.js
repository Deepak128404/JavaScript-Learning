if(true){
    let first = 'first';
    const second = 'second';
    var outsideAvilable = "i'm outside also" //since this variable is available outside it's scope which could lead multiple problems we avoid using var
}

// console.log(outsideAvilable);
// console.log(second);

if(true){
    const username = 'Deepak'
    if(username=="Deepak"){
        console.log(`hello ${username}`)//username can be accessed inside this function scope
        const username2 = 'function';
        console.log(username2);
    }
    // console.log(username2); //since it's outside it's scope it cannot be accesssed 
}

console.log(addOne(9));
function addOne(num) {
    return num + 1;
}


console.log(addTwo); // cannot be accessed before initializing in this case but working in the previous case
const addTwo = function(num){
    return num + 2
}