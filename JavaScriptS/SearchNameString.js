/*jshint multistr:true */

var text="Sam is Vit";

var myName="Sam";

var hits=[];

for(var i=0;i<text.length;i++){
    if(text[i]==='S'){
            for(var j=i;j<i+myName.length;
            j++){
            hits.push(text[j]);
            }
        }
    }
    
    if(hits===0){
console.log("Your name wasn't found!");}
    else{
        console.log(hits);
        }