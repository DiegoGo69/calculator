// num ope num match /g finds all matches
// let regex = /^(\d+\.?\d*) ?([+\-*\/\^]) ?(\d+\.?\d*) ?(?:[+\\*\/\^=])/;
const regex = /^(\d+(?:\.\d+)?) ?([+\-*\/^]) ?(\d+(?:\.\d+)?) ?([+\-*\/^=])/;

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
            displayContent = '';
            display(displayContent);
            break;
        case "del":
            displayContent = displayContent.split("").slice(0, (displayContent.length - 1)).join("");
            display(displayContent);
            break;
        case "pow":
            displayContent += "^";
            display(displayContent);
            break;
        case "cp":
            copyToClipboard();

            display(displayContent);
            break;
        // DEFAULT ???
    }

    // After buttons are pressed test diplsay content
    if (regex.test(displayContent)) {
        // if match. get matches
        let match = displayContent.match(regex);
        let a = match[1];
        let operator = match[2];
        let b = match[3];
        let secOperator = match[4];
        // operate
        let result = operate(a, b, operator)
        // change display content
        displayContent = result;
        
        if (secOperator !== '=') {displayContent += secOperator};
        display(displayContent);
    }
})

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