alert("Hey!!!");
yname = prompt("What's your name?");
alert("Hey!!!,Nice to meet you "+yname);

// showing the informations that what to do
alert("Info + Hint🤖 : the reset button that you are looking for is already in the web-page🤪you just have to find it that's the main game!!!");
alert("Let's do this your game starts now : find the reset button and make the value ZERO 🤡");

let initialvalue = 0;

// getting the random number using random builtin functions
let pr = Math.round(Math.random()*(190)+110);
let pt = Math.round(Math.random()*(200)+100);

console.log(pr);
console.log(pt);

let currentvalue = 0;
let v = 0;

// creating the reset button and positioning it randomly inside the page
let rbutton = document.createElement('button');
rbutton.id = 'reset';
rbutton.style.position = 'absolute';
rbutton.style.top = pt+'px';
rbutton.style.right = pr+'px';
rbutton.style.backgroundColor = 'transparent';
rbutton.style.color = 'transparent';
rbutton.style.padding = '12px 18px';
rbutton.style.textAlign = 'center';
rbutton.style.border = 'none';
rbutton.style.fontSize = '10px';
rbutton.style.transition = 'all ease-in-out 0.3s';
rbutton.style.borderRadius = '10px';
rbutton.innerText = 'RESET';

// inserting the reset button inside the content or the webpage
let main = document.querySelector('#main');
main.append(rbutton);

// defined functions
let button = document.querySelector('#click-me');
button.addEventListener('click', function() {
    currentvalue += 1;
    button.innerHTML = currentvalue;
    console.log("You have clicked me", currentvalue, "times");
});

rbutton.addEventListener('click', function() {
    currentvalue = 0;
    rbutton.style.backgroundColor = 'black';
    rbutton.style.color = 'white';
    button.innerHTML = initialvalue;
    alert("Let's gooo 🏆 you have founded the reset button🕺..if you want to play again, make sure that you should refresh the page to play again and find the reset button again!!!");
    alert("You have founded the RESET button in "+v+" attempts");
});

button.addEventListener('click', function() {
    if(currentvalue == 5) {
        alert("Think more you are soo close!!!");
    }
    else if (currentvalue == 10) {
        alert("Not gonna happen");
    }
    else if (currentvalue == 15) {
        alert("Are you an Idiot!!!");
    }
    else if (currentvalue == 20) {
        alert("The RESET button is on the upper side of the text(find and click....), inside the white space!!");
    }
    rbutton.style.backgroundColor = 'transparent';
    rbutton.style.color = 'transparent';
});

let body = document.body;
body.addEventListener('click', function() {
    v += 1;
});
