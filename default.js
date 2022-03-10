$(document).ready(function() {
    $(window).scroll(function() {
        // sticky navbar on scroll script
        if(this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if(this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function() {
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");        
    });

    $('.navbar .menu li a').click(function() {
        // applying again smooth scroll on menu item click
        $('html').css("scrollBehavior", "auto");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Project Manager", "Trilingual"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Project Manager", "Trilingual"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });    

    Layout.init();
});

var Layout = function () {
    var handleWorkPopup = function() {
        var overlay = $('.work-popup-overlay'),
            close = $('.work-popup-close'),
            trigger = $('.work-popup-trigger');

        trigger.on('click', function() {
            $(this).find('.work-popup-overlay').removeClass('work-popup-overlay-show');
            $(this).find('.work-popup-overlay').addClass('work-popup-overlay-show');
            
        });

        close.on('click', function(e) {
            e.stopPropagation();
            overlay.removeClass('work-popup-overlay-show');
        });
    }

    return {
        init: function () {            
            handleWorkPopup(); // initial setup for group work popup            
        }
    };
}();

// var slideIndex = 0;
// // showSlides();
// showSlides("bof6");
// showSlides("unite2013");

// function showSlides(slideTag) {
//     var i;
//     var slides;
//     //  = document.getElementsByClassName("mySlides");
    
//     switch (slideTag) {
//         case "bof6":
//             slides = document.getElementsByClassName("bof6");
//             break;
//         case "unite2013":
//             slides = document.getElementsByClassName("mySlides");
//             break;
//         default:
//             // slides = document.getElementsByClassName("mySlides");
//             break;
//     }    
    
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) { slideIndex = 1 }
//     slides[slideIndex - 1].style.display = "block";
//     // setTimeout(showSlides, 2000); // Change image every 2 seconds
//     setInterval(showSlides(slideTag), 3000);
// }

var slideIndex = 1;
showSlides("cslo",slideIndex);
showSlides("bof6",slideIndex);
showSlides("unite2013",slideIndex);
showSlides("injection",slideIndex);

function plusSlides(slideTag, n) {
    showSlides(slideTag, slideIndex += n);
}

function currentSlide(slideTag, n) {
    showSlides(slideTag, slideIndex = n);
}

function showSlides(slideTag, n) {
    var i;
    // var slides = document.getElementsByClassName("mySlides");
    var slides;
    switch (slideTag) {
        case "cslo":
            slides = document.getElementsByClassName("cslo");
            break;
        case "bof6":
            slides = document.getElementsByClassName("bof6");
            break;
        case "unite2013":
            slides = document.getElementsByClassName("unite2013");
            break;
        case "injection":
            slides = document.getElementsByClassName("injection");
            break;
        default:
            // slides = document.getElementsByClassName("mySlides");
            break;
    }    
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
