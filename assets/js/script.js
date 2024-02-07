'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () { navbar.classList.toggle("active"); }

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () { navbar.classList.remove("active"); }

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});


window.onload = function() {
  // First animation for 'animatedDiv'
  var div = document.getElementById('animatedDiv');
  div.style.width = '300px';
  div.style.height = '470px';

  // Second animation for 'hero-title' and feature items
  var featuresItems = document.querySelectorAll('.features-item');
  var title = document.querySelector('.hero-title');

  // Check if an element is in the viewport
  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Add 'show' class to elements in viewport
  function showElements() {
    featuresItems.forEach(function(item) {
      if (isInViewport(item)) {
        item.classList.add('show');
      }
    });

    // Trigger animation for 'hero-title' once it's in the viewport
    if (isInViewport(title)) {
      title.style.opacity = '1';
    }
  }

  // Initial check when page loads
  showElements();

  // Check again when the window is scrolled
  window.addEventListener('scroll', showElements);
};

