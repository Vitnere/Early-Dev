/*Developed by:Nemanja Kolar
Program:Objects I-Address Book
Date:23.09.2015*/

var bob = {             //first contact
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {        //second contact
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary]; //arr contacts

function printPerson(person) {  //function for print first and last name
    console.log(person.firstName + " " + person.lastName);
}

function list() {   //function for listing all contact
    var contactsLength = contacts.length;
    for (var i = 0; i < contactsLength; i++) {
    	printPerson(contacts[i]);
	}
}


var search=function(lastName){  //Function for searching contacts by some parametar
var contactsLength = contacts.length;
    for (var i = 0; i < contactsLength; i++)
    if(contacts[i].lastName===lastName){
     printPerson(contacts[i]);
    }
    }
    
 search("Jones"); //calling search function
     
    var add=function(firstName, lastName, email, phoneNumber){
    contacts[contacts.length] = {
    firstName: firstName,
    lastName: lastName, //add contact functon
    email: email,
    phoneNumber: phoneNumber    
}
        
        }
        
add("Nemanja","Kolar",065217621,"nemanjakolar@gmail.com");
list();
