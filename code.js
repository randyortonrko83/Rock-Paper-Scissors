
function computerPlay() {

   let game = ["Rock", "Paper", "Scissors"];

    let computer = Math.floor(Math.random()*game.length);
    

   if (computer === 0) {

      return("Rock");

   } else if (computer === 1) {

      return("Paper");

   } else (computer === 2); {

      return("Scissors");

   }

}

computerPlay();

function playRound(playerSelection, computerSelection) {
       playerSelection = prompt("Enter a Value!");
       let player = playerSelection.toLowerCase();
       let player1 = player.substr(0,1).toUpperCase();
           player = player.substr(1);
       let final = player1 + player;
       
       let computer = computerSelection;

       

      
       

      
      
}


const computerSelection = computerPlay();
playRound();


