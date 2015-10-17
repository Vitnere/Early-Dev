/*Developed by:Nemanja Kolar
Name:Contact list
Date:20.09.2015*/

var friends=new Object();
friends.bill=new Object();
friends.steve=new Object();

friends.bill.firstName="Bill";
friends.bill.lastName="Stouk";
friends.bill.number="7";
friends.bill.address=['Zmaj Jovina','7','Prijedor'];

friends.steve.firstName="Steve";
friends.steve.lastName="Branbi";
friends.steve.number="17";
friends.steve.address=['Pere Krece','2','Banja Luka'];

var list=function(friends){
    for(var firstName in friends)
   console.log("Moguci kontakti:" + firstName);
   console.log("                        ");
}

var search=function(name){
for(var key in friends){
if(friends[key].firstName===name){
console.log("First name: " + friends[key].firstName);
console.log("Last name: " + friends[key].lastName);
console.log("ID: " + friends[key].number);
console.log("Address: " + friends[key].address[0]+ " "+ friends[key].address[1]+"," + friends[key].address[2]);
return;
}

}
    }

list(friends);
search("Steve");