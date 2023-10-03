const screen = document.querySelector('.screen');
const keypad = document.querySelector('.keypad');
const keys = document.querySelectorAll('.keypad btn');




keypad.addEventListener('click', function(e) {

    let keyVal = e.target.textContent;
    let screenVal = screen.textContent;    

    if (keyVal === 'AC') {
        screen.textContent = '';
    }
    else if (keyVal === 'C') {
        screen.textContent = screen.textContent.slice(0, -1);
    }
    else {
        screen.textContent += keyVal;
    }



});


function updateDisplay(x) {
    screen.textContent = x;
}