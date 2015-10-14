/*Developed by Nemanja Kolar
Game:Rock,Paper,Scissors
Date:14.09.2015*/

var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare=function(choice1,choice2){
    if(choice1 === choice2){
       return "The result is a tie!.Please make a new choice";
       
        if (choice2 === "rock"){
            return "paper wins";
            }
            else
            return "scissors wins"
       
       if(choice2 === "scissors"){
           return "rock wins";
           }
       else
       return "paper wins";
       
       if(choice1 === "paper"){
           return "paper wins";
           }
       else{
           return "scissors wins";
           }
        }
}

compare(userChoice,computerChoice);
   