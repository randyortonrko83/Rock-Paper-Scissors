
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

