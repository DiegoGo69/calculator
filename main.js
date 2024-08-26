const log = console.log;
// Valid arithmetic operation input
const regex = /^-?(\d+(?:\.\d+)?) ?([+\-*\/^]) ?(\d+(?:\.\d+)?) ?([+\-*\/^=])/;
// cannot start with dot, plus, minus, div, mult, pow
const invalidStart = /^[+\-*\/^=\.][+\-*\/^=\.]*/;
// cannot start with operand and an equal sign.
const invalidStart2= /^\d+(?:\.\d+)? ?=/;
// cannot end with two operators. dots not included
const invalidEnd = /[+\-*\/^=]{2,}$/;
// cannot end with an operand with 2 dots
const invalidEnd2 = /\d[\.]\d+[\.]$/;
// cannot end with dot operator. or operator dot
const invalidEnd3 = /(?:[\.][+\-*\/^=\.]|[+\-*\/^=]\.)$/;

const validOperand = /^\d+(?:\.\d+)?/;
const validOperator = /[+\-*\/^]/;

// Text to show in calc screen
let displayContent = "";
// Screen reference
const screen = document.querySelector('.screen');
function display(content) {
    screen.textContent = content;
}
// Keyboard event handler
const keyboard = document.querySelector('.keyboard');
keyboard.addEventListener('click', event => {
    // Key's element reference
    let key = event.target;
    let keyValue = "";
    if (key.classList.contains('key')) {
        switch (key.dataset["value"]) {
            // Clear display content
            case "c":
                displayContent = '';
                display(displayContent);
                return
            // Delete one character
            case "del":
                // displayContent = displayContent.split("").slice(0, (displayContent.length - 1)).join("");
                displayContent = del(displayContent);
                display(displayContent);
                return
            // Copy display content
            case "cp":
                copyToClipboard();
                return
            // Power
            case "pow":
                keyValue = "^";
                break;
            // Nums and operator left
            default:
                keyValue = key.dataset["value"];
                break;
        }
    }
    
    displayContent += keyValue;
    let valid = true;

    // CHECK IF VALID MATH OPERATION
    // Invalid input start with operator
    if (invalidStart.test(displayContent)) {
        log('INVALID');
        displayContent = del(displayContent)
        valid = false;
    }
    // cannot start with operand followed by an equal sign
    else if (invalidStart2.test(displayContent)) {
        log('INVALID');
        // Delete last two characters
        // celete char just entered
        // delete previous char to replace with the just entered
        displayContent = del(displayContent);
        valid = false;
    } 
    // cannot end with two operators (not dot)
    // If previous was operator replaced with the one just entered
    if (invalidEnd.test(displayContent)) {
        log('INVALID');
        // Delete last two characters.
        displayContent = del(displayContent);
        displayContent = del(displayContent);
        // Replace previous operator with the last entered
        displayContent += keyValue;
        valid = false;
    }    
    // cannot end with operand with 2 dots
    else if (invalidEnd2.test(displayContent)) {
        log('INVALID');
        displayContent = del(displayContent);
        valid = false;
    }  
    // cannot end with dot and an operator. deletes just 1 char
    else if (invalidEnd3.test(displayContent)) {
        log('INVALID');
        displayContent = del(displayContent);
        valid = false;
    } 

    // After buttons are pressed test diplsay content
    if (regex.test(displayContent) && valid) {
        // if match. get matches
        let match = displayContent.match(regex);
        let a = match[1];
        let operator = match[2];
        let b = match[3];
        let secOperator = match[4];

        if (validInteger(a, b, operator)) {
            // Check zero division
            if (zeroDivision(a, b, operator)) {
                displayContent = '';
                log('Invalid zero division');
                alert('Invalid zero division.');}
            else {
                // operate
                let result = operate(a, b, operator)
                // change display content
                displayContent = result;
                if (secOperator !== '=') {displayContent += secOperator};

                if (result === Infinity || result === -Infinity) {
                    alert("Slow down, I'm just a basic calculator. 2 + 2 = 4"); 
                    displayContent = '';
                }
            }
        }
    }
    if (valid) { log('VALID') };
    display(displayContent);
})

function del(text) {
    if (!text) return '';
    text =
        text
        .split("")
        .slice(0, (text.length - 1))
        .join("");
    return text
}

// Basic input validation
function validInteger(a, b, operator) {
    if (!validOperand.test(a)) {return false};
    if (!validOperand.test(b)) {return false};
    if (!validOperator.test(operator)) {return false};
    return true
}

// Zero division error
function zeroDivision(a, b, operator) {
    if ((a == 0 || b == 0) && operator == '/') {return true}
    return false
}

function add(a, b) {return a + b}
function substract(a, b) {return a - b}
function multiply(a, b) {return a * b}
function divide(a, b) {return a / b}
function power(a, b) {return a ** b}

function operate(a, b, operator) {
    // Operands to number
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
    // If result is integer
    if (Number.isInteger(result)) {return result}
    // If result is float round to 2 decimal places
    else {return result.toFixed(2)}
}

// Copy result to clipboard
function copyToClipboard() {
  // Select text field
  if (displayContent) {
      const copy = document.querySelector('#clipBoard');
      copy.value = displayContent;
      copy.select();
      copy.setSelectionRange(0, 99999); // For mobile devices
       // Copy the text inside the text field
      navigator.clipboard.writeText(copy.value);
      // Alert the copied text
      console.log("Copied the text: " + copy.value);
      alert("Copied the text: " + copy.value);
  }
}