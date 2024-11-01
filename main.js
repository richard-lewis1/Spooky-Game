// this main function starts the whole game and it is callef at the end of the code
function main() {
    startGame();
}

let name;
let answer1;
// this function asks for the users name and give them their first choice
function startGame() {
    let name = prompt("what is your name?");
    alert(`welcome ${name}! to the spooky haunted house`);
    let answer1=prompt("You enter the dark, empty, and mysterious mansion, do you want to go to the basement or the attic?");
    if (answer1=="basement") {
    // if the answer is basement then the function "basement" is called
        basement();
    } else if (answer1=="attic") {
        attic();
    } else {
        wrong();
    }
    
}
//first choice that results in game over
function basement(){
    alert("Oops! There was an evil ghost and you died");
}

//gives the user another prompt to choose between opening or not
let answer2;
function attic(){
    let answer2=confirm('As you enter the attic, you notice an old clock with a weird aura, approach it?');
    if (answer2==false) {
    
        closed();
    } else if (answer2==true) {
        open();
    } else {
        wrong();
    }

//this function results in the second death    
function closed() {
    alert("As you walked away from the ghost a zombie snuck up behind you and ate your BRAIN!");
}


let answer3;
// the user moves on and gets another prompt
function open() {
    let answer3 = prompt('Casper the ghost pops out and tells you to follow his lead, do you follow?');
    if (answer3=="no") {
        stay();
    } else if (answer3=="yes") {
        follow();
    } else {
        wrong();
    }
}


function follow() { 
    alert('You followed Casper. But it was a set up and he ate you');
    }
}


let answer4;
function stay() {
    let answer4 = prompt('you refused to follow Caspers directions and stayed in the attic, you now can choose between going into the basement or going into the living room');
    if (answer4 == 'living room') {
        LR();
    } else if (answer4 == 'basement') {
        basement2();
    } else {
        wrong();
    }
}

function LR() {
    alert("You went into the living room and met Pennywise, he proceeds to  bite you in half. You Died!");
}


let answer5;
function basement2() {
    let answer5 = confirm('you find a key in the basement and you take it');
    if (answer5 == true) {
        takeKey();
    } else if (answer5 == false) {
        notTakeKey();
    } else {
        wrong();
    }
}
let answer6;
function takeKey() {
    let answer6 = prompt("You have two options presented to you, try unlocking the basement door or try unlocking the living room door")
    if (answer6 == "basement") {
        basement3();
    } else if (answer6 == "living room") {
        LR2();
    } else {
        wrong();
    }
}   

function notTakeKey() {
    alert('You didnt take the key for some reason and you died, unable to escap the mansion');
}

function basement3() {
    alert('You unlocked the basement door with the key and Freddy Kruger comes out and eats your face!!!');
}

function LR2() {
    alert('You use the key to unlock the living room door, and the door takes you outside, free from the horrors of the house!');
    alert('congradulations you have beaten the game!!!');
}


function wrong() {
    alert('You typed somthing wrong! reload and try again');
}



main();


//calls the startGame function which starts the whole game