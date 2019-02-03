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
});