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

document.getElementById('uploadForm').addEventListener('submit', async (e) => {
e.preventDefault();
try {
 const formData = new FormData();
 formData.append('file', document.getElementById('imageFile').files[0]);

 const response = await fetch('http://127.0.0.1:5000/predict', {
  method: 'POST',
  body: formData,
});

if (!response.ok) {
  throw new Error('failed to fetch prediction froms server');
}

const result = await response.json();
console.log("Server Response:", result); // Debug log
document.getElementById('result').innerText = 'Predicted Class: ' + result.class;
} catch (error) {
console.error("Error:", error); // Debug log
document.getElementById('result').innerText = 'An error occurred: ' + error.message;
}
});


/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header active when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElem = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElem);