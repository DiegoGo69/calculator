# calculator
Calculator project for The Odin Project

## How it works
Calcultor is build using basic HTML principles, and using flebox as its display mode, with wrap property for the keyboard layout. Althought it may present inconsistencies when resize, It gave me flexibility, for not hardcoding the layout.

### Operations
Addition, sustraction, multiplication, division and exponentiation are the arithmetic operations directly supported. 

#### Copy
It also offers the option for copying the screen text to the clipboard. To achieve this I included a hidden input element, that takes the value of the screen content, this value is then selected and copied to the clipboard using browser built in functionality.

### Input validation
Regular expressions are used to validate the user input, avoiding buggy input that might cause errors. The user input is check to decide wether or not it is valid, if so the screen displays the input, otherwise it ignores it.

### Operate
If the input is indeed valid, then it is check to match a valid arithmetic operation allowed by the calculator, usign regular expressions if the input matches it gets the operands and operator, and call the `operate()` function, with these arguments, it then calls the respective arithmetic operation function to get the result. The result is check to be a float value, if so it's rounded to 2 decimal points.