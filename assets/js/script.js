//! IMAGE EXPANSION
// Get all the images in the section
var images = document.querySelectorAll(".unexpandedImageContainer img");

// Add click event listener to each image
images.forEach(function (image) {
  image.addEventListener("click", function () {
    expandImage(image);
  });
});

function expandImage(image) {
  // Create a modal element
  var modal = document.createElement("div");
  modal.className = "expandedImageModal";

  // Create an image element inside the modal
  var modalImg = document.createElement("img");
  modalImg.src = image.src;
  modalImg.alt = image.alt;
  modal.appendChild(modalImg);

  // Append the modal to the document body
  document.body.appendChild(modal);

  // When the user clicks anywhere outside of the modal, close it
  modal.addEventListener("click", function () {
    modal.remove();
  });
}

//! RESPONSIVE NAVBAR

const navEl = document.querySelector(".nav");
const hamburgerEl = document.querySelector(".hamburger");
const navItemEls = document.querySelectorAll(".navItem");

hamburgerEl.addEventListener("click", () => {
  navEl.classList.toggle("nav--open");
  hamburgerEl.classList.toggle("hamburger--open");
});

navItemEls.forEach((navItemEl) => {
  navItemEl.addEventListener("click", () => {
    navEl.classList.toggle("nav--open");
    hamburgerEl.classList.toggle("hamburger--open");
  });
});

const clientBtnEls = document.querySelectorAll(".clientBtn");
const clientQuoteEls = document.querySelectorAll(".clientQuote");

clientBtnEls.forEach((clientBtnEl, index) => {
  clientBtnEl.addEventListener("click", () => {
    clientQuoteEls[index].classList.toggle("clientQuote--open");
  });
});
