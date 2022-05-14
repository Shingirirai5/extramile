var track=0;
jQuery(document).ready(function ($) {

		$('body').prepend('<div class="demo-rtl"><a class="rtldemo" href="?d=rtl" target="_blank">RTL</a></div><div class="demo-ltr"><a class="ltrdemo" href="?d=ltr" target="_blank">LTR</a></div>');

		$('body').prepend('<div class="colorswatch"><div class="colorswatch-btn js-colorswatch"><img src="'+ changetemplatecolor_object.changetemplatecolor_ajax_url +'"/></div><div class="colorswatch-inside tools"><a href="#" class="color-red" data-color="red"></a><a href="#" class="color-orange" data-color="orange"></a><a href="#" class="color-yellow active" data-color="yellow"></a><a href="#" class="color-turquoise active" data-color="turquoise"></a><a href="#" class="color-green" data-color="green"></a><a href="#" class="color-blue" data-color="blue"></a><a href="#" class="color-violet" data-color="violet"></a><div class="clearfix"></div><div class="title">Color</div></div></div>');


		var $cookievar=readCookie('template');
		console.log( $cookievar);
		console.log( '$cookievar');
		if(typeof($cookievar)!='undefined' && $cookievar !== null ){
		
			$('body').addClass("color-"+$cookievar);
			var head  = document.getElementsByTagName('head')[0];
			var link  = document.createElement('link');
			link.rel  = 'stylesheet';
			link.id  = 'stylesheetclass';
			link.type = 'text/css';
			link.href = changetemplatecolor_object.color_url+ $cookievar +'.css' ;
			link.media = 'all';
			head.appendChild(link);
			track=track+1;

		}
		$(document).on('click','.tools a', function(e){
			e.preventDefault();

			var $logo = $("header .header-row .logo > a img");
			if(track>0)
				setTimeout(function(){ $("#stylesheetclass").first().remove(); }, 500);
			if($(this).data('color')!=''){
				var head  = document.getElementsByTagName('head')[0];
				var link  = document.createElement('link');
				link.rel  = 'stylesheet';
				link.id  = 'stylesheetclass';
				link.type = 'text/css';
				link.href = changetemplatecolor_object.color_url+$(this).data('color')+'.css' ;
				link.media = 'all';
				head.appendChild(link);
				track=track+1;
				createCookie('template',$(this).data('color'),1);
			}else{
				track=0;
				$("#stylesheetclass").remove();
			}

			function clearColor() {
				$('.tools a').removeClass('active')
			}

			var $this = $(this);

			if ($this.hasClass('color-green')){
				$('body').addClass('color-green');
				clearColor();
				$('.tools a.color-green').addClass('active');
				$logo.attr('src', changetemplatecolor_object.changetemplate_logo_green ); 
			
			}
			if ($this.hasClass('color-blue')){
				$('body').addClass('color-blue');
				clearColor();
				$('.tools a.color-blue').addClass('active');
				$logo.attr('src', changetemplatecolor_object.changetemplate_logo_blue ); 
			
			}
			if ($this.hasClass('color-violet')){
				$('body').addClass('color-violet');
				clearColor();
				$('.tools a.color-violet').addClass('active');
				$logo.attr('src', changetemplatecolor_object.changetemplate_logo_violet ); 
		
			}
			if ($this.hasClass('color-red')){
				$('body').addClass('color-red');
				clearColor();
				$('.tools a.color-red').addClass('active');
				$logo.attr('src', changetemplatecolor_object.changetemplate_logo_red ); 
			
			}
			if ($this.hasClass('color-orange')){
				$('body').addClass('color-orange');
				clearColor();
				$('.tools a.color-orange').addClass('active');
				$logo.attr('src', changetemplatecolor_object.changetemplate_logo_orange ); 
				
			}
			if ($this.hasClass('color-turquoise')){
				$('body').addClass('color-turquoise');
				clearColor();
				$('.tools a.color-turquoise').addClass('active');
				$logo.attr('src', changetemplatecolor_object.changetemplate_logo_turquoise ); 
			
			}
			if ($this.hasClass('color-yellow')){
				$('body').addClass('color-yellow');
				clearColor();
				$('.tools a.color-yellow').addClass('active');
				$logo.attr('src', changetemplatecolor_object.changetemplate_logo_yellow ); 
				
			}
		})
	
	})
	
	
	
	function createCookie(name,value,days) {
		var expires = "";
		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + (days*24*60*60*1000));
			expires = "; expires=" + date.toUTCString();
		}
		document.cookie = name + "=" + value + expires + "; path=/";
	}
	
	function readCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	}
	
	function eraseCookie(name) {
		createCookie(name,"",-1);
	}

	jQuery(document).ready(function ($) {
	
		$('body').prepend('<div class="colorswatch layoutswatch"><div class="colorswatch-btn js-layoutswatch"><img src="'+changetemplateimg_object.setting_icon+'" /></div><div class="colorswatch-inside"><a href="https://smartdata.tonytemplates.com/car-repair-service-v4/car1/" class="active skin-1"><img src="'+changetemplateimg_object.layout1_img+'" alt="" class="img-responsive"></a><a href="https://smartdata.tonytemplates.com/car-repair-service-v4/demo2/" class="active skin-2"><img src="'+changetemplateimg_object.layout2_img+'" alt="" class="img-responsive"></a><div class="clearfix"></div><div class="title">Choose layout</div></div></div>');

		$('.js-colorswatch, .js-layoutswatch').on('click',function (e){
			$(this).parent().toggleClass('opened');
		})

	});

	/*
	jQuery(document).ready(function ($) {
		if($('body').hasClass("color-red")){
			$('.tools a.color-red').addClass('active');
		}else if ( $('body').hasClass("layout-2") ) {
			$('.colorswatch-inside a.skin-2').addClass('active');
		}else if ( $('body').hasClass("layout-2") || $('body').hasClass("layout-3") ) {
			$('.colorswatch-inside a.skin-3').addClass('active');
		}
	});*/
	