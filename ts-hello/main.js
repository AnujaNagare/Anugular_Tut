// section 2 : lect 13
function log(message) {
    console.log(message);
}
var message = "Hello World!";
log(message);
// Section 2 : lect 14 : Declaring variables
var number = 1;
var count = 2; //let keyword is also used in JS
// ------ for with var
function simple_for_loop_v() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally: ' + i); //for loop variable i is available outside the function
}
simple_for_loop_v();
// ------ for with let : in js file let is converted to var
function simple_for_loop_l() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally: ' + i); //for loop let i is not available outside the function
}
simple_for_loop_l();
// Section 2: Lect 15 : Types 
var count = 5;
count = 'a'; //can not be useful in types script 
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a', false];
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Purple"] = 3] = "Purple";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
// Section 2: Lect 16 : Type Assertions
var message;
message = 'abc';
var endWithC = message.endsWith('c');
var alternativeWay = message.endsWith('c');
// Section 2 : Lect 17 : Arrow function (Lambda expression)
var log1 = function (message) {
    console.log(message);
}; //javascript function format
var dolog = function (message) { return console.log(message); };
// shorter way of defining a function : lambda expression
dolog("Lambda Expression");