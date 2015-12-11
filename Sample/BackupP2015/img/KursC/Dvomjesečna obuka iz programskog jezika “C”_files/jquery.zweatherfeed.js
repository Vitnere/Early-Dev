/**
 * Plugin: jquery.zWeatherFeed
 * 
 * Version: 1.2.0
 * (c) Copyright 2011-2012, Zazar Ltd
 * 
 * Description: jQuery plugin for display of Yahoo! Weather feeds
 * 
 * History:
 * 1.2.0 - Added forecast data option
 * 1.1.0 - Added user callback function
 *         New option to use WOEID identifiers
 *         New day/night CSS class for feed items
 *         Updated full forecast link to feed link location
 * 1.0.3 - Changed full forecast link to Weather Channel due to invalid Yahoo! link
	   Add 'linktarget' option for forecast link
 * 1.0.2 - Correction to options / link
 * 1.0.1 - Added hourly caching to YQL to avoid rate limits
 *         Uses Weather Channel location ID and not Yahoo WOEID
 *         Displays day or night background images
 *
 **/

(function($){

	$.fn.weatherfeed = function(locations, options, fn) {	
	
		// Set plugin defaults
		var defaults = {
			unit: 'c',
			image: true,
			country: false,
			highlow: true,
			wind: true,
			humidity: false,
			visibility: false,
			sunrise: false,
			sunset: false,
			forecast: false,
			link: true,
			showerror: true,
			linktarget: '_self',
			woeid: false
		};  
		var obj = $(this);
		var options = $.extend(defaults, options); 
		var row = 'odd';
		var ie=false;
		
		if($.browser.msie && $.browser.version.substr(0,1)<9){ie=true;}
		// Functions
		return this.each(function(i, e) {
			var $e = $(e);
			
			// Add feed class to user div
			if (!$e.hasClass('weatherFeed')) $e.addClass('weatherFeed');

			// Check and append locations
			if (!$.isArray(locations)) return false;

			var count = locations.length;
			if (count > 10) count = 10;

			var locationid = '';

			for (var i=0; i<count; i++) {
				if (locationid != '') locationid += ',';
				locationid += "'"+ locations[i] + "'";
			}

			// Cache results for an hour to prevent overuse
			now = new Date();

			// Select location ID type
			var queryType = options.woeid ? 'woeid' : 'location';
					
			// Create Yahoo Weather feed API address
			var query = "select * from weather.forecast where "+ queryType +" in ("+ locationid +") and u='"+ options.unit +"'";
			var api = 'http://query.yahooapis.com/v1/public/yql?q='+ encodeURIComponent(query) +'&rnd='+ now.getFullYear() + now.getMonth() + now.getDay() + now.getHours() +'&format=json&callback=?';

			// Send request
			$.ajax({
				type: 'GET',
				url: api,
				dataType: 'json',
				success: function(data) {

					if (data.query) {
			
						if (data.query.results.channel.length > 0 ) {
							
							// Multiple locations
							var result = data.query.results.channel.length;
							for (var i=0; i<result; i++) {
							
								// Create weather feed item
								_process(e, data.query.results.channel[i], options);
							}
						} else {

							// Single location only
							_process(e, data.query.results.channel, options);
						}

						// Optional user callback function
						if ($.isFunction(fn)) fn.call(this,$e);

					} else {
						if (options.showerror) $e.html('<p>Vremenske informacije su nedostupne</p>');
					}
				},
				error: function(data) {
					if (options.showerror) $e.html('<p>Zahtjev za prognozu neuspio</p>');
				}
			});

			// Function to each feed item
			var _process = function(e, feed, options) {
				var $e = $(e);

				// Format feed items
				var wd = feed.wind.direction;
				if (wd>=348.75&&wd<=360){wd="N"};if(wd>=0&&wd<11.25){wd="N"};if(wd>=11.25&&wd<33.75){wd="NNE"};if(wd>=33.75&&wd<56.25){wd="NE"};if(wd>=56.25&&wd<78.75){wd="ENE"};if(wd>=78.75&&wd<101.25){wd="E"};if(wd>=101.25&&wd<123.75){wd="ESE"};if(wd>=123.75&&wd<146.25){wd="SE"};if(wd>=146.25&&wd<168.75){wd="SSE"};if(wd>=168.75&&wd<191.25){wd="S"};if(wd>=191.25 && wd<213.75){wd="SSW"};if(wd>=213.75&&wd<236.25){wd="SW"};if(wd>=236.25&&wd<258.75){wd="WSW"};if(wd>=258.75 && wd<281.25){wd="W"};if(wd>=281.25&&wd<303.75){wd="WNW"};if(wd>=303.75&&wd<326.25){wd="NW"};if(wd>=326.25&&wd<348.75){wd="NNW"};
				var wf = feed.item.forecast[0];
		
				// Determine day or night image
				wpd = feed.item.pubDate;
				n = wpd.indexOf(":");
				tpb = _getTimeAsDate(wpd.substr(n-2,8));
				tsr = _getTimeAsDate(feed.astronomy.sunrise);
				tss = _getTimeAsDate(feed.astronomy.sunset);

				// Get night or day
				if (tpb>tsr && tpb<tss) { daynight = 'day'; } else { daynight = 'night'; }

				// Add item container
				var html = '<div class="weatherItem '+ row +' '+ daynight +'"';
				if (options.image) if(ie){					
				html += '>';}
				else{html += ' style="background-image: url(http://l.yimg.com/a/i/us/nws/weather/gr/'+ feed.item.condition.code + daynight.substring(0,1) +'.png); background-repeat: no-repeat; height:130px;"';
				html += '>';}
		
				// Add item data
				html += '<div class="weatherCity">'+ feed.location.city +'</div>';
				if (options.country) html += '<div class="weatherCountry">'+ feed.location.country +'</div>';
				html += '<div class="weatherTemp">'+ feed.item.condition.temp +'&deg;</div>';
				code =parseInt(feed.item.condition.code);
				html += '<div class="weatherDesc">'+ TranslateToSerbian(code) +'</div>';
				
				
				// Add optional data
				if (options.highlow) html += '<div class="weatherRange">Najveća: <span class="hot">'+ wf.high +'</span>&deg; Najniža: <span class="cold">'+ wf.low +'</span>&deg;</div>';
				if (options.wind) html += '<div class="weatherWind">Vjetar: '+ wd +' '+ feed.wind.speed + feed.units.speed +'</div>';
				if (options.humidity) html += '<div class="weatherHumidity">Vlažnost: '+ feed.atmosphere.humidity +'</div>';
				if (options.visibility) html += '<div class="weatherVisibility">Vidljivost: '+ feed.atmosphere.visibility +'</div>';
				if (options.sunrise) html += '<div class="weatherSunrise">Izlazak Sunca: '+ feed.astronomy.sunrise +'</div>';
				if (options.sunset) html += '<div class="weatherSunset">Zalazak Sunca: '+ feed.astronomy.sunset +'</div>';

				// Add item forecast data
				if (options.forecast) {

					html += '<div class="weatherForecast">';

					var wfi = feed.item.forecast;

					for (var i=0; i<wfi.length; i++) {
						if(ie){
							html += '<div class="weatherForecastItem">';}
						else{
						html += '<div class="weatherForecastItem" style="background-image: url(http://l.yimg.com/a/i/us/nws/weather/gr/'+ wfi[i].code +'s.png); background-repeat: no-repeat;">';}
						html += '<div class="weatherForecastDay">'+ wfi[i].day +'</div>';
						html += '<div class="weatherForecastDate">'+ wfi[i].date +'</div>';
						html += '<div class="weatherForecastText">'+ wfi[i].text +'</div>';
						html += '<div class="weatherForecastRange">High: '+ wfi[i].high +' Low: '+ wfi[i].low +'</div>';
						html += '</div>'
					}

					html += '</div>'
				}

				if (options.link) html += '<div class="weatherLink"><a href="'+ feed.link +'" target="'+ options.linktarget +'" title="Read full forecast">Full forecast</a></div>';

				html += '</div>';
				//html += '<div class="cleaner"></div>';

				// Alternate row classes
				if (row == 'odd') { row = 'even'; } else { row = 'odd';	}
		
				$e.append(html);
			};

			// Get time string as date
			var _getTimeAsDate = function(t) {
		
				d = new Date();
				r = new Date(d.toDateString() +' '+ t);

				return r;
			};

		});
		
	};
	function TranslateToSerbian(code){
		var dec="";
		switch (code){			
			case 0:
			desc ="tornado";
			break;
			case 1:
			desc ="tropska oluja";
			break;
			case 2:
			desc ="uragan";
			break;
			case 3:
			desc ="jaka grmljavina";
			break;
			case 4:
			desc ="grmljavina";
			break;
			case 5:
			desc ="kiša i sneg";
			break;
			case 6:
			desc ="kiša i susnežica";
			break;
			case 7:
			desc ="sneg i susnežica";
			break;
			case 7:
			desc ="ledena rosa";
			break;
			case 9:
			desc ="rosa";
			break;
			case 10:
			desc ="ledena kiša";
			break;
			case 11:
			desc ="pljuskovi";
			break;
			case 12:
			desc ="pljuskovi";
			break;
			case 13:
			desc ="snežni naleti";
			break;
			case 14:
			desc ="lagani sneg";
			break;
			case 15:
			desc ="jak sneg";
			break;
			case 16:
			desc ="sneg";
			break;
			case 17:
			desc ="grad";
			break;
			case 18:
			desc ="susnežica";
			break;
			case 19:
			desc ="prašina";
			break;
			case 20:
			desc ="maglovito";
			break;
			case 21:
			desc ="izmaglica";
			break;
			case 22:
			desc ="dim";
			break;
			case 23:
			desc ="jak vetar";
			break;
			case 24:
			desc ="vetrovito";
			break;
			case 25:
			desc ="hladno";
			break;
			case 26:
			desc ="oblačno";
			break;
			case 27:
			desc ="uglavno oblačno(noć)";
			break;
			case 28:
			desc ="uglavno oblačno(dan)";
			break;
			case 29:
			desc ="delimično oblačno(noć)";
			break;
			case 30:
			desc ="delimično oblačno(dan)";
			break;
			case 31:
			desc ="vedro(noć)";
			break;
			case 32:
			desc ="sunčano";
			break;
			case 33:
			desc ="razvedravanje(noć)";
			break;
			case 34:
			desc ="razvedravanje(dan)";
			break;
			case 35:
			desc ="kiša i grad";
			break;
			case 36:
			desc ="vruće";
			break;
			case 37:
			desc ="slaba grmljavina";
			break;
			case 38:
			desc ="mestimična grmljavina";
			break;
			case 39:
			desc ="mestimična grmljavina";
			break;
			case 40:
			desc ="mestimična kiša";
			break;
			case 41:
			desc ="jak sneg";
			break;
			case 42:
			desc ="mestimično sneg i kiša";
			break;
			case 43:
			desc ="jak sneg";
			break;
			case 44:
			desc ="delimično oblačno";
			break;
			case 45:
			desc ="grmljavina i kiša";
			break;
			case 46:
			desc ="snežni pljuskovi";
			break;
			case 47:
			desc ="mestimična grmljavina";
			break;
			case 3200:
			desc ="nije dostupno";
			break;
		}
		return desc;		
	}
})(jQuery);
