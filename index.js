//https://www.w3schools.com/js/js_math.asp

//tests
let a = 10.5;
let b = 13;
let degrees = true;
let arc = false;
let hyp = false;

let mathfunctions = {
    add: function() {
        return a+b;
    },
    subtract: function() {
        return a-b;
    },
    multiply: function() {
        return a*b;
    },
    divide: function() {
        return a/b;
    },
    inverse: function(){
        return 1/a;
    },
    square: function(){
        return a*a;
    },
    squareRoot: function(){
        return Math.sqrt(a);
    },
    absolute: function(){
        return Math.abs(a);
    },
    factorial: function(){
        if (a === 0 || a === 1)
            return 1;
        for (var i = a - 1; i >= 1; i--) {
            a *= i;
        }
        return a;
    },
    power: function(){
        return Math.pow(a,b);
    },
    power10: function(){
        return Math.pow(10,a);
    },
    log: function(){
        return Math.log10(a);
    },
    naturalLog: function(){
        return Math.log(a);
    },
    sin: function(){
        if (degrees == true){
            input = a * Math.PI / 180; //convert to radians
        }
        else if(degrees == false){ //radians
            input = a;
        }
        if ((arc == true) && (hyp == true)){
            return Math.asinh(input);
        }
        else if ((arc == true) && (hyp == false)){
            return Math.asin(input);
        }
        else if ((arc == false) && (hyp == true)){
            return Math.sinh(input);
        }
        else if ((arc == false) && (hyp == false)){
            return Math.sin(input);
        }
    },
    cos: function(){
        if (degrees == true){
            input = a * Math.PI / 180; //convert to radians
        }
        else if(degrees == false){ //radians
            input = a;
        }
        if ((arc == true) && (hyp == true)){
            return Math.acosh(input);
        }
        else if ((arc == true) && (hyp == false)){
            return Math.acos(input);
        }
        else if ((arc == false) && (hyp == true)){
            return Math.cosh(input);
        }
        else if ((arc == false) && (hyp == false)){
            return Math.cos(input);
        }
    },
    tan: function(){
        if (degrees == true){
            input = a * Math.PI / 180; //convert to radians
        }
        else if(degrees == false){ //radians
            input = a;
        }
        if ((arc == true) && (hyp == true)){
            return Math.atanh(input);
        }
        else if ((arc == true) && (hyp == false)){
            return Math.atan(input);
        }
        else if ((arc == false) && (hyp == true)){
            return Math.tanh(input);
        }
        else if ((arc == false) && (hyp == false)){
            return Math.tan(input);
        }
    }
};
function sayHello(){
    console.log("Hello World!");
    console.log(mathfunctions.sin(a));
}
document.getElementById("hello").addEventListener("click",sayHello);