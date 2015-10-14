$(document).ready(function(){
    $('div').mouseenter(function(){ //div name of element
    $('div').fadeTo('fast',1);		//fast speed of fade away,opacity
    });
    $('div').mouseleave(function(){
        $('div').fadeTo('fast',0.5);
        }); 
    });
