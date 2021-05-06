//https://www.w3schools.com/js/js_math.asp

/* function getValues(){
    let currentValue = document.getElementById("a").innerHTML
}
 */

function result(){
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let operator = document.getElementById("operator").value;
    let degrees = true;
    let arc = false;
    let hyp = false;

    console.log(a);
    console.log(operator);
    console.log(b);

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
    let answer = 0;
    if(operator == '+'){
        answer = parseFloat(mathfunctions.add());
    }
    if(operator == '-'){
        answer = parseFloat(mathfunctions.subtract());
    }
    if(operator == '*'){
        answer = parseFloat(mathfunctions.multiply());
    }
    if(operator == '/'){
        answer = parseFloat(mathfunctions.divide());
    }
    console.log(answer);
}
document.getElementById("submit").addEventListener("click",result);