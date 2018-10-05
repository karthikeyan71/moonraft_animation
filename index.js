$(document).ready(function() {
    $('.li_item').click(function() {
        let a = $(this).position();
        let b = parseInt($(this).width())/2;
        let move = parseInt(a.left) + b + 4;

        $('.cursor_ball').css({
            "transform": "translateX("+move+"px)"
        });
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() == 0) {
            $('.cursor_ball').removeClass("bigger_style");
            $('.li_item').removeClass("lister_style");
            $('header').removeClass("header_style");    
        }
        else if (!$('.cursor_ball').hasClass('bigger_style')) {
            $('.cursor_ball').addClass("bigger_style");
            $('.li_item').addClass("lister_style");
            $('header').addClass("header_style");
        }
    });

    $('.cursor_ball').click(function() {
        $('.cursor_ball').removeClass("bigger_style");
        $('.li_item').removeClass("lister_style");
        $('header').removeClass("header_style");    
    });
    
});