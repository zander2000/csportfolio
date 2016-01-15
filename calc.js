// These ae the variables.
var button = document.getElementById("submitButton");
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var answer;
var display = document.getElementById('display');
var dropdown = document.getElementById("dropdown");

// This listens for you to click on your mouse or mouse pad in order to carry out its function 
button.addEventListener("click", doMath);

// This tells the computer what to do when each function is pressed. 
function doMath() {
    if  (dropdown.value == "+"){
        answer = parseInt(input1.value) + parseInt(input2.value);
        display.innerHTML = answer;
    }
    if  (dropdown.value == "-"){
        answer = parseInt(input1.value) - parseInt(input2.value);
        display.innerHTML = answer;
    }
    if  (dropdown.value == "x"){
        answer = parseInt(input1.value) * parseInt(input2.value);
        display.innerHTML = answer;
    }
    if  (dropdown.value == "/"){
        answer = parseInt(input1.value) / parseInt(input2.value);
        display.innerHTML = answer;
    } 
    if  (dropdown.value == "^"){
        answer = Math.pow(input1.value, input2.value);
        display.innerHTML = answer;
    } 
    if  (dropdown.value == ","){
        answer = Math.pow(parseInt(input1.value), 1/parseInt(input2.value));
        display.innerHTML = answer;
    } 
}