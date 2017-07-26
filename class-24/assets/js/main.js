(function ($) {
	"use strict";

    jQuery(document).ready(function($){

       $(".homepage-slides").owlCarousel({
            items: 1,
            loop:true,
            dots:true,
            nav:true,
		    autoplay: true,
            smartSpeed: 800,
            navText:["<i class='zmdi zmdi-arrow-left'></i>", "<i class='zmdi zmdi-arrow-right'></i>"],
       });  
		
	   $(".logo-carousel").owlCarousel({
            items: 6,
            margin:30,
            loop:true,
            dots:false,
            nav:false,
            autoplay: true,
            smartSpeed: 800,
             responsive : {
            // breakpoint from 0 up
            0 : {
                items: 2
            },
           //breakpoint from 768 up
            768 : {
                items: 4
            },
         //breakpoint from 992 up
            992 : {
                items: 6
            }
        }
       });  
		
        $(".case-studies-carousel").owlCarousel({
            margin:30,
            loop:true,
            dots:true,
            nav:false,
            autoplay: true,
            smartSpeed: 800,
            responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
           //breakpoint from 768 up
            768 : {
                items: 2
            },
         //breakpoint from 992 up
            992 : {
                items: 3
            }
        }
       });

       $(".testimonial-carousel").owlCarousel({
            items: 1,
            loop:true,
            dots:true,
            nav:false,
            autoplay: true,
            smartSpeed: 800,
       });
		
		   $(".testimonial-carousel-2").owlCarousel({
            items: 1,
            loop:true,
            dots:true,
            nav:false,
            autoplay: true,
            smartSpeed: 800,
       });
        
        $(".menu-trigger").on('click', function(){
            $(".off-canvas-menu").addClass("show-off-canvas-menu");
            $(".off-canvas-menu-shade").addClass("active");
       });
    $(".menu-close, .off-canvas-menu-shade").on('click', function(){
            $(".off-canvas-menu").removeClass("show-off-canvas-menu");
            $(".off-canvas-menu-shade").removeClass("active");
       });

        $(".single-testimonial-box").hover(function(){
             $(".single-testimonial-box").removeClass('active'); 
             $(this).addClass('active'); 
        });
        
        $(".video-play-btn").magnificPopup({
            type: 'video'
        });
    
    }); // you missing this syntax in your main.js file

    jQuery(window).load(function(){
        
    });

}(jQuery));	