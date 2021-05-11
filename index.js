//https://www.w3schools.com/js/js_math.asp


const buttons = document.getElementById("keyboard");
let resultNum = document.getElementById("result");
let a = "0";
let b = "0";
let op = "";
//result is top
//previous is bottom with operators
buttons.addEventListener('click', (event) => {
    const {target} = event;
    if(target.value == "clear"){
        document.getElementById("result").textContent = "0";
        document.getElementById("previous").textContent = "0";
        return;
    }
    if((document.getElementById("result").textContent == "0") && (document.getElementById("previous").textContent == "0")){
        document.getElementById("result").textContent = target.value;
        document.getElementById("previous").textContent = target.value;
        if((op == "")){
            a = target.value;
        }
    }
    else{
        if(!(isNaN(target.value)) || (target.value == ".")){ //if a number
            document.getElementById("result").textContent += target.value;
            document.getElementById("previous").textContent += target.value;
            if((op == "")){
                a += target.value;
            } else {
                if (b == "0"){
                    b = target.value;
                    document.getElementById("result").textContent = target.value;
                }
                else {
                    b += target.value;
                    
                }
            }
        }
        else{
            document.getElementById("previous").textContent += target.value;
            if(target.value != "="){
                op = target.value;
            }
        }
    }
    console.log(a);
    console.log(op);
    console.log(b);
    if(target.value == "="){
        result(a,b,op);
    }
});

/*for (let i = 0; i < buttons; i++){
    document.querySelectorAll(".btn")[i].addEventListener("click", function() {
        console.log(document.getElementById());
        
    });
}*/

//main math function
function result(a,b,operator){
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
}

//document.getElementById("submit").addEventListener("click",result);