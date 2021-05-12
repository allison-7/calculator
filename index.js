//https://www.w3schools.com/js/js_math.asp

const buttons = document.getElementById("keyboard");
let resultNum = document.getElementById("result");
//let arc = document.getElementById("arc");
//console.log(arc.checked);
//let hyp = true;
/*let a = "0";
let b = "0";
let op = "";*/
/*document.getElementById("arc").onclick = function(){
    if (.checked ) {
        arc = true;
    } else {
        arc = false;
    }
}*/


//result is top
//previous is bottom with operators
buttons.addEventListener('click', (event) => {
    const {target} = event;
    let arc = document.getElementById("arc").checked;
    let hyp = document.getElementById("hyp").checked;
    let deg = document.getElementById("deg").checked;
    //let rad = document.getElementById("rad").checked;
   // console.log(target.value);
    if((target.value == "clear") || (target.value == "on")){
        document.getElementById("result").textContent = "0";
        document.getElementById("previous").textContent = "0";
        return;
    }
    if((document.getElementById("result").textContent == "0") && (document.getElementById("previous").textContent == "0")){
        document.getElementById("result").textContent = target.value;
        document.getElementById("previous").textContent = target.value;
        expression = document.getElementById("previous").textContent;
        if((target.value == "sin(")){
            let first = deg + "," + arc + "," + hyp + ",";
            document.getElementById("previous").textContent += first;
        }
    }
    else{
        if(!(isNaN(target.value)) || (target.value == ".")){ //if a number
            document.getElementById("result").textContent += target.value;
            document.getElementById("previous").textContent += target.value;
        }
        else{
            if((target.value == "sin(") || (target.value == "cos(") || (target.value == "tan(")){
                let first = document.getElementById("previous").textContent;
                console.log(first);
                first += target.value + deg + "," + arc + "," + hyp + ",";
                document.getElementById("previous").textContent += first;
            }
            else {
                document.getElementById("previous").textContent += target.value;
            }
            document.getElementById("result").textContent = "";
        }
    }
    if(target.value == "="){
        let resultExpression = document.getElementById("previous").textContent;
        //console.log(resultExpression);
        let expression = resultExpression.slice(0,-1); //remove equals
        console.log(expression);
        answer = eval(expression);
        console.log(answer);
        document.getElementById("result").textContent = answer;
        document.getElementById("previous").textContent += answer;
    }
});

//helper functions
function nthRoot(x, n){
    ng = n % 2;
    if((ng == 1) || x<0)
       x = -x;
    var r = Math.pow(x, 1 / n);
    n = Math.pow(r, n);  
    if(Math.abs(x - n) < 1 && (x > 0 === n > 0))
      return ng ? -r : r; 
}

function ePow(n){
    return Math.pow(Math.E,n);
}

function ln(n){
    return Math.log(n);
}

function factorial(n){
    if (n === 0 || n === 1)
                return 1;
            for (var i = n - 1; i >= 1; i--) {
                n *= i;
            }
            return n;
}

function log(b,n){
    return Math.log(n) / Math.log(b);
}

function toDegrees(n,deg) {
    if(deg) {
        return n * 180 / Math.PI;
    }
    else {
        return n;
    }
}
//trig functions
function sin(deg,arc,hyp,input){
    let answer = 0;
    if ((arc == true) && (hyp == true)){
        answer = Math.asinh(input);
        return toDegrees(answer,deg);
    }
    else if ((arc == true) && (hyp == false)){
        answer = Math.asin(input);
        return toDegrees(answer,deg);
    }
    else if ((arc == false) && (hyp == true)){
        answer = Math.sinh(input);
        return toDegrees(answer,deg);
    }
    else if ((arc == false) && (hyp == false)){
        answer = Math.sin(input);
        return toDegrees(answer,deg);
    }
}

function cos(deg,arc,hyp,input){
    let answer = 0;
    if ((arc == true) && (hyp == true)){
        answer = Math.acosh(input);
        return toDegrees(answer,deg);
    }
    else if ((arc == true) && (hyp == false)){
        answer = Math.acos(input);
        return toDegrees(answer,deg);
    }
    else if ((arc == false) && (hyp == true)){
        answer = Math.cosh(input);
        return toDegrees(answer,deg);
    }
    else if ((arc == false) && (hyp == false)){
        answer = Math.cos(input);
        return toDegrees(answer,deg);
    }
}
function tan(deg,arc,hyp,input){
    let answer = 0;
    if ((arc == true) && (hyp == true)){
        answer = Math.atanh(input);
        return toDegrees(answer,deg);
    }
    else if ((arc == true) && (hyp == false)){
        answer = Math.atan(input);
        return toDegrees(answer,deg);
    }
    else if ((arc == false) && (hyp == true)){
        answer = Math.tanh(input);
        return toDegrees(answer,deg);
    }
    else if ((arc == false) && (hyp == false)){
        answer = Math.tan(input);
        return toDegrees(answer,deg);
    }
}
//main math function
/*function result(a,b,operator){
    a = parseFloat(a);
    b = parseFloat(b);
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
    switch(operator){
        case "+" : 
            answer = mathfunctions.add();
            break; 
        case "-" :
            answer = mathfunctions.subtract();
            break;
        case "*" :
            answer = mathfunctions.multiply();
            break;
        case "/" :
            answer = mathfunctions.divide();
    }
    document.getElementById("previous").textContent += answer;
    document.getElementById("result").textContent = answer;
    console.log(answer);
}*/

//document.getElementById("submit").addEventListener("click",result);