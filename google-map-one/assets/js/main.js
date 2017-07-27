jQuery(document).ready(function($){
        
        $(".team-carousel").owlCarousel({
            items:3,
            margin:30,
            loop:true,
            nav:true,
            autoplay:true,
            dots:true,
            navText:["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
          });
       });