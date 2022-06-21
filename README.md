# Rock-Paper-Scissors
 A simple JavaScript code for testing rock-paper-scissors on console log

(i) Created Pseudocode for Rock-Paper-Scissors program for ease of creating the program
(ii) Planning the code by breaking the problem into pieces and testing by deploying function called computerPlay() to bring a random output between "rock" "paper" or "Scissor".
(iii) completed the function computerPlay (the computer brings "rock", "paper" or "scissors" randomly whenever computerPlay() function is called) 
(iv) in process of playRound function where the user inputs rocks, paper or scissor against randomly generated AI opponent computer 
(v) generated a function called playRound which calls computerPlay function(calls random rock, paper, scissors)
(vi) generated a code for making the input of user to convert the string to make the first word capitalized for eg: Rock, Paper, Scissor, irrespective of the input the user types.
(vii) implemented if conditional statement for || (OR) operator to decide the result, the result is unsatisfactory, searching for potential errors
(viii) after a thorough research, seems that the OR operator becomes true when even one of the value is false (for eg: if player entered rock and computer paper then the code ignore the false computer code and execute the wrong code block) so to make things right I tried to employ && (AND) operator and things went smooth, the result is satisfactory, there can be more code optimizations done but that will be for later stage.
(ix) removed playerSelection code inside playRound function to avoid multiple function calls because an error called maximum callstack occured.
(x) Finally able to call return from another function(playRound) from the existing function(game).