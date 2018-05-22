//Product para more than 145 px height will hede and when user click on down arrow it will show rest text.
function productMore() {
    $(".more").each(function () {
        var myHeight = $(this).find(".cp-product-content").height();
        console.log(myHeight);
        if (myHeight < 145) {
            $(this).find(".more-anchor").hide();
        } else {
            $(this).css({
                "height": "146px"
            });
        }
    });
}

// function for people currently serching software solution

var searchItems = [
    "Revenue Leakage Analysis in Healthcare industry",
    "Churn Management in Telecom Industry",
    "Lorem ipsum dolor sit amet",
    "consectetur adipiscing elit",
    "Eu hendrerit lorem scelerisque",
    "Aenean ornare lectus sed ex luctus consectetur"
];
var arryData = 0;

function updateCurrentSearch() {
    var firstData;
    var secondData;
    if (searchItems[arryData] != "undefined") {
        firstData = searchItems[arryData];
    } else {
        firstData = "";
    }
    console.log(searchItems[arryData + 1]);
    if (searchItems[arryData + 1] === undefined) {
        secondData = "";
    } else {
        secondData = searchItems[arryData + 1];
    }
    if (secondData == "") {
        $(".search-text li").first().find("a").text(firstData);
        $(".search-text li").last().find("a").text(secondData);
    } else {
        $(".search-text li").first().find("a").text(firstData + ", ");
        $(".search-text li").last().find("a").text(secondData + "... ");
    }
    arryData += 1;
    arryData = arryData + 1;
    if (arryData >= searchItems.length) {
        arryData = 0;
    }

}

