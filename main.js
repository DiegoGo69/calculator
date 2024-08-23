// num ope num match /g finds all matches
//let regex = /^(\d) ?([+-*\/]) ?(\d) ?[+-*\/=]/;
let regex = /^(\d) ?([\+\-\*\/]) ?(\d) ?(?:[\+\-\*\/=])/;
let displayContent = "";

const screenMain = document.querySelector('.screenMain');

function display(content) {
    screenMain.textContent = content;
}

const keyboard = document.querySelector('.keyboard');
keyboard.addEventListener('click', event => {
    // element key's value of dataset attribute
    let key = event.target.dataset;
    switch (key["value"]) {
        case "0":
            displayContent += key["value"];
            display(displayContent);
            break;
        case "1":
            displayContent += key["value"];
            display(displayContent);
            break;
        case "2":
            displayContent += key["value"];
            display(displayContent);
            break;
        case "2":
            displayContent += key["value"];
            display(displayContent);
            break;
        case "3":
            displayContent += key["value"];
            display(displayContent);
            break;
        case "4":
            displayContent += key["value"];
            display(displayContent);
            break;
        case "5":
            displayContent += key["value"];
            display(displayContent);
            break;
        case "6":
            displayContent += key["value"];
            display(displayContent);
            break;
        case "7":
            displayContent += key["value"];
            display(displayContent);
            break;
        case "8":
            displayContent += key["value"];
            display(displayContent);
            break;
        case "9":
            displayContent += key["value"];
            display(displayContent);
            break;

        case ".":
            displayContent += key["value"];
            display(displayContent);
            break;
        
        case "+":
            displayContent += key["value"];
            display(displayContent);
            break;
        case "-":
            displayContent += key["value"];
            display(displayContent);
            break;
        case "*":
            displayContent += key["value"];
            display(displayContent);
            break;
        case "/":
            displayContent += key["value"];
            display(displayContent);
            break;

        case "=":
            displayContent += key["value"];
            display(displayContent);
            break;


        case "c":
            displayContent += 'CLEAR';
            display(displayContent);
            break;
        case "del":
            displayContent += "DELETE";
            display(displayContent);
            break;
        case "pow":
            displayContent += "POWER";
            display(displayContent);
            break;
        case "cp":
            displayContent += "COPY";
            display(displayContent);
            break;
        // DEFAULT ???
    }

    // After buttons are pressed test diplsay content
    if (regex.test(displayContent)) {
        // if match. get matches
        let match = displayContent.match(regex);
        let a = match[1];
        let b = match[3];
        let operator = match[2];
        // operate
        let result = operate(a, b, operator)
        // change display content
        displayContent = result;
        display(displayContent);
    }
})

function add(a, b) {return a + b}
function substract(a, b) {return a - b}
function multiply(a, b) {return a * b}
function divide(a, b) {return a / b}

function operate(a, b, operator) {
    let result;
    switch (operator) {
        case '+':
            result = add(+a, +b);
            break;
        case '-':
            substract(a, b);
            break;
        case '*':
            multiply(a, b);
            break;
        case '/':
            divide(a, b);
            break;    
    }
    return result;
}

/* I could use an input textbox, and add an event listener on change
so if the user enters input it works,
and if user type via buttons it also works
because is onchange */