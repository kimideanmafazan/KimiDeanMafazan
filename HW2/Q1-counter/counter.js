let counter = 0;
            
function add() {
    counter++;
    document.querySelector('h1').innerHTML = counter;
}

function sub() {
    counter--;
    document.querySelector('h1').innerHTML = counter;
}

function reset() {
    counter = 0;
    document.querySelector('h1').innerHTML = counter;
}