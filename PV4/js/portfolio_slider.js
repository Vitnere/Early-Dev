$(function(){
$("#elastic_grid_demo").elastic_grid({	
	'hoverDirection': true,
	'hoverDelay': 0,
	'hoverInverse': false,
	'expandingSpeed': 500,
	'expandingHeight': 500,
	'items' :
		[
		{
		'title' : 'Portofolio 3',
		'description'   : 'Sajt razvijen u toku novembra 2015-e.Toolbox:HTML5,CSS3,Js/Jquery/Bootstrap',
		'thumbnail' : ['http://i.imgur.com/EXeawWR.jpg', 'http://i.imgur.com/g4IqxXM.jpg', 'http://i.imgur.com/m0X1Fdk.jpg', 'http://i.imgur.com/A6vRVkN.jpg', 'http://i.imgur.com/GJDMR7o.jpg'],
		'large' : ['http://i.imgur.com/DBg4trk.jpg','http://i.imgur.com/OAdJGEt.jpg','http://i.imgur.com/FK4B5MI.jpg','http://i.imgur.com/DmPmbl3.jpg','http://i.imgur.com/wmMXpPE.jpg'],
		'button_list'   :
		[
		{ 'title':'Demo', 'url' : 'http://1989.bitballoon.com/' },
		{ 'title':'Download', 'url':'https://dl.dropboxusercontent.com/u/22380934/PortofolioV3.rar'}
		],
		'tags'  : ['Web','Sve']
		},

		{
		'title' : 'Test 23',
		'description'   : 'Sajt urađen za tri sata po zahjevu firme na konkursu za posao.Download source coda sa zadatkom na dugme download',
		'thumbnail' : ['http://i.imgur.com/bp0EPKW.jpg','http://i.imgur.com/faGZDNJ.jpg','http://i.imgur.com/JQk5xqy.jpg','http://i.imgur.com/wVk0WFS.jpg'],
		'large' : ['http://i.imgur.com/lS2FRIH.jpg','http://i.imgur.com/MABBHuS.jpg','http://i.imgur.com/QuhpECE.jpg','http://i.imgur.com/CvKDh2Y.jpg'],
		'button_list'   :
		[
		{ 'title':'Demo', 'url' : '' },
		{ 'title':'Download', 'url':'http://#'}
		],
		'tags'  : ['Web','Sve']
		},

		{
		'title' : 'Portofolio 2',
		'description'   : 'Raden u maju 2013-e,HTML/CSS/Js',
		'thumbnail' : ['http://i.imgur.com/xUx9hjG.jpg','http://i.imgur.com/3VCZVHt.jpg','http://i.imgur.com/u6u8eHh.jpg','http://i.imgur.com/ZDaks8V.jpg','http://i.imgur.com/GVAo2pU.jpg'],
		'large' : ['http://i.imgur.com/L2NXekv.jpg','http://i.imgur.com/7WHum9N.jpg','http://i.imgur.com/A0XjMYZ.jpg','http://i.imgur.com/DFlB4zL.jpg','http://i.imgur.com/Nrlt0Rs.jpg'],
		'button_list'   :
		[
		{ 'title':'Demo', 'url' : 'http://test23.bitballoon.com/' },
		{ 'title':'Download', 'url':'https://dl.dropboxusercontent.com/u/22380934/test23.rar'}
		],
		'tags'  : ['Web', 'Sve']
		},

		{
		'title' : 'Brodway',
		'description'   : ' Razvijen u septembru 2015-e.Codecademy primjer za vjezbu:HTML,CSS',
		'thumbnail' : ['img/portfolio/small/4.jpg', 'img/portfolio/small/4_1.jpg'],
		'large' : ['img/portfolio/large/4.jpg', 'img/portfolio/large/4_1.jpg'],
		'button_list'   :
		[
		{ 'title':'Demo', 'url' : 'http://p5brodway.bitballoon.com/' },
		{ 'title':'Download', 'url':'https://dl.dropboxusercontent.com/u/22380934/Brodway.rar'}
		],
		'tags'  : ['Web','Sve']
		},

		{
		'title' : 'Airbnb',
		'description'   : 'Razvijen u septembru 2015-e.Codecademy primjer za vjezbu:HTML,CSS,Bootstrap',
		'thumbnail' : ['img/portfolio/small/5.jpg', 'img/portfolio/small/5_1.jpg'],
		'large' : ['img/portfolio/large/5.jpg', 'img/portfolio/large/5_1.jpg'],
		'button_list'   :
		[
		{ 'title':'Demo', 'url' : 'http://p4airbnb.bitballoon.com/' },
		{ 'title':'Download', 'url':'https://dl.dropboxusercontent.com/u/22380934/Airbnb.rar'}
		],
		'tags'  : ['Web','Sve']
		},

		{
		'title' : 'Preporuka E-info',
		'description'   : '',
		'thumbnail' : ['img/portfolio/small/6.jpg'],
		'large' : ['img/portfolio/large/6.jpg'],
		'button_list'   :
		[
		{ 'title':'Demo', 'url' : 'http://i.imgur.com/O3dkzl9.png' },
		{ 'title':'Download', 'url':'http://i.imgur.com/O3dkzl9.png'}
		],
		'tags'  : ['Preporuke','Sve']
		},

		{
		'title' : 'Preporuka Int-Ware',
		'description'   : '',
		'thumbnail' : ['img/portfolio/small/7.jpg'],
		'large' : ['img/portfolio/large/7.jpg'],
		'button_list'   :
		[
		{ 'title':'Demo', 'url' : 'http://i.imgur.com/nPYwRan.jpg' },
		{ 'title':'Download', 'url':'http://i.imgur.com/nPYwRan.jpg'}
		],
		'tags'  : ['Preporuke','Sve']
		},

		{
		'title' : 'Preporuka Docent,dr Dragan Matić',
		'description'   : 'Preporuka Docent,dr Dragan Matić,PMF Banja Luka predavac na kursu "Osnove programiranja sa C jezikom"',
		'thumbnail' : ['img/portfolio/small/8.jpg'],
		'large' : ['img/portfolio/large/8.jpg'],
		'button_list'   :
		[
		{ 'title':'Demo', 'url' : 'http://i.imgur.com/ycQw7fL.jpg' },
		{ 'title':'Download', 'url':'http://i.imgur.com/ycQw7fL.jpg'}
		],
		'tags'  : ['Preporuke','Sve']
		},

		{
		'title' : 'Preporuka Docent,mr Miodrag Manojlović',
		'description'   : 'Preporuka docent,mr Miodrag Manojlović, profesor, Faculty of Information Technology and Design',
		'thumbnail' : ['img/portfolio/small/9.jpg'],
		'large' : ['img/portfolio/large/9.jpg'],
		'button_list'   :
		[
		{ 'title':'Demo', 'url' : 'http://i.imgur.com/TYXzhIw.png' },
		{ 'title':'Download', 'url':'http://i.imgur.com/TYXzhIw.png'}
		],
		'tags'  : ['Preporuke','Sve']
		},

		{
		'title' : '"Osnove programiranja sa C jezikom"',
		'description'   : 'Certifikat sa kursa "Osnove programiranja sa C jezikom"',
		'thumbnail' : ['img/portfolio/small/10.jpg'],
		'large' : ['img/portfolio/large/10.jpg'],
		'button_list'   :
		[
		{ 'title':'Demo', 'url' : 'http://i.imgur.com/xJ2yMJz.png' },
		{ 'title':'Download', 'url':'http://i.imgur.com/xJ2yMJz.png'}
		],
		'tags'  : ['Certifikati','Sve']
		},

		{
		'title' : 'Obuka u naprednim grafičkim softverima "Adobe Illustrator" i "Adobe InDesign"',
		'description'   : 'Certifikat sa kursa Obuka u naprednim grafičkim softverima "Adobe Illustrator" i "Adobe InDesign"',
		'thumbnail' : ['img/portfolio/small/11.jpg'],
		'large' : ['img/portfolio/large/11.jpg'],
		'button_list'   :
		[
		{ 'title':'Demo', 'url' : 'http://i.imgur.com/jz33usv.jpg' },
		{ 'title':'Download', 'url':'http://i.imgur.com/jz33usv.jpg'}
		],
		'tags'  : ['Certifikati','Sve']
		},

		{
		'title' : '',
		'description'   : '',
		'thumbnail' : [''],
		'large' : [''],
		'button_list'   :
		[
		{ 'title':'Demo', 'url' : 'http://#' },
		{ 'title':'Download', 'url':'http://#'}
		],
		'tags'  : ['', '']
		},

		{
		'title' : '',
		'description'   : '',
		'thumbnail' : [''],
		'large' : [''],
		'button_list'   :
		[
		{ 'title':'Demo', 'url' : 'http://#' },
		{ 'title':'Download', 'url':'http://#'}
		],
		'tags'  : ['']
		},

		{
		'title' : '',
		'description'   : '',
		'thumbnail' : [''],
		'large' : [''],
		'button_list'   :
		[
		{ 'title':'Demo', 'url' : 'http://#' },
		{ 'title':'Download', 'url':'http://#'}
		],
		'tags'  : ['']
		},

		{
		'title' : '',
		'description'   : '',
		'thumbnail' : [''],
		'large' : [''],
		'button_list'   :
		[
		{ 'title':'Demo', 'url' : 'http://#' },
		{ 'title':'Download', 'url':'http://#'}
		],
		'tags'  : ['']
		}
	 
		]
	});
});