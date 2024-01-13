/**
 * @license Apache-2.0
 * @copyright Julio Condor 2024
 */
"use strict";

/**
 * custom modules
 */
import { addEventOnElems } from "./utils.js";

/**
 * Search clear functionality
 */
const /** {HTMLElement} */ $searchField = document.querySelector(
    "[data-search-field]"
  );
const /** {HTMLElement} */ $searchClear = document.querySelector(
    "[data-search-clear]"
  );

$searchClear?.addEventListener("click", function () {
  $searchField.value = "";
});

/**
 * Logo animation in mobile
 */
const $logo = document.querySelector("[data-logo]");

if (!sessionStorage.getItem("logoAnimated")) {
  $logo.classList.add("animate");
  sessionStorage.setItem("logoAnimated", true);
}

/**
 * menu toggle
 */
const /** {HTMLElement} */ $menuWrapper = document.querySelector(
    "[data-menu-wrapper]"
  );
const /** {HTMLElement} */ $menuToggler = document.querySelector(
    "[data-menu-toggler]"
  );

$menuToggler?.addEventListener("click", function () {
  $menuWrapper.classList.toggle("active");
});

/**
 * Hide top bar on scroll down
 */
const /** {HTMLElement} */ $page = document.querySelector("[data-page]");
let /** {number} */ lastScrollPops = 0;

$page?.addEventListener("scroll", function () {
  if (lastScrollPops < this.scrollTop) {
    this.classList.add("header-hide");
  } else {
    this.classList.remove("header-hide");
  }
  lastScrollPops = this.scrollTop;
});

/**
 * Ripple effect
 */

const ripple = function ($rippleElem) {
  $rippleElem.addEventListener("pointerdown", function (event) {
    event.stopImmediatePropagation();
    const /** {HTMLElement} */ $ripple = document.createElement("div");
    $ripple.classList.add("ripple");
    this.appendChild($ripple);
    const removeRipple = () => {
      $ripple.animate({
        opacity: 0
      }, {fill: 'forwards', duration: 200})

      setTimeout(() => {
        $ripple.remove()
      }, 1000)
    }
    this.addEventListener('pointerup', removeRipple)
    this.addEventListener('pointerleave', removeRipple)

    const /**{number} */ rippleSize = Math.max(this.clientWidth, this.clientHeight)
    $ripple.style.top = `${event.layerY}px`
    $ripple.style.left = `${event.layerX}px`
    $ripple.style.width = `${rippleSize}px`
    $ripple.style.height = `${rippleSize}px`

  });
};
const /** {HTMLElement} */ $rippleElems =
    document.querySelectorAll("[data-rippler]");
$rippleElems?.forEach((item) => ripple(item));
