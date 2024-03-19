import Swiper from 'swiper/bundle';


var swiperReviews = new Swiper(".swiperReviews", {
    autoHeight: true,
    slidesPerView: 1,
    navigation: {
        nextEl: ".swiperReviews__btns .swiper-button-next",
        prevEl: ".swiperReviews__btns .swiper-button-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});

var swiperAnounce = new Swiper(".swiperAnounce", {
    effect: 'fade',
    autoHeight: true,
    navigation: {
        nextEl: ".swiperAnounce__btns .swiper-button-next",
        prevEl: ".swiperAnounce__btns .swiper-button-prev",
    },
});

var swiperReviewsVideo = new Swiper(".swiperReviewsVideo", {
    autoHeight: true,
    slidesPerView: 1,
    navigation: {
        nextEl: ".swiperReviewsVideo__btns .swiper-button-next",
        prevEl: ".swiperReviewsVideo__btns .swiper-button-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});

var swiperCommunity = new Swiper(".swiperCommunity", {
    autoHeight: true,
    slidesPerView: 1,
    navigation: {
        nextEl: ".swiperCommunity__btns .swiper-button-next",
        prevEl: ".swiperCommunity__btns .swiper-button-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});

var swiperRegards = new Swiper(".swiperRegards", {
    slidesPerView: 1,
    navigation: {
        nextEl: ".swiperRegards__btns .swiper-button-next",
        prevEl: ".swiperRegards__btns .swiper-button-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});


var swiperProducts = new Swiper(".swiperProducts", {
    autoHeight: true,
    slidesPerView: 1,
    navigation: {
        nextEl: ".swiperProducts__btns .swiper-button-next",
        prevEl: ".swiperProducts__btns .swiper-button-prev",
    },
    breakpoints: {
        1024: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
    },
});

