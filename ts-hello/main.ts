// section 2 : lect 13

function log(message){
    console.log(message);
}

var message = "Hello World!";
log(message);

// Section 2 : lect 14 : Declaring variables
var number = 1;
let count = 2; //let keyword is also used in JS

// ------ for with var
function simple_for_loop_v(){
    for (var i=0 ; i < 5; i++){
        console.log(i);
    }
    console.log('Finally: '+ i);  //for loop variable i is available outside the function
}

simple_for_loop_v();


// ------ for with let : in js file let is converted to var
function simple_for_loop_l(){
    for (let i=0 ; i < 5; i++){
        console.log(i);
    }
    console.log('Finally: '+ i);  //for loop let i is not available outside the function
}

simple_for_loop_l();



// Section 2: Lect 15 : Types 
let count=5;
count = 'a'; //can not be useful in types script 

let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1,2,3];
let f: any[] = [1, true, 'a', false];

const ColorRed=0;
const ColorGreen=1;
const ColorBlue=2;

enum Color {Red =0 , Green=1, Blue=2, Purple=3};
let backgroundColor = Color.Red; 


// Section 2: Lect 16 : Type Assertions
let message;
message='abc';
let endWithC = (<string>message).endsWith('c');
let alternativeWay = (message as string).endsWith('c');

// Section 2 : Lect 17 : Arrow function (Lambda expression)
let log1=function(message){
    console.log(message);
}//javascript function format

let dolog = (message) =>  console.log(message);
// shorter way of defining a function : lambda expression

dolog("Lambda Expression");