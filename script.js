let currentvalue = 0;
let button = document.querySelector('#click-me');
button.addEventListener('click', function() {
    currentvalue += 1;
    button.innerHTML = currentvalue;
    console.log("You have clicked me", currentvalue, "times");
});

let initialvalue = 0;

let reset = document.querySelector('#reset');
reset.style.backgroundColor = 'transparent';
reset.style.color = 'transparent';

reset.addEventListener('click', function() {
    currentvalue = 0;
    reset.style.backgroundColor = 'black';
    reset.style.color = 'white';
    button.innerHTML = initialvalue;
});

button.addEventListener('click', function() {
    reset.style.backgroundColor = 'transparent';
    reset.style.color = 'transparent';
});