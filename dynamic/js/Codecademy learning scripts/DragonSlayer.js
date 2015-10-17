/*developed by:Nemanja Kolar
game:Dragon Slayer
date:16.09.2015*/

var slaying=true;
var youHit=Math.floor(Math.random() * 2);
var damageThisRound=Math.floor(Math.random()*5 + 1);
var totalDamage=0;

while(slaying){
    if(youHit=1){
    console.log("You hit the dragon");
    totalDamage += damageThisRound;
    if(totalDamage>=4){
    console.log("You slay the dragon");
    slaying=false;
        }
        }  
    else{
console.log("The dragon wins,you lose");
        }
    slaying=false;
    }