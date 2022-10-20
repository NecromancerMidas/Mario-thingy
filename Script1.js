// JavaScript source code




let bowserHp = 300; //hp section
let charHp = 0;
let player = 'mario';

function selectPlayer(playerName) {
    document.getElementById('bowser').innerHTML = "Attack " + playerName;
    document.getElementById('selectedChar').src = playerName + '.png';
    player = playerName;
    regenLife();

}
function regenBowser() {
    bowserHp = 300;
    document.getElementById("bowserHp").innerHTML = bowserHp + 'HP';
}
function regenLife() {
    if (player === 'mario') {
        charHp = 50;
    }
    else if (player === 'peach') {
        charHp = 40;
    }
    else if (player === 'superLuigi') {
        charHp = 2000;
    }
    else if (player === 'yoshi') {
        charHp = 200;
    }
    else if (player === 'toad') {
        charHp = 10;
    }
    else {
        charHp = 200;
    }
    document.getElementById("charHp").innerHTML = charHp+ 'HP'
}
function attackOpponent(element) {
    if (player === 'superLuigi') {
        superLuigiAttacks();
    }

    else if (element.id === 'char') {
        charAttacks();
    }
    else {
        bowserAttacks(player);
    }
    
}
function charAttacks() {
    bowserHp -= 10;
    document.getElementById("bowserHp").innerHTML = bowserHp + 'HP'
}
function superLuigiAttacks() {
    bowserHp -= 300;
    document.getElementById("bowserHp").innerHTML = bowserHp + 'HP'
}
function bowserAttacks(playerName) {
    if (player === 'superLuigi') {
        charHp -= 1;
        document.getElementById("charHp").innerHTML = charHp + 'HP'
    }
    else bowserAttack(playerName) {
        charHp -= 20;
        document.getElementById("charHp").innerHTML = charHp + 'HP'
    }
}
