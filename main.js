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
        stuck();
    } else if (answer3=="yes") {
        follow();
    }
}

// this function results in the third death
function stuck() {
    alert('you denied Caspers help and let you in the attic, without Caspers help you are unable to escape and die in the depths of the mansion');
}



// end of the gamef
    function follow() { 
    alert("Casper the ghost leads you out of the haunted house!");
    alert("Congrats you won!")
    }
}
main();


//calls the startGame function which starts the whole gamemain();