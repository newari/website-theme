
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

<!--sticky left right-->
$( '.right_side_flex' ).fixedsticky();
$( '.left_side_flex' ).fixedsticky();

$( ".close_btn" ).click(function() {
    $('.close_popup').hide();
});



})(jQuery);

