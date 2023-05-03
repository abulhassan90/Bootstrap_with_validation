"use strict";

/**********************
 * AOS Animate
 ***********************/
function aos_init() {
  AOS.init({
    duration: 1000,
    easing: "ease-in",
    once: true,
    mirror: false,
  });
}
window.addEventListener("load", (event) => {
  aos_init();
});

/**********************
 * Navbar Scroll
 **********************/

const navigation = document.querySelector("#navbar");

if (navigation) {
  document.addEventListener("scroll", () => {
    if (window.pageYOffset > 50) {
      navigation.classList.add("sticky");
    } else {
      navigation.classList.remove("sticky");
    }
  });
}

/**********************
 * Input Password Show/Hide
 **********************/

const password = document.querySelector("#floatingPassword");
const togglePassword = document.querySelector("#togglePassword");

togglePassword?.addEventListener("click", (event) => {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  event.currentTarget.classList.toggle("bi-eye");
});

/**********************
 * Input Phone Validation
 ***********************/

function isNumberKey(event) {
  let charCode = event.which ? event.which : event.keyCode;

  if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
    return false;
  return true;
}

/**********************
 * Video Embed
 ***********************/
const videoLinks = document.querySelectorAll(".videos .video-link");

if (videoLinks) {
  const videoModal = document.querySelector("#video-modal");
  const videoModalTitle = document.querySelector("#videoPopupLabel");
  const myModal = document.getElementById("videoPopup");

  myModal?.addEventListener("show.bs.modal", () => {
    videoLinks?.forEach((video) => {
      video?.addEventListener("click", (event) => {
        const videoId = event.currentTarget.dataset.id;
        const videoSrc = `https://www.youtube.com/embed/${videoId}?rel=0`;
        videoModal.setAttribute("src", videoSrc);
        videoModalTitle.innerHTML =
          event.currentTarget.lastElementChild.lastElementChild.textContent;
      });
    });
  });

  myModal?.addEventListener("hide.bs.modal", () => {
    videoModal.setAttribute("src", "");
  });
}
