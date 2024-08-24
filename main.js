const log = console.log;
// num ope num match /g finds all matches
// let regex = /^(\d+\.?\d*) ?([+\-*\/\^]) ?(\d+\.?\d*) ?(?:[+\\*\/\^=])/;
const regex = /^(\d+(?:\.\d+)?) ?([+\-*\/^]) ?(\d+(?:\.\d+)?) ?([+\-*\/^=])/;

// cannot start with dot, plus, minus, div, mult, pow
const invalidStart = /^[+\-*\/^=\.]/;

// cannot end with two operators (not dot)
// deletes 2 char replaces previous operator with the one just entered
const invalidEnd = /[+\-*\/^=]{2,}$/;

// cannot end with dot and an operator. deletes just 1 char
const invalidEnd3 = /[\.][+\-*\/^=\.]$/;
// 8././

// cannot end with an operand with 2 dots
const invalidEnd2 = /\d[\.]\d+[\.]$/;

// cannot start with operand and an equal sign
const invalidStart2= /^\d+(?:\.\d+)? ?=/;


const regexInvalid = /^[+\-*\/^=]+/;
const reInvalidOperand = /(?:[\d]*[+\-*\/^=])[+\-*\/^=]+$/;



const reOperator = /[+\-*\/^=\.]/;

let displayContent = "";

const screenMain = document.querySelector('.screenMain');

function display(content) {
    screenMain.textContent = content;
}

const keyboard = document.querySelector('.keyboard');
keyboard.addEventListener('click', event => {
    // element key's value of dataset attribute
    let key = event.target.dataset;
    let keyValue = "";
    switch (key["value"]) {
        case "0":
            keyValue = key["value"];
            // display(displayContent);
            break;
        case "1":
            keyValue = key["value"];
            // display(displayContent);
            break;
        case "2":
            keyValue = key["value"];
            // display(displayContent);
            break;
        case "3":
            keyValue = key["value"];
            // display(displayContent);
            break;
        case "4":
            keyValue = key["value"];
            // display(displayContent);
            break;
        case "5":
            keyValue = key["value"];
            // display(displayContent);
            break;
        case "6":
            keyValue = key["value"];
            // display(displayContent);
            break;
        case "7":
            keyValue = key["value"];
            // display(displayContent);
            break;
        case "8":
            keyValue = key["value"];
            // display(displayContent);
            break;
        case "9":
            keyValue = key["value"];
            // display(displayContent);
            break;

        case ".":
            keyValue = key["value"];
            // display(displayContent);

            // event.target.setAttribute('disabled', 'truen');
            break;
        
        case "+":
            keyValue = key["value"];
            // display(displayContent);
            break;
        case "-":
            keyValue = key["value"];
            // display(displayContent);
            break;
        case "*":
            keyValue = key["value"];
            // display(displayContent);
            break;
        case "/":
            keyValue = key["value"];
            // display(displayContent);
            break;

        case "=":
            keyValue = key["value"];
            // display(displayContent);
            break;


        case "c":
            displayContent = '';
            display(displayContent);
            return
            break;
        case "del":
            // displayContent = displayContent.split("").slice(0, (displayContent.length - 1)).join("");
            displayContent = del(displayContent);
            display(displayContent);
            return
            break;
        case "pow":
            keyValue = "^";
            // display(displayContent);
            break;
        case "cp":
            copyToClipboard();
            return

            // display(displayContent);
            break;
        // DEFAULT ???
    }
    // innecesar
    
    log(keyValue);
    displayContent += keyValue;
    let valid = true;

    // IF INVALID START OF STRING
    if (invalidStart.test(displayContent)) {
        log('INVALID');
        // Delete last two characters
        displayContent = del(displayContent)
        valid = false;
    }

    // cannot end with two operators (not dot)
    // If previous was operator replaced with the one just entered
    if (invalidEnd.test(displayContent)) {
        log('INVALID');
        // Delete last two characters
        // delete char just entered
        displayContent = del(displayContent);
        // delete previous char to replace with the just entered
        displayContent = del(displayContent);
        displayContent += keyValue;
        valid = false;
    }    

    // cannot end with an operand with 2 dots
    if (invalidEnd2.test(displayContent)) {
        log('INVALID');
        // delete char just entered
        displayContent = del(displayContent);
        valid = false;
    }  

    // cannot end with dot and an operator. deletes just 1 char
    if (invalidEnd3.test(displayContent)) {
        log('INVALID');
        // delete char just entered
        displayContent = del(displayContent);
        valid = false;
    } 

    // cannot start with operand and an equal sign
    if (invalidStart2.test(displayContent)) {
        log('INVALID');
        // Delete last two characters
        // celete char just entered
        // delete previous char to replace with the just entered
        displayContent = del(displayContent);
        valid = false;
    } 

    // After buttons are pressed test diplsay content
    if (regex.test(displayContent)) {
        // if match. get matches
        let match = displayContent.match(regex);
        let a = match[1];
        let operator = match[2];
        let b = match[3];
        let secOperator = match[4];

        if (validateInput(a, b, operator)) {
            // operate
            let result = operate(a, b, operator)
            // change display content
            displayContent = result;
            
            if (secOperator !== '=') {displayContent += secOperator};
        }
    }
    if (valid) { log('VALID') };
    display(displayContent);
})

function del(string) {
    if (!string) return '';
    string =
        string
        .split("")
        .slice(0, (string.length - 1))
        .join("");
    return string
}

// Validate input
function validateInput(a, b, operator) {
    if (reInvalidOperand.test(a)) {return false};
    if (reInvalidOperand.test(b)) {return false};
    if (reInvalidOperator.test(operator)) {return false};
    return true
}


function add(a, b) {return a + b}
function substract(a, b) {return a - b}
function multiply(a, b) {return a * b}
function divide(a, b) {return a / b}
function power(a, b) {return a ** b}

function operate(a, b, operator) {
    a = +a;
    b = +b;
    let result;
    switch (operator) {
        case '+':
            result = add(a, b);
            break;
        case '-':
            result = substract(a, b);
            break;
        case '*':
            result = multiply(a, b);
            break;
        case '/':
            result = divide(a, b);
            break;    
        case '^':
            result = power(a, b);
            break; 
    }
    return result;
}

function copyToClipboard() {
      // Select the text field
  const copy = document.querySelector('#clipBoard');
  copy.value = displayContent;
  copy.select();
  copy.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copy.value);

  // Alert the copied text
  console.log("Copied the text: " + copy.value);
}


// VALIDATE INPUT

// if operator follow by an operator invalid

/* I could use an input textbox, and add an event listener on change
so if the user enters input it works,
and if user type via buttons it also works
because is onchange */