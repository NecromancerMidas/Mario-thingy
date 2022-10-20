// JavaScript source code


let bowserHp = 300; //hp section
let charHp = 0;
let player = 'Mario';

function selectPlayer(playerName) {
    document.getElementById('bowser').innerHTML = "Attack " + playerName;
    document.getElementById('selectedChar').src = 'img/' + playerName + '.png';
    player = playerName;
    regenLife();

}
function regenBowser() {
    bowserHp = 300;
    document.getElementById("bowserHp").innerHTML = bowserHp + 'HP'
}
function regenLife() {
    if (player === 'Mario') {
        charHp = 50;
    }
    else if (player === 'Peach') {
        charHp = 40;
    }
    else if (player === 'Super Luigi') {
        charHp = 2000;
    }
    else if (player === 'Yoshi') {
        charHp = 200;
    }
    else if (player === 'toad') {
        charHp = 10;
    }
    else {
        charHp = 200;
    }
    document.getElementById("charHp").innerHTML = charHp + 'HP'
}
function attackOpponent(element) {
    if (element.id === 'char') {
        charAttacks();
    }
    else{
        bowserAttacks(player);
    }
}
function charAttacks() {
    if (player === 'Mario') {
        bowserHp -= 10;
    }
    else if (player === 'Peach') {
        bowserHp -= 5;
    }
    else if (player === 'Yoshi') {
        bowserHp -= 30;
    }
    else if (player === 'Super Luigi'){
        bowserHp -= 300;
}
     document.getElementById("bowserHp").innerHTML = bowserHp + 'HP';
    }
  
function bowserAttacks(playerName) {
    if (player === 'Super Luigi') {
        charHp -= 1;
    }
    else {
        charHp -= 20;
    }
    document.getElementById("charHp").innerHTML = charHp + 'HP';
}
