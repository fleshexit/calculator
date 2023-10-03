const screen = document.querySelector('.screen');
const keypad = document.querySelector('.keypad');
const keys = document.querySelectorAll('.keypad btn');

let equation = [];


keypad.addEventListener('click', function(e) {

    let keyVal = e.target.textContent;

    if (keyVal === 'AC') {
        screen.textContent = '';
    }
    else if (keyVal === 'C') {
        screen.textContent = screen.textContent.slice(0, -1);
    }
    else if (keyVal === '=') {
        console.log(equation);
        calculate();
    }
    else {
        screen.textContent += keyVal;
        equation.push(keyVal);

    }
});
