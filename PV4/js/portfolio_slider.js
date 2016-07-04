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
                'title' : 'myTodo',
                'description'   : 'Moja prva web app.',
                'thumbnail' : ['http://i.imgur.com/906L4mI.jpg','http://i.imgur.com/lkhRy4L.jpg','http://i.imgur.com/iqbTkL8.jpg',
                    'http://i.imgur.com/x2SE4jn.jpg','http://i.imgur.com/frqBRsA.jpg','http://i.imgur.com/r90BlX5.jpg'],
                'large' : ['http://i.imgur.com/sfp0PZ1.jpg','http://i.imgur.com/4HhnswW.jpg','http://i.imgur.com/CZkzHaa.jpg','http://i.imgur.com/1gZeqsU.jpg','http://i.imgur.com/PxfHJvI.jpg','http://i.imgur.com/ABZ9NjK.jpg'],
                'button_list'   :
                    [
                        { 'title':'Demo', 'url' : 'http://mytodo.96.lt/' },
                        { 'title':'GitHub', 'url':'https://github.com/Vitnere/mytodo'}
                    ],
                'tags'  : ['PHP','Sve']
            },

            {
                'title' : 'Meetings',
                'description'   : 'Moj prvi CMS, trenutno u razvoju. Racun za logovanje->Username:guest, sifra:12345678',
                'thumbnail' : ['http://i.imgur.com/ugaXFF1.jpg','http://i.imgur.com/nt2GuSW.jpg','http://i.imgur.com/D1Y21P8.jpg','http://i.imgur.com/hHhnqfJ.jpg','http://i.imgur.com/7CtruK2.jpg','http://i.imgur.com/OoZsqtQ.jpg'],
                'large' : ['http://i.imgur.com/6BRl4Js.jpg','http://i.imgur.com/uGxQ472.jpg','http://i.imgur.com/mmbX3yn.jpg','http://i.imgur.com/POPaahi.jpg','http://i.imgur.com/x9CyTj7.jpg','http://i.imgur.com/PgGfi1n.jpg'],
                'button_list'   :
                    [
                        { 'title':'Demo', 'url' : 'http://meetings.pe.hu/' },
                        { 'title':'Download', 'url':'https://dl.dropboxusercontent.com/u/22380934/meetings%20export.zip'}


                    ],
                'tags'  : ['PHP', 'Sve']
            },

            {
        'title' : 'E-shop',
        'description'   : 'E-commerce sajt razvijen u wordpressu',
        'thumbnail' : ['http://i.imgur.com/TZckhqj.jpg','http://i.imgur.com/1JqDy15.jpg','http://i.imgur.com/YtYfZEr.jpg','http://i.imgur.com/dt3AZb2.jpg'],
        'large' : ['http://i.imgur.com/fafkm5T.jpg','http://i.imgur.com/iUlJw1u.jpg','http://i.imgur.com/4dwVBYQ.jpg','http://i.imgur.com/EAvUN5J.jpg'],
        'button_list'   :
            [
                { 'title':'Demo', 'url' : 'http://eshoppd.pe.hu/' },
                
            ],
        'tags'  : ['Wordpress','Sve']
        },

		    {
		'title' : 'Studentska Unija Prijedor',
		'description'   : 'Rad za klijenta',
		'thumbnail' : ['http://i.imgur.com/TsU0qJ8.jpg','http://i.imgur.com/CULgE6O.jpg','http://i.imgur.com/YxReD1F.jpg','http://i.imgur.com/R1pS2oA.jpg'],
		'large' : ['http://i.imgur.com/MEq9zSX.jpg','http://i.imgur.com/y7XOj7a.jpg','http://i.imgur.com/R1pS2oA.jpg','http://i.imgur.com/7XSVI7h.jpg'],
		'button_list'   :
		[
		{ 'title':'Demo', 'url' : 'http://mladjopaukovic.byethost7.com/wp/' },
		],
		'tags'  : ['Wordpress','Sve']
		},

		    {
		'title' : 'First Portofolio',
		'description'   : 'Sajt razvijen u toku novembra 2015-e.',
		'thumbnail' : ['http://i.imgur.com/EXeawWR.jpg', 'http://i.imgur.com/g4IqxXM.jpg', 'http://i.imgur.com/m0X1Fdk.jpg', 'http://i.imgur.com/A6vRVkN.jpg', 'http://i.imgur.com/GJDMR7o.jpg'],
		'large' : ['http://i.imgur.com/DBg4trk.jpg','http://i.imgur.com/OAdJGEt.jpg','http://i.imgur.com/FK4B5MI.jpg','http://i.imgur.com/DmPmbl3.jpg','http://i.imgur.com/wmMXpPE.jpg'],
		'button_list'   :
		[
		{ 'title':'Demo', 'url' : 'http://1989.bitballoon.com/' },
		{ 'title':'Download', 'url':'https://dl.dropboxusercontent.com/u/22380934/PortofolioV3.rar'},
            { 'title':'GitHub', 'url':' https://github.com/Vitnere/Early-Dev/tree/master/pv3'}
		],
		'tags'  : ['Frontend','Sve']
		},

		    {
		'title' : 'Test 23',
		'description'   : 'Sajt urađen za tri sata po zahjevu firme na konkursu za posao ',
		'thumbnail' : ['http://i.imgur.com/bp0EPKW.jpg','http://i.imgur.com/faGZDNJ.jpg','http://i.imgur.com/JQk5xqy.jpg','http://i.imgur.com/wVk0WFS.jpg'],
		'large' : ['http://i.imgur.com/lS2FRIH.jpg','http://i.imgur.com/MABBHuS.jpg','http://i.imgur.com/QuhpECE.jpg','http://i.imgur.com/CvKDh2Y.jpg'],
		'button_list'   :
			[
				{ 'title':'Demo', 'url' : 'http://test23.bitballoon.com/' },
				{ 'title':'Download', 'url':'https://dl.dropboxusercontent.com/u/22380934/test23.rar'}
			],
		'tags'  : ['Frontend','Sve']
		},

		{
		'title' : '',
		'description'   : '',
		'thumbnail' : [''],
		'large' : [''],
		'button_list'   :
		[
		{ 'title':'Demo', 'url' : '' },
		{ 'title':'Download', 'url':''}
		],
		'tags'  : ['','']
		},

		{
		'title' : '',
		'description'   : '',
		'thumbnail' : [''],
		'large' : [''],
		'button_list'   :
		[
		{ 'title':'Demo', 'url' : '' },
		{ 'title':'Download', 'url':''}
		],
		'tags'  : ['','']
		},

		{
		'title' : '',
		'description'   : '',
		'thumbnail' : [''],
		'large' : [''],
		'button_list'   :
		[
		{ 'title':'Demo', 'url' : '' },
		{ 'title':'Download', 'url':''}
		],
		'tags'  : ['','']
		},

		{
		'title' : '',
		'description'   : '',
		'thumbnail' : [''],
		'large' : [''],
		'button_list'   :
		[
		{ 'title':'Demo', 'url' : '' },
		{ 'title':'Download', 'url':''}
		],
		'tags'  : ['','']
		},

		{
		'title' : '',
		'description'   : '',
		'thumbnail' : [''],
		'large' : [''],
		'button_list'   :
		[
		{ 'title':'Demo', 'url' : '' },
		{ 'title':'Download', 'url':''}
		],
		'tags'  : ['','']
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