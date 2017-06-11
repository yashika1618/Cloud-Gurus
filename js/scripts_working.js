$(function() {
  $('.menu a[href*=#]:not([href=#])').click(function() {
	  $('.menu a').removeClass('current');
	  $(this).addClass('current');
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 100
        }, 1000);
        return false;
      }
    }
  });
  $('#mobile-menu a[href*=#]:not([href=#])').click(function() {
	  $('#mobile-menu a').removeClass('current');
	  $(this).addClass('current');
	  $("#mobile-menu .nav-icon").trigger('click');
	  var hh = $('header').height() + 5;
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - hh
        }, 1000);
        return false;
      }
    }
  });
  
  $('a[href*=#]:not([href=#]).footer-link').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	  var hh = $('header').height() + 5;
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - hh
        }, 1000);
		$('#'+this.hash.slice(1)+' a').trigger('click');
        return false;
      }
    }
  });
  
  
  $(document).scroll(function () {
		if ($(document).scrollTop() < 50) {
			$('.logo').removeClass('active');
		} else {
			//$('.logo').animate({'width':'200px','margin-left':'-100px'},200);
			$('.logo').addClass('active');
		}
		var diff = $('.advantages').offset().top - $(document).scrollTop();
		if (diff < 0) {
			$('.advantages').addClass('active');
		} else {
			$('.advantages').removeClass('active');
		}
	});
	
	$('.nav-tabs a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	})
  	
	if($(window).width() > 600){
		$('#carousel').carousel({
			interval: 6000
		});
	}else{
		$('#carousel').carousel({
			interval: false
		});
	}
	
	
	$(document).on('click','.service-heading a',function(e) {
		$(this).parent().siblings('.service-desc').slideToggle();
		$(this).parent().parent().siblings('li').find('.service-desc').slideUp();
		$(this).parent().parent().parent().parent().siblings('.col-sm-6').find('.service-desc').slideUp();
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
	
	var pwh = window.innerHeight;
	var psh = $('#slider').height();
	//alert(window.innerHeight);
	psh = 650/800*window.innerHeight;
	$('#slider').height(psh);
	function maintainheighht(){
		var cwh = window.innerHeight;
		var ratio = pwh / cwh;
		$('#slider').height(psh/ratio);
		var nsh = psh / ratio;
		
		//alert('pwh = '+pwh+' cwh = '+cwh+' ratio = '+ratio+' nsh = '+nsh);
		
		pwh = cwh;
		psh = nsh;
	
	}
	//We want the div to readjust every time there is a resize event:
	//window.onresize = maintainheighht;
	$(window).resize(maintainheighht);
	
	///////////////////////////////////////////////////////
	
	$(document).on('change','#menu',function () {
		var menu = $(this).val();
		if (menu != '') {
			$(".menu a[id='"+menu+"']").trigger('click');
		}
	});
	
	$(document).on('click','#mobile-menu .nav-icon',function(){
		$('#mobile-menu').toggleClass('menu-show');
		//$('body').toggleClass('menu-show');
		//$('header').toggleClass('menu-show');
	});
	
	$('.play-video1').click(function(){
		$('#video1 .modal-body').html('<iframe src="https://player.vimeo.com/video/104566107?autoplay=1" width="100%" height="562" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>');
	});
	
	$('.service-heading a').click(function(){
		scrollPos = $(this);
		if($(window).width() < 768){
			myVar = setTimeout(function(){
				var scrollPos_last = scrollPos.offset().top;
				$(window).scrollTop(scrollPos_last - 100);
				clearTimeout(myVar);
			}, 500);
		}
		
		//myVar = setTimeout(function(){$(this).focus();}, 500);
		//clearTimeout(myVar);
	});
	
	$('.advantages ul li a').click(function(){
		var target = $('#'+this.hash.slice(1));
		  if (target.length) {
			$('html,body').animate({
			  scrollTop: target.offset().top - 100
			}, 1000);
			return false;
		  }
	});
	
	/*
	
	setTimeout(function() {
	  if (location.hash) {
		window.scrollTo(0, 0);
	  }
	}, 1);
	
	*/
  
});

$(window).load(function() {
		$('.main-image-section-icon').css('display','block');
	
});

// add by ken 27/10/2014

$(document).ready(function(){
	$('header a.logo').attr('href','http://cloudgurus.guru');
	$('#audio-ad1 audio').attr('src','http://media.cloudgurus.guru/audio/CG-Audio1.mp3');
	$('#audio-ad2 audio').attr('src','http://media.cloudgurus.guru/audio/CG-Audio2.mp3');
	$('#audio-ad3 audio').attr('src','http://media.cloudgurus.guru/audio/CG-3edit.wav');
	
	$('.content.footer-copy .container').append($('.st_sharethis_large').detach());
	
	
	if(window.location.hash != ""){
	var target = window.location.hash;
		target_id = $(target);
      //target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target_id.length) {
        $('html,body').animate({
          scrollTop: target_id.offset().top - 100
        }, 500);
		if(target == "#services_tav1" || target == "#services_tav2" || target == "#services_tav3" || target == "#services_tav4" || target == "#services_tav5"
			 || target == "#services_tav6" || target == "#services_tav7" || target == "#services_tav8" || target == "#services_tav9" || target == "#services_tav10"
			 || target == "#services_tav11" || target == "#services_tav12" || target == "#services_tav13" || target == "#services_tav14"){
			$(target+' a').trigger('click');
		}
        return false;
      }
	}
	
	
	
	// add by ken 3/11/2014
	
	$('#form-contact button#submit').click(function(e){
		e.preventDefault();
		name = $('#form-contact #fname').val() +' '+ $('#form-contact #lname').val();
		email = $('#form-contact #email').val();
		phone = $('#form-contact #phn-no').val();
		subject = $('#form-contact #subject').val();
		mess = $('#form-contact #message').val();
		$.ajax({
			type:"post",
			url:"sendmail.php",
			data:{'send-request':'form-contact','name':name,'email':email,'mess':mess,'phone':phone,'subject':subject},
			success:function(result){
				if(result != 1){
					alert(result);
				}else{
					window.location.href = "/thank-you-for-your-enquiry.html";
				}
			}
		});
		return false;
	});
	
	$('#free-video-chat button#submit').click(function(e){
		e.preventDefault();
		name = $('#free-video-chat #fname').val() +' '+ $('#free-video-chat #lname').val();
		email = $('#free-video-chat #email').val();
		phone = $('#free-video-chat #phn-no').val();
		//subject = $('#free-video-chat #subject').val();
		mess = $('#free-video-chat #message').val();
		pdate = $('#free-video-chat #pdate').val();
		ptime = $('#free-video-chat #ptime').val();
		$.ajax({
			type:"post",
			url:"sendmail.php",
			data:{'send-request':'form-video-chat','name':name,'email':email,'mess':mess,'phone':phone,'pdate':pdate,'ptime':ptime},
			success:function(result){
				if(result != 1){
					alert(result);
				}else{
					window.location.href = "/thank-you-for-your-enquiry.html";
				}
			}
		});
		return false;
	}); 
	
	
	$('body').click(function(){
		setTimeout(function(){
			if($('body').hasClass('modal-open') == true){
				$('html').addClass('modal-open');
			}else{
				$('html').removeClass('modal-open');
			}
		}, 500);
		
	});
	
});


