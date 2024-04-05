//IMMEDIATE INVOKE FUNCTION EXPRESSION

(function namedIIFE (){
    console.log("WHATEVER YOU'VE WANTED TO DO WITHOUT GLOBAL POLLUTION IS DONE");
}) (); //SEMICOLON IS REQUIRED TO TELL WHERE IT'LL END OR IT WILL CREATE PROBLEM WHEN RUNNING THE SECOND IIFE


( (name) => (console.log(`hello ${name}`)))('deepak'); 
//just like we pass the value to our normal function we'll pass it for IIFE whoever will call the funciton will pass the value