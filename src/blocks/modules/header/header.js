import ScrollOut from "scroll-out";
import Splitting from "splitting";


var menu = document.querySelector(".header__list"),
    menuItem = document.querySelectorAll(".header__link"),
    hamburger = document.querySelector(".header__burger");

function closeMenu() {
    hamburger.classList.remove("burger_active");
    menu.classList.remove("menu_active");
}

hamburger.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent click event propagation to the document
    hamburger.classList.toggle("burger_active");
    menu.classList.toggle("menu_active");
});
menuItem.forEach(function (item) {
    item.addEventListener("click", function () {
        closeMenu();
    });
});
document.addEventListener('click', function (event) {
    const headerList = document.querySelector('.header__list.menu_active');
    if (headerList && !headerList.contains(event.target)) {
        closeMenu();
    }
});

//Hidden header
var headerTag = document.querySelector(".header");
var scrollPrev = 0;
window.addEventListener("scroll", function () {
    var scrolled = window.scrollY;
    if (scrolled > 100 && scrolled > scrollPrev) {
        headerTag.classList.add("out");
        headerTag.classList.remove("outBg");
        // closeMenu(); // Р—Р°РєСЂС‹С‚СЊ РјРµРЅСЋ РїСЂРё СЃРєСЂРѕР»Р»Рµ

    } else {
        headerTag.classList.remove("out");
        headerTag.classList.add("outBg");
    }
    scrolled <= 100 ? headerTag.classList.remove("outBg") : headerTag.style.top = 0;
    scrolled == 0 ? headerTag.style.top = '20px' : '';
    scrollPrev = scrolled;
});
window.scrollY >= 20 ? headerTag.style.top = '0' : '';


Splitting();
// Initialize scroll-out
ScrollOut({
    once: true,
    targets: '.scrollCheck', // Для элементов с классом scrollCheck
    onShown: function (element) {
        // Добавляем анимацию только для элементов с классом scrollCheck
        element.classList.add('animate__animated', 'animate__fadeIn');
    }
});

ScrollOut({
    // Для других элементов
    once: true,
    onShown: function (element) {
        // Добавьте здесь свою логику или оставьте пустым, если хотите использовать стандартное поведение
    }
});


setTimeout(() => {
    document.querySelectorAll("h1").forEach((i) => {
        i.setAttribute("data-scroll", "in");
    });
}, 2400);




// Получаем все элементы с классом youtube-video
const youtubeFrames = document.querySelectorAll('.youtube-video');

// Создаем новый Intersection Observer для каждого элемента
youtubeFrames.forEach(youtubeFrame => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Если видео попадает в зону видимости, запускаем его
                youtubeFrame.src += '&autoplay=1';
                // Удаляем слушателя, чтобы он не запустился снова, когда элемент выйдет из зоны видимости
                observer.unobserve(youtubeFrame);
            }
        });
    });

    // Наблюдаем за каждым iframe
    observer.observe(youtubeFrame);
});