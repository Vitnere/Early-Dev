/*
* This plugin is built for jQuery library 
* @author Dragan Micic Bubo <d.micic@micronanostudio.com>    
* @link http://www.micronanostudio.com/freestuff/endlessmenu
* @copyright Copyright (c) Micronano Studio
*
* mnsEndlessMenu is menu that allows you to add as many as you want levels and sublevels to your menu, 
* and also allows u to choose is that vertical or horizontal navigation menu
* JSCRIPT usage: $("#someID").mnsEndlessMenu();
* HTML markup:    
*  <div id="someID">
*     <ul>
*         <li><a href="#">Zero Level</a></li>
*         <li><a href="#">Zero Level</a>
*             <ul>
*             <li><a href="#">First Level</a>
*                     <ul>
*                         <li><a href="#">Second Level</a></li>
*                     </ul>
*                 </li>
*             </ul>
*         </li>
*     </ul>
* </div>
* and so on, and on levels as many as you want.
*/

function setSameHeight(){
	var h=0;
	$(".oneThirdBox",".whiteBox").each(function(index, element) {
        var th = $(this).height();
		h=(th>h)?th:h;
    });
	$(".oneThirdBox",".whiteBox").height(h);
}
function TextTicker(container){	
	try
	{
		var ticker_holder = $('.ticker-holder').get(0);
		var ticker_text = $('.ticker').get(0);
		var ticker_pos = ticker_text.parentNode.offsetWidth;
		var ticker_data = $(ticker_holder).html();
		$(ticker_text).parent().html('<marquee scrollamount="4" scrolldelay="0">' + ticker_data + '</marquee>');
		$('#'+container).hover
		(
			function() { $('marquee', this).get(0).stop();  },
			function() { $('marquee', this).get(0).start(); }
		);	
	}
	catch (o) {}	
}

