<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>


$(document).ready(function() {
       
      
    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z" ];
    var winsCounter = 0;
    var lossesCounter = 0;
    var guesses = 10

    var computerPick = alphabet[Math.floor(Math.random() * alphabet.lenght)];

document.onkeyup = function(event) {
    var userGuess = event.key;
    if(userGuess === computerPick){
        winsCounter++
    }else{
        guesses--
    }
    
    if(guesses === 0){
        losses++
    }

    document.getElementById("#Wins") = "Wins: " + wins;
    document.getElementById("#Losses") = "Losses: " + losses;
    document.getElementById("#Guesses") = "Guesses left: " + guesses;

    }



});
