const fSound = new Audio('sounds/cash.mp3');
const sSound = new Audio('sounds/swish.m4a');
const tSound = new Audio('sounds/aww.mp3');

document.querySelector('#btn-1').addEventListener('click', One);

//the function for an overlay
function One() {
    document.querySelector('#btn-1').removeEventListener('click', One);

    let rpt = document.createElement('input');
    let graber = document.querySelector('#inpt1').value;
    let holder = document.createTextNode("Thank you " + graber + " have a good One");
    let upper = document.createElement('h3');
    upper.appendChild(holder);

    document.querySelector('#bdy').appendChild(upper);

    let image = document.createElement('img');
    image.src = "images/t.jpeg";
    document.querySelector('#bdy').appendChild(image);
}

let Alter = new box();
document.querySelector('#btn-1').addEventListener('click', Alter.show);

function box() {

    this.show = function() {
        let w = window.innerWidth;
        let h = window.innerHeight;

        let box = document.querySelector('#result');

        box.style.display = "block";
        box.style.top = "200px";
        box.style.left = (w / 2) - (550 * .5) + "px";

        document.querySelector('#hd').innerHTML = " NYU Alert!<img src='images/im.png' onclick = 'Alter.wipe()';>";
    }

    this.wipe = function() {
        document.querySelector('#result').style.display = "none";
    }

}

document.querySelector('#btn-1').addEventListener('click', strngInpt);

// the function for input string
function strngInpt() {

    var input = document.querySelector('#inpt1').value.trim();
    let hldr = input.split(" ");
    let cpy = [];

    for (let i = 0; i < hldr.length; i++) {

        if (hldr[i] != " ") {
            hldr[i] = hldr[i].charAt(0).toUpperCase() + hldr[i].substring(1).toLowerCase();
            cpy.push(hldr[i]);
        }
    }

    let ans1 = cpy.sort();
    document.querySelector('#rsps1').value = ans1.join(" ");
}
document.querySelector('#btn-1').addEventListener('click', grdStd);

///THe function with soted, average and grades
function grdStd() {
    document.querySelector('#btn-1').removeEventListener('click', grdStd);
    let input = document.querySelector('#inpt2').value.trim();
    let grd = input.split(" ");
    let cpGrd = [];
    for (let i = 0; i < grd.length; i++) {
        if (grd[i] != " ") cpGrd.push(grd[i]);
    }

    let sorted = cpGrd.sort(function(a, b) { return a - b });

    let higher = sorted[sorted.length - 1];
    document.querySelector('#rsps5').value = higher;

    let lower = sorted[0];
    document.querySelector('#rsps6').value = lower;

    let sum = 0;

    for (let i = 0; i < sorted.length; i++) {
        sum += parseInt(sorted[i]);
    }
    console.log(sum);
    let average = Math.floor((sum / sorted.length));

    if (average >= 93) {
        document.querySelector('#rsps4').value = "A";
        fSound.play();

    } else if (average >= 80 && average <= 93) {
        document.querySelector('#rsps4').value = "B";
        sSound.play();

    } else if (average >= 70 && average <= 80) {
        document.querySelector('#rsps4').value = "C";

    } else if (average >= 60 && average <= 70) {
        document.querySelector('#rsps4').value = "D";

    } else {
        document.querySelector('#rsps4').value = "F";
        tSound.play();
    }

    document.querySelector('#rsps3').value = average;
    document.querySelector('#rsps2').value = sorted.join("-");
}

document.querySelector('#btn-2').addEventListener('click', dllAll);

function dllAll() {
    document.querySelector('#inpt1').remove();
    document.querySelector('#inpt2').remove();

}