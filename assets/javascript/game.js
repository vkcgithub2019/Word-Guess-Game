// Javascript codes

var $ = function (id) {
    return document.getElementById(id);
}

//creating array and initializing
var game = ["Big","Bruce","Lee","Boss","Fist","Fury","Green","Hornet","Enter","Dragon","Return","Way","Game","Death","Linda",""]
var choice = Math.floor(Math.random()*7);
var answer = game[choice];
var myLength = answer.length;
var win = myLength;
var letters = answer.split('');
var attemptsLeft= 10;
var output = "-";
var userLetter = "-";

alert(answer);

var setup = function()
{
    for (var i=0; i< answer.length; i++)
   {
     display[i] = "-";
     output = output + display[i];
}

document.getElementById("game").innerHTML = output;
output = "";
}

window.onload = function() {
    setup();
}

var submit = function()
{
    output = "";
    userLetter=$("letter").value;
    $("letter").value = "";

    for (var c=0; c<answer.length; c++) {
        alert(letters[c]);
        if (userLetter.toUpperCase() == letters[c])
        {
            display[c] = userLetter.toUpperCase();
            win--;
        }
        output = output + display[c] + "";
    }
document.getElementById("game").innerHTML = output;
output = "";
attemptsLeft--;
if (win <1) {
        document.getElementById("guesses").innerHTML = "You Win!!";
}
else if(attemptsLeft <1) {
    document.getElementById("guesses").innerHTML = "You Lose!!";
}
else 
{
    document.getElementById("guesses").innerHTML = "You have " + attemptsLeft + "guesses left";


}
}
