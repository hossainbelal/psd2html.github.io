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

        $("#traffic-menu").slicknav({
           prependTo:'#mobile-menu-wrap',
           allowParentLinks:true,
        });

        $('.map')
      .gmap3({
        center:[22.3284781,91.6825559],
        zoom:10,
        mapTypeId: "shadeOfGrey", // to select it directly
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGrey"]
        }
      })
      .styledmaptype(
        "shadeOfGrey",
        [
          {"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},
          {"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},
          {"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
          {"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},
          {"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},
          {"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},
          {"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},
          {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},
          {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},
          {"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},
          {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},
          {"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},
          {"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}
        ],
        {name: "Shades of Grey"}
      );
    
    }); // you missing this syntax in your main.js file

    jQuery(window).load(function(){
        
    });

}(jQuery));	