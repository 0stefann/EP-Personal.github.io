document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
            nextEl: '.next-button',
            prevEl: '.back-button',
        },
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
});
