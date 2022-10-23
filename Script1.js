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
        bowsertrikes();
        bowserfiresound();

    }
    document.getElementById("charHp").innerHTML = charHp + 'HP';
}
function buttonOfDoom() {
    var link = document.createElement("a")
    link.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    link.target = "_blank"
    link.click()
}
function bowsertrikes() {

    document.getElementById("bowserimg").style.backgroundPosition = '315px 0px';
    timeoutBowserUnStrikes();
}
let timeout;
function timeoutBowserUnStrikes() {
    timeout = setTimeout(bowserUnStrikes, 500);
}
function bowserUnStrikes() {
    document.getElementById("bowserimg").style.backgroundPosition = '0px 0px';
    
}

function bowserfiresound() {
    var audio = new Audio("audio/bowserfire.mp4");
    audio.volume = 0.1;
    audio.play();

}