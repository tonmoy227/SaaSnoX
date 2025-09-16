/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
;(function($) {

	"use strict";
	gsap.config({
		nullTargetWarn: false,
	});

// lenis-smooth-scroll
	const lenis = new Lenis({
		duration: .8, 
		easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
		direction: 'vertical', 
		smooth: true, 
		smoothTouch: false, 
	});

	function raf(time) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}
	requestAnimationFrame(raf);


	function TXTheaderSticky() {
		var $window = $(window);
		var lastScrollTop = 0;
		var $header = $('.txa_sticky_header');
		var headerHeight = $header.outerHeight() + 30;

		$window.scroll(function () {
			var windowTop = $window.scrollTop();

			if (windowTop >= headerHeight) {
				$header.addClass('txa_sticky');
			} else {
				$header.removeClass('txa_sticky');
				$header.removeClass('txa_sticky_show');
			}

			if ($header.hasClass('txa_sticky')) {
				if (windowTop < lastScrollTop) {
					$header.addClass('txa_sticky_show');
				} else {
					$header.removeClass('txa_sticky_show');
				}
			}

			lastScrollTop = windowTop;
		});
	}
	TXTheaderSticky();
	jQuery(window).on('scroll', function() {
		if (jQuery(window).scrollTop() > 250) {
			jQuery('.ag-header-section.header_style_three, .ag-header-section.header_style_four').addClass('sticky-on')
		} else {
			jQuery('.ag-header-section.header_style_three, .ag-header-section.header_style_four').removeClass('sticky-on')
		}
	});
	$('.open_mobile_menu').on("click", function() {
		$('.mobile_menu_wrap').toggleClass("mobile_menu_on");
	});
	$('.open_mobile_menu').on('click', function () {
		$('body').toggleClass('mobile_menu_overlay_on');
	});
	jQuery(".mobile-main-navigation li.dropdown").append('<span class="dropdown-btn"><i class="fas fa-angle-down"></i></span>'),
	jQuery(".mobile-main-navigation li .dropdown-btn").on("click", function () {
		jQuery(this).hasClass("active")
		? (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"), jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle())
		: (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"),
			jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle(),
			jQuery(this).toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").slideToggle());
	});
	// Background Image
	$('[data-background]').each(function() {
		$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
	});
	gsap.registerPlugin(ScrollTrigger);
	
	// Animation
	if($('.wow').length){
		var wow = new WOW(
		{
			boxClass:     'wow',
			animateClass: 'animated',
			offset:       0,
			mobile:       true,
			live:         true
		}
		);
		wow.init();
	};
	jQuery('.video_box').magnificPopup({
		disableOn: 200,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
	});

	$(window).on("scroll", function() {
		if ($(this).scrollTop() > 200) {
			$('.sn-scrollup').fadeIn();
		} else {
			$('.sn-scrollup').fadeOut();
		}
	});
	$('.sn-scrollup').on("click", function()  {
		$("html, body").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	// windows-loaded-before-functions
	document.addEventListener("DOMContentLoaded", function () {
		window.addEventListener('load', function(){



			let preloader = document.querySelector("#preloader");
			if (preloader) {
				preloader.classList.add("preloaded");
				setTimeout(function () {
					preloader.remove();
				}, 1000 ) ;

			}
			setTimeout(function() {
				
			}, 700);
		})		
	});
	
	if ($('.sn-client-slider').length > 0 ) {
		var slider = new Swiper('.sn-client-slider', {
			spaceBetween: 60,
			slidesPerView: 7,
			loop: true,
			autoplay: {
				enabled: true,
				delay: 6000
			},
			speed: 400,
			breakpoints: {
				'1600': {
					slidesPerView: 7,
				},
				'1200': {
					slidesPerView: 6,
					spaceBetween: 40,
				},
				'992': {
					slidesPerView: 5,
					spaceBetween: 20,
				},
				'768': {
					slidesPerView: 4,
					spaceBetween: 20,
				},
				'576': {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				'480': {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				'0': {
					slidesPerView: 2,
					spaceBetween: 20,
				},
			},
		});
	};

	if ($("#sn_chart").length) {
		var $chart = $("#sn_chart");
		$chart.appear();
		$(document.body).on('appear', '#sn_chart', function() {
			var current_item = $(this);
			if (!current_item.hasClass('appeared')) {
				current_item.addClass('appeared');
				var ctx = document.getElementById("sn_chart");
				var sn_chart = new Chart(ctx, {
					type: 'line',
					data: {
						labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
						datasets: [{
							label: "",
							data: [80, 50.1, 40.8, 70.8, 50.2, 60.5, 40.7, 50, 50.5, 80, 90, 100],
							lineTension: 0.5,
							backgroundColor: 'rgba(255, 153, 81, .4)',
							borderColor: '#FF9951',
							borderWidth: 3,
							PointBorderCoolor: '#FF9951',
							pointBorderWidth: 8,
						}]
					},
					options: {
						legend: {
							display: false,
						},
						maintainAspectRatio: false,
						animation: {
							duration: 3500,
						},

						scales: {
							xAxes: [{
								ticks: {
									fontSize: 15,       
									fontColor: "#868D8E", 
									paddingLeft: 10,
									fontWeight: 500,
								}
							}],
							yAxes: [{
								ticks: {
									fontSize: 15,
									fontColor: "#868D8E",
									padding: 8,
									fontWeight: 500,
								},
								gridLines: {
									zeroLineWidth: 30,
								},
							}]
						}

					}

				});
			}                
		});
	};

	if($('.sn_line_split').length) {
		var txtSplit = $('.sn_line_split');
		if(txtSplit.length == 0) return; gsap.registerPlugin(SplitText); txtSplit.each(function(index, el) {
			el.split = new SplitText(el, { 
				type: "lines",
				linesClass: "split-line"
			});
		});
	}

	var quick_view = new Swiper(".sn-testi-thumb", {
		loop: true,
		spaceBetween: 0,
		slidesPerView: 4,
		speed: 1000,
		autoplay: {
			enabled: true,
			delay: 5000
		},
		breakpoints: {  
			'1400': {
				slidesPerView: 4,
			},
			'1200': {
				slidesPerView: 3,
			},
			'1199': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});
	var swiper2 = new Swiper(".sn-testi-slider", {
		loop: true,
		spaceBetween: 0,
		speed: 1000,
		effect: "fade",
		slidesPerView: 1,
		autoplay: {
			enabled: true,
			delay: 5000
		},
		thumbs: {
			swiper: quick_view,
		},
	});


	$(document).on('click', '.sn-faq-content .accordion-item', function(){
		$(this).addClass('faq_active').siblings().removeClass('faq_active')
	});


	

})(jQuery);