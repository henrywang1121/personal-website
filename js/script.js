$(document).ready(function(){
    $('#slides').superslides({
        animation: 'fade',
        play: 2500,
        pagination: false
    });

    var type = new Typed(".typed",{
        strings: ["M.S. Computer Information Systems", 
                    "Boston University", "New Grad"],
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
    });
});