$(document).ready(function () {


    /* show div color option */

    $('.switcher-color').on('click',function(){
        $(".color-option").toggle(300);
    });

    /* change bettween color */

    $('.option-box .color-option ul li').on('click',function(){
        $('html').attr('style',$(this).attr('data-value'));
    });

    /* ==== show & hide menu for navbar ==== */

    
    $('.navbar-toggle').on('click', function(){
        $(this).toggleClass('x');
        $('.collapse').slideToggle(700);
    });

    /* ==== show & hide menu for aside ==== */

    
    
    $('.nav-toggle').on('click', function(){
        $(this).toggleClass('collapsed');
        $('.menu-nav').slideToggle(500);
    });


    /* typewrting */

    var firstDegree = $('.first-degree').data('degree'),
        secondDegree = $('.second-degree').data('degree'),
        thirdDegree = $('.third-degree').data('degree');
    $("#ghost").ghosttyper({
        messages: [firstDegree,secondDegree,thirdDegree],
        timeWrite: 150,
        timeDelete: 100,
        timePause: 3000
    });
    


    /* portfolio filtre*/
    
    $('.category').click(function(){
        var val = $(this).attr('data-filter');
        if ( val == '.all'){
            $('.filter').show(700);
        }else{
            $('.filter').not(val).hide(400);
            $('.filter').filter(val).show(700);
        }
    });
    $('.projects .filtrate li').click(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
    });

    /* close position in lightbox */
    
    $('.lb-outerContainer').insertAfter('.lb-dataContainer')
    
    /* print-cv */

    $('.print-cv').hover(function(){
    	$('.fa-print').hide();
    	$('.fa-file').show();
    });
    $('.print-cv').mouseleave(function(){
    	$('.fa-print').show();
    	$('.fa-file').hide();
    });


    /* styling of the zoom-box */
    
    $('.lb-data .lb-caption').css({
        "display": "inline-block",
        "font-size": "20px",
        "margin-bottom": "8px"
    });

    /* zoom-box in orientation phone */

    $(window).on("orientationchange",function(){
        if(window.orientation == 0) {
            if($('.lightboxOverlay').length){
                $('.lightbox .lb-image').css({
                    "width": "100%",
                    "height": "77vh"
                });
                $('.lb-outerContainer').css({
                    "width": "90%",
                    "height": "77vh"
                });
                $('.lb-data .lb-details').css({
                    "line-height": "1.2em",
                    "position": "absolute",
                    "left": "5%"
                });
                $('.lb-data .lb-close').css({
                    "position": "absolute",
                    "right": "5%"
                });
            }
        }
    });

    /* animation to scroll */

    new Skroll().add(".home",{

        // delay
        delay: 0,

        // duration
        duration: 500,

        // animation type
        animation: "fadeInDown",

        // easing effect
        easing: "ease",

        // time to wait
        wait: 50,

        // whether to run only once
        repeat: false

    }).init();

    new Skroll().add(".title-box",{

        // delay
        delay: 0,

        // duration
        duration: 700,

        // animation type
        animation: "zoomIn",

        // easing effect
        easing: "ease",

        // time to wait
        wait: 50,

        // whether to run only once
        repeat: false

    }).init();

    new Skroll().add(".descrp-global",{

        // delay
        delay: 80,

        // duration
        duration: 500,

        // animation type
        animation: "slideInRight",

        // easing effect
        easing: "ease",

        // time to wait
        wait: 50,

        // whether to run only once
        repeat: false

    }).init();

    new Skroll().add(".informations-personal",{

        // delay
        delay: 80,

        // duration
        duration: 500,

        // animation type
        animation: "slideInLeft",

        // easing effect
        easing: "ease",

        // time to wait
        wait: 50,

        // whether to run only once
        repeat: false

    }).init();

    new Skroll().add(".download-cv",{

        // delay
        delay: 80,

        // duration
        duration: 500,

        // animation type
        animation: "slideInRight",

        // easing effect
        easing: "ease",

        // time to wait
        wait: 50,

        // whether to run only once
        repeat: false

    }).init();

    new Skroll().add(".print-cv",{

        // delay
        delay: 80,

        // duration
        duration: 500,

        // animation type
        animation: "slideInLeft",

        // easing effect
        easing: "ease",

        // time to wait
        wait: 50,

        // whether to run only once
        repeat: false

    }).init();

    new Skroll().add(".btn-more",{

        // delay
        delay: 0,

        // duration
        duration: 500,

        // animation type
        animation: "zoomIn",

        // easing effect
        easing: "ease",

        // time to wait
        wait: 50,

        // whether to run only once
        repeat: false

    }).init();
    
    new Skroll().add(".education,.experience",{

        // delay
        delay: 0,

        // duration
        duration: 500,

        // animation type
        animation: "fadeInDown",

        // easing effect
        easing: "ease",

        // time to wait
        wait: 50,

        // whether to run only once
        repeat: false

    }).init();

    new Skroll().add(".skills,.hobbies",{

        // delay
        delay: 200,

        // duration
        duration: 800,

        // animation type
        animation: "fadeInUp",

        // easing effect
        easing: "ease",

        // time to wait
        wait: 50,

        // whether to run only once
        repeat: false

    }).init();

    new Skroll().add(".effect-serv",{

        // delay
        delay: 200,

        // duration
        duration: 700,

        // animation type
        animation: "flipInY",

        // easing effect
        easing: "ease",

        // time to wait
        wait: 50,

        // whether to run only once
        repeat: false

    }).init();

    new Skroll().add(".wrapper",{

        // delay
        delay: 200,

        // duration
        duration: 800,

        // animation type
        animation: "rotateRightIn",

        // easing effect
        easing: "ease",

        // time to wait
        wait: 50,

        // whether to run only once
        repeat: false

    }).init();

    new Skroll().add(".send-us",{

        // delay
        delay: 100,

        // duration
        duration: 500,

        // animation type
        animation: "slideInRight",

        // easing effect
        easing: "ease",

        // time to wait
        wait: 50,

        // whether to run only once
        repeat: false

    }).init();

    new Skroll().add(".map",{

        // delay
        delay: 100,

        // duration
        duration: 500,

        // animation type
        animation: "slideInLeft",

        // easing effect
        easing: "ease",

        // time to wait
        wait: 50,

        // whether to run only once
        repeat: false

    }).init();

    new Skroll().add("footer",{

        // delay
        delay: 0,

        // duration
        duration: 500,

        // animation type
        animation: "zoomIn",

        // easing effect
        easing: "ease",

        // time to wait
        wait: 50,

        // whether to run only once
        repeat: false,

    }).init();

    /* move to section after to click link */

    $('.links li a').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $('#'+$(this).data('value')).offset().top
        },2000);

    });

    $('.info .know-more').on('click',function(){
        $('html,body').animate({
            scrollTop: $('#'+$(this).data('value')).offset().top
        },2000);

    });

    /* button scroll to top */

    $(window).scroll(function(){
        var scrollToTop = $('.scroll-top');
        if ($(window).scrollTop() >= 800){
            scrollToTop.fadeIn(400);
        }else{
            scrollToTop.fadeOut(400);   
        }
    });

    /* click to button for go to up */

    $('.scroll-top').on('click',function(){
        $('html,body').animate({
            scrollTop: 0
        },1000);

    });
});



    

    
