function typwriter(el,text,pos,no){
  ctext=text.substring(0,pos)+(pos%2?' _':'<blink> _</blink>');
  $(el).html(ctext);

if(pos==500){
$(el).html("");
typwriter('#o-meni2',"index.html ",0,2);
}
else
  if(pos==text.length){
   $(el).html(text+"<blink> _</blink>");
   if(text=="index.html "){ 
   $(document.body).css( "background-color", "white" )
   ///$("#result").load("../index.htm");  
    // window.location.href='http://motyar.com/';
    };
    
   }
  else
   window.setTimeout('typwriter("'+el+'","'+text+'",'+(pos+1)+','+1+');',60);
 }
 typwriter('#o-meni',"Moj posao je Internet. Pravim kreativne i unikatne web sajtove i tako pomažem kvalitetnim <br />  biznis idejama da dostignu svoj pun potencijal.Informatika mi je glavni hobi a i posao.  :) <br />Slušam <u>rock</u> i <u>jazz</u>. Omiljeni film mi je '<u>V for Vendetta</u>'",0);
