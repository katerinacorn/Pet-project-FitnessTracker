new Swiper('.about__slider',{

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    slideToClickedSlide: true,

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    mousewheel: {
        sensitivity: 2,
    },

    slidesPerView: 'auto',
    watchOverflow: true,
    spaceBetween: 30,
    centeredSlides: true,
    initialSlide: 3,
    loop: true,
    loopedSlides: 7,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    speed: 1200,

    a11y: {
        enabled: true,
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
        firstSlideMessage: 'This is the first slide',
        lastSlideMessage: 'This is the last slide',
    },

    /* breakpoints: {
        320: {
            slidesPerView: 1,
        },

        480: {
            slidesPerView: 2,
        },
        
        992: {
            slidesPerView: 2.5,
        },
    }, */

    




});




/*
    preloadImages: false,
    lazy: {
        loadOnTransitionStart: false,
        loadOnPrevNext: true,
    },

    a11y: {
        enabled: true,
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
        firstSlideMessage: 'This is the first slide',
        lastSlideMessage: 'This is the last slide',
    },
});



 */