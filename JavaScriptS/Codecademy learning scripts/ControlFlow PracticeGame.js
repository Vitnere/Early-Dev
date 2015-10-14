/*Developed by:Nemanja Kolar
Game:Kill a troll
Date:17.09.2015*/

var user=prompt("Do you wana play").toUpperCase();
var user1=true;
var user2=false;

switch(user){

case 'TRUE' && 'FALSE':
      if(user1==1&&user==0){
    console.log("Thats cool");
        }
        else{
     console.log("Thats not cool")
            }
            
    if(user==1||user==1){
    console.log("Thats cool,too");
    }
    else{
    console.log("Thats not cool,too");    
        }
    break;
            
case 'YES':
console.log("Das ist schön.Lass uns spielen(That is nice.Lets play)");
break;

case 'NO':
console.log("Sorry for hear that.See you next time");
break;

case 'MAYBE':
console.log("Dont be crazy.Game is fun,lets play")
break;

default:
console.log("Please give a corect answer");
break;
}