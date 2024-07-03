//FAQ js
let bod = document.getElementById("FAQ");

let main_height = 980;
let clickables = document.querySelectorAll(".clickable");
let extContents = document.querySelectorAll(".question_extended");

clickables.forEach((elem, index) => {
  let ext = extContents[index];

  elem.addEventListener("click", function () {
    if (elem.textContent === "▼") {
      elem.textContent = "▲";
      ext.classList.add("expanded");
      ext.style.display = "block";
      setTimeout(() => {
        ext.style.maxHeight = ext.scrollHeight + "px";
        ext.style.opacity = 1;
      }, 10);
      main_height += 493;
    } else {
      elem.textContent = "▼";
      ext.style.maxHeight = 0;
      ext.style.opacity = 0;
      setTimeout(() => {
        ext.classList.remove("expanded");
        ext.style.display = "none";
      }, 500);
      if (main_height !== 980) {
        main_height -= 493;
      }
    }
    bod.style.height = main_height + "px";
  });
});

const maxHeight = document.getElementsByTagName("body");
let currentHeight = 500;
const advTitle = document.querySelector(".adv__title");
line.style.height = currentHeight + scrollY + "px";
document.addEventListener("scroll", function () {
  const line = document.getElementById("line");
  const scrollY = window.scrollY || window.pageYOffset;
  if (scrollY > maxHeight) {
    scrollY = maxHeight;
  }
  line.style.height = currentHeight + scrollY + "px";
  const rect = advTitle.getBoundingClientRect();
  if (rect.bottom < 800 && rect.bottom > 0) {
    const distanceToCircle = rect.top - window.innerHeight / 2; // Adjust window.innerHeight as needed

    if (distanceToCircle > 0) {
      // Delay showing circle based on the distance
      setTimeout(function () {
        circle.style.display = "block";
        circle.style.animationPlayState = "running";
      }, distanceToCircle + 1000);
    } else {
      circle.style.display = "block"; // Show immediately if already past the threshold
      circle.style.animationPlayState = "running";
    }
  } else {
    circle.style.display = "none";
  }
});

const cookie_button = document.querySelector(".cookie-popup__button");
const cookie_popup = document.querySelector("#cookie-popup");

cookie_button.addEventListener("click", function () {
  cookie_popup.style.display = "None";
});
