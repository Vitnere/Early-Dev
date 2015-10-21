 $(document).ready(function () {
	        // Show or hide the sticky footer button
	        $(window).scroll(function () {
	            if ($(this).scrollTop() > 200) {
	                $('.na-vrh').fadeIn(200);
	            } else {
	                $('.na-vrh').fadeOut(200);
	            }
	        });

	        // Animate the scroll to top
	        $('.na-vrh').click(function (event) {
	            event.preventDefault();

	            $('html, body').animate({ scrollTop: 0 }, 300);
	        })
	    });