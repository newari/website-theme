
(function($) {
    "use strict";
<!--scroll top-->

    jQuery(window).scroll(function(){
        if (jQuery(this).scrollTop() > 1) {
            jQuery('.dmtop').css({bottom:"25px"});
        } else {
            jQuery('.dmtop').css({bottom:"-100px"});
        }
    });
    jQuery('.dmtop').click(function(){
        jQuery('html, body').animate({scrollTop: '0px'}, 800);
        return false;
    });

<!--video gallery-->
$('#video-gallery').lightGallery();

 // Tranding carousel
$('.owl-carousel').owlCarousel({
    stagePadding: 200,
    loop:true,
    margin:10,
    items:1,
    lazyLoad: true,
    nav:true,
	 navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
  responsive:{
        0:{
            items:1,
            stagePadding: 60
        },
        600:{
            items:1,
            stagePadding: 100
        },
        1000:{
            items:1,
            stagePadding: 200
        },
        1200:{
            items:1,
            stagePadding: 250
        },
        1400:{
            items:1,
            stagePadding: 300
        },
        1600:{
            items:1,
            stagePadding: 350
        },
        1800:{
            items:1,
            stagePadding: 400
        }
    }
})



<!--sticky left right-->
$( '.right_side_flex' ).fixedsticky();
$( '.left_side_flex' ).fixedsticky();




})(jQuery);

