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

        
        
    }
})