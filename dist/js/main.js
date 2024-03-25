/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/modules/faq/faq.js":
/*!***************************************!*\
  !*** ./src/blocks/modules/faq/faq.js ***!
  \***************************************/
/***/ (() => {

document.addEventListener("DOMContentLoaded", function () {
  var checkAccordion = document.querySelector(".accordion");
  if (checkAccordion) {
    var _btns = document.querySelectorAll(".accordion__h4");
    _btns.forEach(function (btn) {
      console.log("click");
      btn.addEventListener("click", function () {
        if (!this.classList.contains("acc-active")) {
          // btns.forEach((btn) => {
          //   btn.classList.remove("acc-active");
          // });
          this.classList.add("acc-active");
        } else {
          this.classList.remove("acc-active");
        }
      });
    });
  }
  var tableAccordion = document.querySelector(".accordion_table");
  var btns = document.querySelectorAll(".accordion__h4");
});

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/***/ (() => {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var scroll_out__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scroll-out */ "./node_modules/scroll-out/lib/index.js");
/* harmony import */ var scroll_out__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(scroll_out__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var splitting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! splitting */ "./node_modules/splitting/dist/splitting.js");
/* harmony import */ var splitting__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(splitting__WEBPACK_IMPORTED_MODULE_1__);


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
  var headerList = document.querySelector('.header__list.menu_active');
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
splitting__WEBPACK_IMPORTED_MODULE_1___default()();
// Initialize scroll-out
scroll_out__WEBPACK_IMPORTED_MODULE_0___default()({
  once: true,
  targets: '.scrollCheck',
  // Для элементов с классом scrollCheck
  onShown: function onShown(element) {
    // Добавляем анимацию только для элементов с классом scrollCheck
    element.classList.add('animate__animated', 'animate__fadeIn');
  }
});
scroll_out__WEBPACK_IMPORTED_MODULE_0___default()({
  // Для других элементов
  once: true,
  onShown: function onShown(element) {
    // Добавьте здесь свою логику или оставьте пустым, если хотите использовать стандартное поведение
  }
});
setTimeout(function () {
  document.querySelectorAll("h1").forEach(function (i) {
    i.setAttribute("data-scroll", "in");
  });
}, 2400);

// Получаем все элементы с классом youtube-video
var youtubeFrames = document.querySelectorAll('.youtube-video');

// Создаем новый Intersection Observer для каждого элемента
youtubeFrames.forEach(function (youtubeFrame) {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
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

/***/ }),

/***/ "./src/blocks/modules/sliders/sliders.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/sliders/sliders.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.mjs");

var swiperReviews = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](".swiperReviews", {
  autoHeight: true,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiperReviews__btns .swiper-button-next",
    prevEl: ".swiperReviews__btns .swiper-button-prev"
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});
var swiperReviews = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](".swiperReviews_retreat", {
  autoHeight: true,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiperReviewsRetreat__btns .swiper-button-next",
    prevEl: ".swiperReviewsRetreat__btns .swiper-button-prev"
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});
var swiperAnounce = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](".swiperAnounce", {
  effect: 'fade',
  autoHeight: true,
  navigation: {
    nextEl: ".swiperAnounce__btns .swiper-button-next",
    prevEl: ".swiperAnounce__btns .swiper-button-prev"
  }
});
var swiperReviewsVideo = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](".swiperReviewsVideo", {
  autoHeight: true,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiperReviewsVideo__btns .swiper-button-next",
    prevEl: ".swiperReviewsVideo__btns .swiper-button-prev"
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});
var swiperCommunity = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](".swiperCommunity", {
  autoHeight: true,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiperCommunity__btns .swiper-button-next",
    prevEl: ".swiperCommunity__btns .swiper-button-prev"
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});
var swiperRegards = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](".swiperRegards", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiperRegards__btns .swiper-button-next",
    prevEl: ".swiperRegards__btns .swiper-button-prev"
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});
var swiperProducts = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](".swiperProducts", {
  autoHeight: true,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiperProducts__btns .swiper-button-next",
    prevEl: ".swiperProducts__btns .swiper-button-prev"
  },
  breakpoints: {
    1024: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 40
    }
  }
});
var swiperProducts = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](".swiperHowGo", {
  autoHeight: true,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiperHowGo__btns .swiper-button-next",
    prevEl: ".swiperHowGo__btns .swiper-button-prev"
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 40
    }
  }
});

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_sliders_sliders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/sliders/sliders */ "./src/blocks/modules/sliders/sliders.js");
/* harmony import */ var _modules_faq_faq__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/faq/faq */ "./src/blocks/modules/faq/faq.js");
/* harmony import */ var _modules_faq_faq__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_faq_faq__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_3__);





/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_import_components__WEBPACK_IMPORTED_MODULE_1__);



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgulp_scss_starter"] = self["webpackChunkgulp_scss_starter"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/js/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map