var menu = document.querySelector(".header__list"),

    menuItem = document.querySelectorAll(".header__link"),

    hamburger = document.querySelector(".header__burger");



function closeMenu() {

    hamburger.classList.remove("burger_active");

    menu.classList.remove("menu_active");

    // document.querySelector('.body').classList.remove("scroll-block");

}



hamburger.addEventListener("click", function (event) {

    event.stopPropagation(); // Prevent click event propagation to the document

    hamburger.classList.toggle("burger_active");

    menu.classList.toggle("menu_active");

    // document.querySelector('.body').classList.toggle("scroll-block");

});



menuItem.forEach(function (item) {

    item.addEventListener("click", function () {

        closeMenu();

    });

});



document.addEventListener('click', function (event) {

    const headerList = document.querySelector('.header__list.menu_active');

    // Check if the clicked element is outside the .header__list.menu_active

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