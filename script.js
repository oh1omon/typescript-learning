"use strict";
//I know that it is not the best solution, since eval() executes JS code passed in a string as an argument. But you have told to do this task without making the system too hard, so here is the solution under 50 lines of code. Anyway, I have limited executable code to 20 symbols for srot of security.
//setting up
const input = document.getElementById('input');
const result = document.getElementById('result');
const clear = document.getElementById('clear');
const numbers = Array.from(document.getElementsByClassName('inpSymbols'));
const signs = Array.from(document.getElementsByClassName('mathSigns'));
const signsContent = signs.map((sign) => sign.textContent);
if (numbers === null && input === null) {
    alert('oops');
}
else if (numbers !== null && input !== null) {
    numbers.forEach((number) => {
        number.addEventListener('click', () => {
            input.textContent += number.textContent;
        });
    });
}
if (signs === null && input === null) {
    alert('oops');
}
else if (signs !== null && input !== null) {
    signs.forEach((sign) => {
        sign.addEventListener('click', () => {
            let lastChar = input.textContent.charAt(input.textContent.length - 1);
            if (!signsContent.includes(lastChar)) {
                input.textContent += sign.textContent;
            }
        });
    });
}
const count = (input) => {
    let oldInp = input.textContent;
    if (oldInp.length > 20) {
        alert('I am just a stupid calculator, not a rocket');
        return;
    }
    let newInp = eval(oldInp);
    input.textContent = '' + newInp;
};
result.addEventListener('click', () => {
    count(input);
});
clear.addEventListener('click', () => {
    input.textContent = '';
});
