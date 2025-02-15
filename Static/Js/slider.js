

var swiper = new Swiper(".mySwiper", {
    effect: "cube",
    grabCursor: true,
    speed: 2000,
    cubeEffect: {
        shadow: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
    },
});










// Testimonial Slider
var testimonialSlider = new Swiper('.testimonial-slider', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true,
    speed: 2000,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
