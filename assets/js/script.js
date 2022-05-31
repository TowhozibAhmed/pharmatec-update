(function ($) {

    'use strict';

    /*-------------------------------------------
        Mobile Menu
    --------------------------------------------- */

    $('.mobile-bar a').on('click', function () {
        $('.sidebar-area').toggleClass('active');
    });

    // team-tab tab
    $('.slide-close a').on('click', function () {
        $('.sidebar-area').toggleClass('active');
    });

    $('.team-tab-nav .team-wrap:first').addClass('active');
    $('.team-tab-content .team-content').hide();
    $('.team-tab-content .team-content:first').show();

    $('.team-tab-nav .team-wrap').mouseenter(function () {
        $('.team-tab-nav .team-wrap').removeClass('active');
        $(this).addClass('active');
        $('.team-tab-content .team-content').hide();

        var activeTab = $(this).attr('data-id');
        console.log(`.team-content#${activeTab}`);
        $(`.team-content#${activeTab}`).fadeIn();
        return false;
    });

    // we-thumb-wrap tab
    $('.we-thumb-wrap .thumb').hide();
    $('.we-thumb-wrap .thumb:first').show();
    $('.what-we-do-tabs .what-we-do-content-3').hide();
    $('.what-we-do-tabs .what-we-do-content-3:first').show();

    $('.we-nav-wrap .home-process').mouseenter(function () {
        $('.we-thumb-wrap .thumb').hide();
        // $(this).addClass('active');
        $('.what-we-do-tabs .what-we-do-content-3').hide();

        var activeTab = $(this).attr('data-id');
        $(`.we-thumb-wrap .thumb#${activeTab}`).fadeIn();
        $(`.what-we-do-tabs .what-we-do-content-3[data-id="${activeTab}"]`).fadeIn();
        return false;
    });

    $('.we-nav-wrap .home-process').mouseleave(function () {
        $('.we-thumb-wrap .thumb').hide();
        $('.what-we-do-tabs .what-we-do-content-3').hide();
        $('.we-thumb-wrap .thumb:first').show();
        $('.what-we-do-tabs .what-we-do-content-3:first').show();
        return false;
    });


    /*-------------------------------------------
        Sticky Header
    --------------------------------------------- */

    let win = $(window);
    let sticky_id = $(".header-area");
    win.on('scroll', function () {
        let scroll = win.scrollTop();
        if (scroll < 245) {
            sticky_id.removeClass("sticky-header");
        } else {
            sticky_id.addClass("sticky-header");
        }
    });

    /*------------------------------------
        Data-Background
    --------------------------------------*/
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });

    $("[data-bg-color]").each(function () {
        $(this).css("background", $(this).attr("data-bg-color"))
    });


    if (jQuery(".gallery-popup").length > 0) {
        new VenoBox({
            selector: '.gallery-popup',
            numeration: true,
            infinigall: true,
            share: true,
            spinner: 'rotating-plane'
        });
    }

    // challenge-slider-active
    if (jQuery(".challenge-slider-active .swiper-container").length > 0) {
        let challengeSlider = new Swiper('.challenge-slider-active .swiper-container', {
            slidesPerView: 3,
            slidesPerColumn: 1,
            paginationClickable: true,
            loop: true,
            spaceBetween: 30,

            autoplay: {
                delay: 3000,
            },

            scrollbar: {
                el: '.swiper-scrollbar',
                hide: true,
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            a11y: false,

            breakpoints: {
                320: {
                    slidesPerView: 'auto',
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 3,
                },
            },
        })
    }

    // challenge-slider-active
    if (jQuery(".news-slider-active .swiper-container").length > 0) {
        let newsSlider = new Swiper('.news-slider-active .swiper-container', {
            slidesPerView: 3,
            slidesPerColumn: 1,
            paginationClickable: true,
            loop: true,
            spaceBetween: 30,

            autoplay: {
                delay: 3000,
            },

            scrollbar: {
                el: '.swiper-scrollbar',
                hide: true,
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            a11y: false,

            observer: true,
            observeParents: true,

            breakpoints: {
                320: {
                    slidesPerView: 'auto',
                },
                768: {
                    slidesPerView: 'auto',
                },
                1024: {
                    slidesPerView: 'auto',
                },
                1200: {
                    slidesPerView: 'auto',
                },
            },
        })
    }
    // challenge-slider-active

    if (jQuery(".value-slider-active .swiper-container").length > 0) {
        let valueSlider = new Swiper('.value-slider-active .swiper-container', {
            slidesPerView: 3,
            slidesPerColumn: 1,
            paginationClickable: true,
            loop: true,
            spaceBetween: 30,

            autoplay: {
                delay: 3000,
            },

            scrollbar: {
                el: '.swiper-scrollbar',
                hide: true,
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            a11y: false,

            observer: true,
            observeParents: true,

            breakpoints: {
                320: {
                    slidesPerView: 'auto',
                },
                768: {
                    slidesPerView: 'auto',
                },
                1024: {
                    slidesPerView: 'auto',
                },
                1200: {
                    slidesPerView: 'auto',
                },
            },
        })
    }

    if (jQuery(".member-slider-active .swiper-container").length > 0) {
        let memberSlider = new Swiper('.member-slider-active .swiper-container', {
            slidesPerView: 3,
            slidesPerColumn: 1,
            paginationClickable: true,
            loop: true,
            spaceBetween: 30,

            autoplay: {
                delay: 3000,
            },

            scrollbar: {
                el: '.swiper-scrollbar',
                hide: true,
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            a11y: false,

            observer: true,
            observeParents: true,

            breakpoints: {
                320: {
                    slidesPerView: 'auto',
                },
                768: {
                    slidesPerView: 'auto',
                },
                1024: {
                    slidesPerView: 'auto',
                },
                1200: {
                    slidesPerView: 'auto',
                },
            },
        })
    }

    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: true, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 20, // offset (in px) from the original trigger point
        //delay: 0, // values from 0 to 3000, with step 50ms
        // duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });


    let animated = function animated() {
        $('[data-animation]').each(function () {
            let anim = $(this).data('animation');
            let delay = $(this).data('delay');
            let duration = $(this).data('duration');

            $(this).removeClass('anim' + anim)
                .addClass(anim + ' animated')
                .css({
                    webkitAnimationDelay: delay,
                    animationDelay: delay,
                    webkitAnimationDuration: duration,
                    animationDuration: duration
                })
                .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                    $(this).removeClass(anim + ' animated');
                });
        });
    };
    animated();

    let tabEl = document.querySelectorAll('button[data-bs-toggle="tab"]');
    tabEl.forEach((Element) => {
        console.log(Element)
        Element.addEventListener('hidden.bs.tab', function (event) {
            $('[data-animation]').removeClass('animated');
        });
        Element.addEventListener('shown.bs.tab', function (event) {
            animated();
        });
    });

})(jQuery);
