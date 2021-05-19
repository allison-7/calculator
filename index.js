//https://www.w3schools.com/js/js_math.asp

const buttons = document.getElementById("keyboard");
let resultNum = document.getElementById("result");

//previous is bottom
//top is result
buttons.addEventListener('click', (event) => {
    const {target} = event;
    console.log(target.value);
    let arc = document.getElementById("arc").checked;
    let hyp = document.getElementById("hyp").checked;
    let deg = document.getElementById("deg").checked;
    if((target.value == "clear") || (target.value == "on") || (target.value == "")){
        document.getElementById("result").textContent = "0";
        document.getElementById("previous").textContent = "0";
        return;
    }
    if((document.getElementById("result").textContent == "0") && (document.getElementById("previous").textContent == "0")){
        document.getElementById("result").textContent = target.value;
        document.getElementById("previous").textContent = target.value;
        //expression = document.getElementById("previous").textContent;
        if((target.value == "sin(") || (target.value == "cos(") || (target.value == "tan(")){
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
                document.getElementById("result").textContent = target.value;
            }
            else {
                document.getElementById("previous").textContent += target.value;
                document.getElementById("result").textContent = target.value;
            }
            //document.getElementById("result").textContent = "";
        }
    }
    if(target.value == "="){
        let resultExpression = document.getElementById("previous").textContent;
        let expression = resultExpression.slice(0,-1); //remove equals
        console.log(expression);
        answer = eval(expression);
        console.log(answer);
        document.getElementById("result").textContent = answer;
        document.getElementById("previous").textContent += answer;
    }
});

/*function displayValue(v, expression){
    if(!(isNaN(v)) || (v == ".") || (v == "+") || (v == "-") || (v == "/") || (v == "*")) { //if a number or a regular operator
        return v;
    }
    else{
        if (v == "**")
    }
}*/
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