(function($){
    $.fn.realHover = function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY;};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev]);}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev]);};var handleHover=function(e){var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);}if(e.type=="mouseenter"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob);},cfg.timeout);}}};return this.bind('mouseenter',handleHover).bind('mouseleave',handleHover);};    

    $.fn.mnsEndlessMenu = function(options){
        var defaults = {
            //------------- general properties ------------------//
            mode:"horizontal",
            ulLeft:false,
            alone:false,            
            hoverHold:300,                                
            speed:"fast",
            decoration:false,
            boxShadow:.45,
            shadowSize:3,            
            clickEvent:false,
            rightPos:false,
            zIndex:4,
            textDecoration:"none",
            textDecorationHover:"none",
            imgWidth:10,
            imgHeight:10,
            imgRight:3,
            topClass:"arrowDown",
            subClass:"arrowLeft",
            ulTop:7,            
            liMargin:3,
            //------------- top element properties ------------------//            
            topWidth:"auto",
            topHeight:"auto",
            topPadTop:5,
            topPadBottom:6,
            topPadLeft:10,
            topPadRight:15,
            topFontSize:15,
            topFontWeight:'normal',
            topColor:"whitesmoke",            
            topHoverColor:"blue",
            topAlign:"left",
            topBg:"transparent",
            topHoverBg:"whitesmoke",            
            topTextAlpha:1,
            topTextShadow:0,
            topTextShadowColor:"white",
            topBgAlpha:1,
            topBorder:true,
            topBorderWidth:0,
            topBorderRounded:3,        
            topBorderColor:"black",
            //------------- sub element properties ------------------//            
            subWidth:150,
            subHeight:"auto",
            subPadTop:3,
            subPadBottom:3,
            subPadLeft:10,
            subPadRight:15,
            subFontSize:15,
            subFontWeight:'normal',
            subColor:"blue",    
            subHoverColor:"whitesmoke",
            subAlign:"left",			
            subBg:"whitesmoke",            
            subHoverBg:"mediumslateblue",                        
            subTextAlpha:1,
            subBgAlpha:1,
            subBorder:true,            
            subBorderWidth:0,
            subBorderRounded:0,
            subBorderColor:"black"              
        }
        var options = $.extend(defaults, options);

        var obj = $(this).css({'position':'relative','z-index':options.zIndex,'display':'block'});
        //adds div to clear all floats        
        $('<div style="clear:both;height:0;"></div>').appendTo(obj);

        //------------ GENERAL VARIABLES ------------//
        //sets line height according to font size
        var lineHeight = (options.topHeight!="auto") ? options.topHeight : options.topFontSize + 3;

        //ckdsck
        var rgbOpen = "rgba("; 
        var rgbTopTextClose = (options.topTextAlpha > 0) ? "," + options.topTextAlpha + ")" : ")";
        var rgbTopBgClose = (options.topBgAlpha > 0) ? "," + options.topBgAlpha + ")" : ")";              

        var rgbSubTextClose = (options.subTextAlpha > 0) ? "," + options.subTextAlpha + ")" : ")";
        var rgbSubBgClose = (options.subBgAlpha > 0) ? "," + options.subBgAlpha + ")" : ")";
        //check is browser IE version smaller then IE9
        if($.browser.msie && $.browser.version < 9.0){
            rgbOpen = "rgb(";
            rgbTopTextClose =")";
            rgbTopBgClose =")";
            rgbSubTextClose =")";
            rgbSubBgClose =")";
            
        }
        var topTextShadow ="";
         
        if(options.topTextShadow > 0){
            var topShadowColor = (options.topTextShadowColor[0] == '#') ?  rgbOpen + hexToRgb(options.topTextShadowColor) + rgbTopBgClose : rgbOpen + colourNameToRgb(options.topTextShadowColor) + rgbTopBgClose;  
            topTextShadow = "1px 1px " + options.topTextShadow + "px " + topShadowColor;
        } 
              
        //color settings for top li > a font color and background color
        var topColor = (options.topColor[0] == '#') ?  rgbOpen + coluourToRgb(options.topColor) + rgbTopTextClose : rgbOpen + colourNameToRgb(options.topColor) + rgbTopTextClose;        
        var topHoverColor = (options.topHoverColor[0] == '#') ?  rgbOpen + coluourToRgb(options.topHoverColor) + rgbTopTextClose : rgbOpen + colourNameToRgb(options.topHoverColor) + rgbTopTextClose;
        var topBg = (options.topBg[0] == '#') ?  rgbOpen + coluourToRgb(options.topBg) + rgbTopBgClose : rgbOpen + colourNameToRgb(options.topBg) + rgbTopBgClose;        
        topBg = (options.topBg == 'transparent') ?  options.topBg :topBg;
               
        var topHoverBg = (options.topHoverBg[0] == '#') ?  rgbOpen + coluourToRgb(options.topHoverBg) + rgbTopBgClose : rgbOpen + colourNameToRgb(options.topHoverBg) + rgbTopBgClose;
        
        topHoverBg = (options.topHoverBg == 'transparent') ?  options.topHoverBg :topHoverBg;       
        //color settings for sub li > a font color and background color
        var subColor = (options.subColor[0] == '#') ?  rgbOpen + hexToRgb(options.subColor) + rgbSubTextClose : rgbOpen + colourNameToRgb(options.subColor) + rgbSubTextClose; 
        var subHoverColor = (options.subHoverColor[0] == '#') ?  rgbOpen + hexToRgb(options.subHoverColor) + rgbSubTextClose : rgbOpen + colourNameToRgb(options.subHoverColor) + rgbSubTextClose;
        var subBg = (options.subBg[0] == '#') ?  rgbOpen + hexToRgb(options.subBg) + rgbSubBgClose : rgbOpen + colourNameToRgb(options.subBg) + rgbSubBgClose;
        subBg = (options.subBg == 'transparent') ?  options.subBg :subBg;
        var subHoverBg = (options.subHoverBg[0] == '#') ?  rgbOpen + hexToRgb(options.subHoverBg) + rgbSubBgClose : rgbOpen + colourNameToRgb(options.subHoverBg) + rgbSubBgClose;
        subHoverBg = (options.subHoverBg == 'transparent') ?  options.subHoverBg :subHoverBg;
         
        //------------ GENERAL STYLE ------------//
        $("*",obj).css({'margin':'0','padding':'0','z-index':options.zIndex});
        $("a",obj).css({
            'display':'block','padding-left':options.topPadLeft,'padding-right':options.topPadRight,'padding-bottom':options.topPadBottom,'padding-top':options.topPadTop, 
            'font-size':options.topFontSize,'line-height':lineHeight+'px','text-align':options.topAlign,'text-decoration':'none'});            
        //$("ul", obj).css({ 'list-style': 'none', 'display': 'block', 'position': 'absolute', 'z-index': options.zIndex, 'top': options.ulTop + 'px' });
        $("ul", obj).css({ 'list-style': 'none', 'display': 'block', 'position': 'absolute', 'z-index': options.zIndex, 'top': options.ulTop + 'px','overflow': 'visible'});

        $("li",obj).css({'list-style':'none','display':'block','float':'left','position':'relative','margin-right':options.liMargin});

        if(options.mode == "horizontal"){
            //------------ UL STYLE FOR SUB ELEMENTS ------------//
            var subUlTopPosition = lineHeight + options.topPadTop + options.topPadBottom +'px'; 
            var subUlWidth = options.subWidth + options.subPadLeft + options.subPadRight;
            $("ul li ul",obj).css({'position':'absolute','left':'0px','top':subUlTopPosition,'width':subUlWidth});
            if(options.boxShadow != 0) $("ul li ul",obj).css({'box-shadow':'1px 1px ' + options.shadowSize + 'px rgba(0,0,0,' + options.boxShadow + ')'});

            //sets first sub ul position
            $("ul li ul li ul",obj).css({'position':'absolute','left':options.subWidth+options.subPadRight+options.subPadLeft,'top':'0'});                
            $("ul li ul li",obj).css({'margin-right':'0'});

            //------------ LINK STYLE FOR TOP ELEMENTS ------------//    
            $("ul li a",obj).css({
                'width':options.topWidth,'height':options.topHeight,'overflow':'hidden','background-color':topBg,
                'color':topColor,'text-align':options.topAlign,'font-size':options.topFontSize+'px','font-weight':options.topFontWeight,
                'text-shadow':topTextShadow,'border-radius':options.topBorderRounded});
                
            //sets rounded border for sub elements
            if(options.topBorderRounded){
                $("ul li ul a",obj).css({'border-radius':0});
            }
            
            $("ul li a",obj).hover(
            function(){$(this).css({'color':topHoverColor,'background-color':topHoverBg});$('span',this).css({'opacity':'1'});},
            function(){$(this).css({'color':topColor,'background-color':topBg});$('span',this).css({'opacity':options.imgOpacity});}
            );

            //------------ LINK STYLE FOR SUB ELEMENTS ------------//                
            $("ul li ul li a",obj).css({
                'width':options.subWidth,'overflow':'hidden','background-color':subBg,
                'color':subColor,'text-align':options.subAlign,'font-size':options.subFontSize+'px','font-weight':options.subFontWeight,
                'padding-left':options.subPadLeft,'padding-right':options.subPadRight,'padding-bottom':options.subPadBottom,'padding-top':options.subPadTop});
            
            //sets rounded border for sub elements
            if(options.subBorderRounded){
                $("li",obj).has('ul').each(function(){
                    var ulc = $('ul',this).eq(0);                
                    $(ulc).css({'border-radius':options.subBorderRounded});
                    $('a',ulc).css({'border-radius':'0'});
                    $('a',ulc).first().css({'border-top-left-radius':options.subBorderRounded,'border-top-right-radius':options.subBorderRounded});
                    $('a',ulc).last().css({'border-bottom-left-radius':options.subBorderRounded,'border-bottom-right-radius':options.subBorderRounded}); 
                });                                        
            }
            
            $("ul li ul li a",obj).hover(
            function(){$(this).css({'color':subHoverColor ,'background-color':subHoverBg});},
            function(){$(this).css({'color':subColor,'background-color':subBg});
            });

            //------------ SETS IMAGES FOR LINKS ------------//
            //adds span at all levels of menu where menu item has subitems
            $("ul li",obj).has('ul').each(function(){
                var lf=$("a",this).eq(0).addClass(options.topClass);
                var spanTop = (lf.outerHeight(true)- options.imgHeight+1)/2+'px';

                $('<div></div>').css({
                    'display':'block','width':options.imgWidth,'height':options.imgHeight,'position':'absolute','top':spanTop,'right':'3px','z-index':'1001'}).appendTo(lf);    
                //'background-image':options.imgDown,'background-position':'left top','background-repeat':'no-repeat',
            });
            //changes image at sub levels of menu where menu item has subitems
            $("ul li ul li",obj).has('ul').each(function(){
                var lf=$("a",this).eq(0).addClass(options.subClass);;
                //$('span',lf).css({'background-image':options.imgLeft});
            });
        }

        //------------ HIDES UL AT SUB LEVELS ------------//            
        $("li",obj).has('ul').each(function(index, element) {
            $("ul",this).hide(10);
        });

        //------------ FUNCTIONS FOR SHOW/HIDE SUB ELEMENTS ------------//
        function LiOver(){$(this).children("ul").eq(0).show(options.speed);}                
        function LiOut(){$(this).children("ul").eq(0).hide(options.speed);}         

        //variable for real hover function with timeout in miliseconds and 2 functions for over and out event
        var doHover = {over:LiOver,timeout:options.hoverHold,out:LiOut};

        //mode horizontal    
        if(options.mode == "horizontal"){                                                            
            $("li",obj).has('ul').realHover(doHover);            
        }
        //mode vertical
        else if(options.mode == "vertical"){                                                            
            $("li",obj).has('ul').realHover(doHover);                                        
        }
        //mode buttons
        else if(options.mode == "buttons"){        
            if(options.topBorderRounded > 0) {
                //alert(options.topBorderWidth);  
                if(options.alone)$("ul li a",obj).eq(0).css({'border-radius':options.topBorderRounded,'border':'solid '+ options.topBorderWidth +'px rgb(' + options.topBorderColor + ')'});
                else{
                    $("ul li a",obj).css({'border':'solid '+ options.topBorderWidth +'px rgb(' + options.topBorderColor + ')','border-right':'none'});
                    $("ul li a",obj).first().css({'border-bottom-left-radius':options.topBorderRounded,'border-top-left-radius':options.topBorderRounded});

                    var lic = $("ul li",obj).has('ul');
                    //alert($('a',lic).first().text());
                    $(" a",lic).first().css({'border-bottom-right-radius':options.topBorderRounded,'border-top-right-radius':options.topBorderRounded,'border-right':'none',
                        'border-right':'solid '+ options.topBorderWidth +'px rgb(' + options.topBorderColor + ')'});
                    $("ul li a",obj).last().css({'border-bottom-right-radius':options.topBorderRounded,'border-top-right-radius':options.topBorderRounded,
                        'border-right':'solid '+ options.topBorderWidth +'px rgb(' + options.topBorderColor + ')'});

                    if( $(" a",lic).length > 1)("ul li a",lic).last().css({'border-radius':'0'});                            
                }
            }

            if(options.topBorderWidth > 0){
                $("ul li ul",obj).css({'border':'solid '+ options.topBorderWidth +'px rgb(' + options.topBorderColor + ')','border-radius':options.topBorderRounded});
                $("li",obj).css({'margin-right':'0'});                
            }

            $("ul li",obj).has('ul').each(function(){
                var ulc = $('ul',this).eq(0);
                $(ulc).css({'border-radius':options.subBorderRounded}); 
                if(options.subBorderWidth>0)$('a',ulc).css({'border':'solid '+ options.subBorderWidth +'px rgb(' + options.subBorderColor + ')'});
                else $('a',ulc).css({'border':'none'});
                $('a',ulc).first().css({'border-top-left-radius':options.subBorderRounded,'border-top-right-radius':options.subBorderRounded});
                $('a',ulc).last().css({'border-bottom-left-radius':options.subBorderRounded,'border-bottom-right-radius':options.subBorderRounded});
            });                

            if(options.subBorderWidth > 0) $("ul li ul",obj).css({'border':'solid '+ options.subBorderWidth +'px rgb(' + options.subBorderColor + ')'});

            if(options.ulLeft){
                var fli = $("ul li",obj).width();
                var ful = $("ul li ul",obj).width();                
                $("ul li ul",obj).css({'left':fli-ful});                     
            }

            //------------ EVENTS FOR SHOW/HIDE SUB ELEMENTS ------------//                        
            if(options.clickEvent){
                var lic = $("li",obj).has('ul');
                $("a",lic).click(function(){
                    if($(lic).children("ul").eq(0).is(":visible")) $(lic).children("ul").eq(0).hide(options.speed);
                    else  $(lic).children("ul").eq(0).show(options.speed);
                });
            } 
            else $("li",obj).has('ul').realHover(doHover);                                        
        }

    };

    function hexToRgb(hexStr){
        //alert('uslo');
       //if(hexStr == "#f0f8ff") alert(hexStr);
        //note: hexStr should be #rrggbb
        var hex = parseInt(hexStr.substring(1), 16);
        //alert(hex);  
        var r = (hex & 0xff0000) >> 16;
        var g = (hex & 0x00ff00) >> 8;
        var b = hex & 0x0000ff;                
        return [r, g, b]; 
       /* var rgb = parseInt( hexStr.match(/[a-f\d]{6}/gi), 16);

       return[
           ( rgb >> 16 ) & 255,
           ( rgb >> 8 ) & 255,
           rgb & 255
       ]*/
      
       /* var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexStr);
        var r = parseInt(result[1], 16);
        var g = parseInt(result[2], 16);
        var b = parseInt(result[3], 16);
        //alert(r+ '-' +g+'-' +b);     
        return [r, g, b]; */               
    } 
    function coluourToRgb(colour){
        return hexToRgb(colour);
    }

    function colourNameToRgb(colour){
        var colours = {"aliceblue":"#f0f8ff","antiquewhite":"#faebd7","aqua":"#00ffff","aquamarine":"#7fffd4","azure":"#f0ffff",
            "beige":"#f5f5dc","bisque":"#ffe4c4","black":"#000000","blanchedalmond":"#ffebcd","blue":"#0000ff","blueviolet":"#8a2be2","brown":"#a52a2a","burlywood":"#deb887",
            "cadetblue":"#5f9ea0","chartreuse":"#7fff00","chocolate":"#d2691e","coral":"#ff7f50","cornflowerblue":"#6495ed","cornsilk":"#fff8dc","crimson":"#dc143c","cyan":"#00ffff",
            "darkblue":"#00008b","darkcyan":"#008b8b","darkgoldenrod":"#b8860b","darkgray":"#a9a9a9","darkgreen":"#006400","darkkhaki":"#bdb76b","darkmagenta":"#8b008b","darkolivegreen":"#556b2f",
            "darkorange":"#ff8c00","darkorchid":"#9932cc","darkred":"#8b0000","darksalmon":"#e9967a","darkseagreen":"#8fbc8f","darkslateblue":"#483d8b","darkslategray":"#2f4f4f","darkturquoise":"#00ced1",
            "darkviolet":"#9400d3","deeppink":"#ff1493","deepskyblue":"#00bfff","dimgray":"#696969","dodgerblue":"#1e90ff","darkslateblue":"#483D8B",
            "firebrick":"#b22222","floralwhite":"#fffaf0","forestgreen":"#228b22","fuchsia":"#ff00ff",
            "gainsboro":"#dcdcdc","ghostwhite":"#f8f8ff","gold":"#ffd700","goldenrod":"#daa520","gray":"#808080","green":"#008000","greenyellow":"#adff2f",
            "honeydew":"#f0fff0","hotpink":"#ff69b4",
            "indianred ":"#cd5c5c","indigo ":"#4b0082","ivory":"#fffff0","khaki":"#f0e68c",
            "lavender":"#e6e6fa","lavenderblush":"#fff0f5","lawngreen":"#7cfc00","lemonchiffon":"#fffacd","lightblue":"#add8e6","lightcoral":"#f08080","lightcyan":"#e0ffff","lightgoldenrodyellow":"#fafad2","grey":"#333333",
            "lightgrey":"#d3d3d3","lightgreen":"#90ee90","lightpink":"#ffb6c1","lightsalmon":"#ffa07a","lightseagreen":"#20b2aa","lightskyblue":"#87cefa","lightslategray":"#778899","lightsteelblue":"#b0c4de",
            "lightyellow":"#ffffe0","lime":"#00ff00","limegreen":"#32cd32","linen":"#faf0e6",
            "magenta":"#ff00ff","maroon":"#800000","mediumaquamarine":"#66cdaa","mediumblue":"#0000cd","mediumorchid":"#ba55d3","mediumpurple":"#9370d8","mediumseagreen":"#3cb371","mediumslateblue":"#0271a5",
            "mediumspringgreen":"#00fa9a","mediumturquoise":"#48d1cc","mediumvioletred":"#c71585","midnightblue":"#191970","mintcream":"#f5fffa","mistyrose":"#ffe4e1","moccasin":"#ffe4b5",
            "navajowhite":"#ffdead","navy":"#000080","dnsblue":"#003f8b","dnsbluedark":"#00224b",
            "oldlace":"#fdf5e6","olive":"#808000","olivedrab":"#6b8e23","orange":"#ffa500","orangered":"#ff4500","orchid":"#da70d6",
            "palegoldenrod":"#eee8aa","palegreen":"#98fb98","paleturquoise":"#afeeee","palevioletred":"#d87093","papayawhip":"#ffefd5","peachpuff":"#ffdab9","peru":"#cd853f","pink":"#ffc0cb","plum":"#dda0dd","powderblue":"#b0e0e6","purple":"#800080",
            "red":"#ff0000","rosybrown":"#bc8f8f","royalblue":"#4169e1",
            "saddlebrown":"#8b4513","salmon":"#fa8072","sandybrown":"#f4a460","seagreen":"#2e8b57","seashell":"#fff5ee","sienna":"#a0522d","silver":"#c0c0c0","skyblue":"#87ceeb","slateblue":"#6a5acd","slategray":"#708090","snow":"#fffafa","springgreen":"#00ff7f","steelblue":"#4682b4",
            "tan":"#d2b48c","teal":"#008080","thistle":"#d8bfd8","tomato":"#ff6347","turquoise":"#40e0d0",
            "violet":"#ee82ee",
            "wheat":"#f5deb3","white":"#ffffff","whitesmoke":"#f5f5f5",
            "yellow":"#ffff00","yellowgreen":"#9acd32"};

        if (typeof colours[colour.toLowerCase()] != 'undefined')        
            return hexToRgb(colours[colour.toLowerCase()]);
        return false;
    }

})(jQuery)