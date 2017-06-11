$(function() {
  $('.menu a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  
  $(document).scroll(function () {
		var y = $(this).scrollTop();
		if (y > 5) {
			$('.logo').animate({'width':'200px','margin-left':'-100px'},200);
		} else {
			$('.logo').animate({'width':'240px','margin-left':'-120px'},200);
		}
	});
	
	$('.nav-tabs a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	})
  	
	$('#carousel').carousel({
	  interval: 2000
	})
	
	$('.service-heading a').click(function(e) {
		$(this).parent().siblings('.service-desc').slideToggle();
		e.preventDefault();
	});
	
	
	$(".brands-list ul#brands").flexisel({
        visibleItems: 6,
        animationSpeed: 500,          
        pauseOnHover: true,
        enableResponsiveBreakpoints: true,
        responsiveBreakpoints: { 
            portrait: { 
                changePoint:480,
                visibleItems: 1
            }, 
            landscape: { 
                changePoint:640,
                visibleItems: 2
            },
            tablet: { 
                changePoint:768,
                visibleItems: 3
            }
        }
    });
	
  
});