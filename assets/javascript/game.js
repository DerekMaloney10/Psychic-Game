
$(document).ready(function() {
       
      
    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z" ];
    var winsCounter = 0;
    var lossesCounter = 0;
    var guesses = 10
    var sofar = []

    var computerPick = alphabet[Math.floor(Math.random() * alphabet.length)];

    function resetgame(){
        guesses = 10
        computerPick = alphabet[Math.floor(Math.random() * alphabet.length)];
        sofar = []
    }
    
document.onkeyup = function(event) {
    var userGuess = event.key;
    if(userGuess === computerPick){
        winsCounter++ 
        resetgame()
    }else{
        guesses--
        sofar.push (event.key)        
    }
    
    if(guesses === 0){
        lossesCounter++
        resetgame()
    }

    document.getElementById("Wins").textContent = "Wins: " + winsCounter;
    document.getElementById("Losses").textContent = "Losses: " + lossesCounter;
    document.getElementById("Guesses").textContent = "Guesses left: " + guesses;
    document.getElementById("sofar").textContent = "Guesses so far: " + sofar.join();
    }



});
