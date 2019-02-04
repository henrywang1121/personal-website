$(window).on("load", function(){
    $(".loader .inner").fadeOut(500, function(){
        $(".loader").fadeOut(750);
    });

    $(".items").isotope({
        filter: "*",
        animationOptions: {
            duraiton: 1500,
            easing: "linear",
            queue: false
        }
    });
});


$(document).ready(function(){
    $('#slides').superslides({
        animation: 'fade',
        play: 2500,
        pagination: false
    });

    var type = new Typed(".typed",{
        strings: ["M.S. Computer Information Systems from Boston University", 
                    "B.A. Molecular and Cell Biology from UC Berkeley", 
                    "Passionate New Grad"],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });


    $('.owl-carousel').owlCarousel({
        loop:true,
        item: 4,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    })

    var skillsTopOffset = $(".skillsSection").offset().top;
    var statsTopOffset = $(".statsSection").offset().top;
    var counterUpFinished = false;

    $(window).scroll(function(){
        if(window.pageYOffset > skillsTopOffset - $(window).height() + 200){
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#f1c40f',
                trackColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function(from, to, percent){
                    $(this.el).find('.percent').text(Math.round(percent))
                }
            });
        }

        if(!counterUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200){
            $(".counter").each(function(){
                var element = $(this);
                var value = parseInt(element.text());
                element.countup(value);
            });

            counterUpFinished = true;
        }
    });

    $("[data-fancybox]").fancybox();

    $("#filters a").click(function(){
        $("#filter .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");

        $(".items").isotope({
            filter: selector,
            animationOptions: {
                duraiton: 1500,
                easing: "linear",
                queue: false
            }
        });

        return false;
    });

    $("#navigation li a").click(function(e){
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({scrollTop: targetPosition - 50}, "slow");
    });


    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation(){
        const body = $("body");
        if($(window).scrollTop() >= navTop){
            body.css("padding-top", nav.outerHeight()+"px");
            body.addClass("fixedNav");
        } else {
            body.css("padding-top", 0);
            body.removeClass("fixedNav");
        }
    }
});