var winWidth = $(window).width();
$(document).ready(function () {
    //productMore function will work on only from 756 px screen resolution.

    if (winWidth < 768) {
        productMore();
    }

    // Function for autocomplete search field
    $(function () {
        var availableTags = [
            "Customer Advocacy (15)",
            "Customer Experience (17)",
            "Customer Engagement (9)",
            "Customer Interaction (11)",
            "Customer Satisfaction (21)",
            "Customer Service (67)",
            "Customer Success (35)",
            "Customer Advocacy (15)",
            "Customer Experience (17)",
            "Customer Engagement (9)",
            "Customer Interaction (11)",
            "Customer Satisfaction (21)",
            "Customer Service (67)",
            "Customer Success (35)",
            "Customer Advocacy (15)",
            "Customer Experience (17)",
            "Customer Engagement (9)",
            "Customer Interaction (11)",
            "Customer Satisfaction (21)",
            "Customer Service (67)",
            "Customer Success (35)"
        ];
        var existingSolution = [
            "Customer Advocacy (15)",
            "Customer Experience (17)",
            "Customer Engagement (9)",
            "Customer Interaction (11)",
            "Customer Satisfaction (21)",
            "Customer Service (67)",
            "Customer Success (35)",
            "Customer Advocacy (15)",
            "Customer Experience (17)",
            "Customer Engagement (9)",
            "Customer Interaction (11)",
            "Customer Satisfaction (21)",
            "Customer Service (67)",
            "Customer Success (35)",
            "Customer Advocacy (15)",
            "Customer Experience (17)",
            "Customer Engagement (9)",
            "Customer Interaction (11)",
            "Customer Satisfaction (21)",
            "Customer Service (67)",
            "Customer Success (35)"
        ];
        $(".cp-bpfield").autocomplete({
            source: availableTags
        });
        $(".cp-existing-solution").autocomplete({
            source: existingSolution
        });
        
    });

    // Function for search industry
    $(function () {
        $("#cp-industry").chosen({
            placeholder_text_single: "Industry *"
        });
    });


    // Click function for mobile menu
    $('.cp-home-icon').click(function () {
        $(this).toggleClass('open');
        // $('body').toggleClass('move-body-right');
        // $(".main-nav").toggleClass('move-right-zero');
        if ($("body").hasClass("moved-right")) {
            $(".main-nav").animate({
                "right": "-254px"
            });
            $(".sticky-header").animate({
                "left": "0px",
            });
            $("body").animate({
                "right": "0px"
            }, function () {
                $('body').css({
                    "position": "inherit",
                    "overflow": "visible"
                }).removeClass("moved-right");
            });
        } else {
            $(".sticky-header").animate({
                "left": "-254px"
            });
            $('body').css({
                    "position": "absolute",
                    "overflow": "hidden",
                    "width": "100%"
                })
                .animate({
                    "right": "254px"
                })
                .addClass("moved-right");
            $(".main-nav").animate({
                "right": "0px"
            });
        }
    });

    // Inside page mobile menu

    $('.cp-white-icon').click(function () {
        $(this).toggleClass('open');
        if ($("body").hasClass("moved-right")) {
            $(".inner-mobile-header").animate({
                "right": "-254px"
            });
            $("body").animate({
                "right": "0px"
            }, function () {
                $('body').css({
                    "position": "inherit",
                    "overflow": "visible"
                }).removeClass("moved-right");
            });
        } else {
            $('body').css({
                    "position": "absolute",
                    "overflow": "hidden",
                    "width": "100%"
                })
                .animate({
                    "right": "254px"
                })
                .addClass("moved-right");
            $(".inner-mobile-header").animate({
                "right": "0px"
            });
        }
    });

    //

    $(".cp-software-recommendations").click(function(){
        $(".cp-right-form-content").removeClass("d-none");
        $(".cp-right-form-content").animate({
            "left": "0px"
        });
    });
    $(".cp-backhome-arrow").click(function(){        
        $(".cp-right-form-content").animate({
            "left": $(window).width() + 254
        },function(){
            $(".cp-right-form-content").addClass("d-none");   
        });
    });
    //initialize first two search array valy after document load

    $(".search-text li").first().find("a").text(searchItems[0] + ", ");
    $(".search-text li").last().find("a").text(searchItems[1] + "... ");

    //Smooth scroll function after clicking menu anchor
    (function ($) {
        "use strict"; // Start of use strict

        // Smooth scrolling using jQuery easing
        $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    if ($(window).width() < 768) {
                        $(".home-header").stop().delay(300).animate({
                            "left": "-254px"
                        });
                    }
                    $('html, body').animate({
                        scrollTop: (target.offset().top - 80)
                    }, 1000, "easeInOutExpo", function () {
                        // if ($(window).width() < 768) {
                        //     $('#nav-icon').removeClass('open');
                        //     $(".main-nav").animate({
                        //         "right": "-254px"
                        //     });
                        //     $(".sticky-header").animate({
                        //         "left": "0px",
                        //     });
                        //     $("body").animate({
                        //         "right": "0px"
                        //     }, function () {
                        //         $('body').css({
                        //             "position": "inherit",
                        //             "overflow": "visible"
                        //         }).removeClass("moved-right");
                        //     });
                        // }
                    });
                    return false;
                }
            }
        });

        // Closes responsive menu when a scroll trigger link is clicked
        $('.js-scroll-trigger').click(function () {
            $('.navbar-collapse').collapse('hide');
        });

        // Activate scrollspy to add active class to navbar items on scroll
        $('body').scrollspy({
            target: '#mainNav',
            offset: 80
        });

    })(jQuery); // End of use strict

});
/*$(window).resize(function () {
    //productMore function will work on only from 756 px screen resolution.
    winWidth = $(window).width();
    $(".more").removeClass("less");
    if (winWidth < 768) {
        productMore();
    } else {
        $(".more").css("height", "auto").removeClass("less");
    }
    if(winWidth>=992){
        $(".cp-right-form-content").css({
            "position": "relative",
            "height": "auto",
            "overflow": "visible",
            "left": "auto",
            "top": "auto"
        });
    }else{
        $(".cp-right-form-content").css({
            "position": "fixed",
            "height": "100vh",
            "overflow-y": "scroll",
            "left": $(window).width()+254,
            "top": "0px"
        });
    }
});*/


$(".more-anchor").click(function (e) {
    // Show hide extra content
    var myHeight = $(this).parent().find(".cp-product-content").height();
    console.log("a");
    e.preventDefault();
    if ($(this).parent().hasClass("less")) {
        $(this).parent().animate({
            height: 146
        }).removeClass("less");
    } else {
        $(this).parent().animate({
            height: myHeight + 15
        }).addClass("less");
    }
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 80) {
        $(".home-header").addClass("sticky-header");
    } else {
        $(".home-header").removeClass("sticky-header");
    }
});


window.setInterval(function () {
    /// call your function here
    updateCurrentSearch();
}, 3000);


//Bookmark

$('.cp-bookmark').click(function() {
    $(this).toggleClass("fa-star");
    $(this).toggleClass("fa-star-o");
});


//Modal load on page load

$(window).on('load',function(){
    $('#signupmodal').modal('show');
});


$('.view-evidences').click(function(e) {
    e.preventDefault();
    alert("hi");
})
