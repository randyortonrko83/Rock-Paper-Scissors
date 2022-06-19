

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

           computerSelection = computerPlay();
       let player = playerSelection.toLowerCase();
       let player1 = player.substr(0,1).toUpperCase();
           player = player.substr(1);
       let final = player1 + player;
       
      
       
       if ((final === computerSelection)) {
         console.log(`You chose ${final}`);
         console.log(`Computer chose ${computerSelection}`); 
         return "It is a draw"
       } else if (((final === "Rock" && computerSelection ===  "Scissors") && (final === "Rock" && computerSelection === "Scissors"))) {
         console.log(`You chose ${final}`);
         console.log(`Computer chose ${computerSelection}`);
         return "Rock breaks Scissors, you win!"
       } else if ((final === "Scissors" && computerSelection ===  "Rock") && (final === "Scissors" && computerSelection === "Rock")) {
         console.log(`You chose ${final}`);
         console.log(`Computer chose ${computerSelection}`);
         return "Rock breaks Scissors, you lose!"
       } else if ((final === "Scissors" && computerSelection ===  "Paper") && (final === "Scissors" && computerSelection === "Paper")) {
         console.log(`You chose ${final}`);
         console.log(`Computer chose ${computerSelection}`);
         return "Scissors cuts paper, you win!"
       } else if ((final === "Paper" && computerSelection === "Scissors") && (final === "Paper" && computerSelection === "Scissors")) {
         console.log(`You chose ${final}`);
         console.log(`Computer chose ${computerSelection}`);
         return "Scissors cuts paper, you lose!"
       } else if ((final === "Paper" && computerSelection === "Rock") && (final === "Paper" && computerSelection === "Rock")) {
         console.log(`You chose ${final}`);
         console.log(`Computer chose ${computerSelection}`); 
         return "Paper wraps rock, you win!"
       } else if ((final === "Rock" && computerSelection === "Paper") && (final === "Rock" && computerSelection === "Paper")) {
         console.log(`You chose ${final}`);
         console.log(`Computer chose ${computerSelection}`);
         return "Paper wraps rock, you lose!"
       } else { return "No Input" 
      
       };

      
    

      
      
}




function game() {

 let game = playRound(prompt("Enter a value please"));
 

}

game();




