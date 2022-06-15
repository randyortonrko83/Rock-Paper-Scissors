
function computerPlay() {
   let game = ["Rock", "Paper", "Scissors"];
   let Computer = Math.floor(Math.random()*game.length);
   return Computer;
   
}

computerPlay();