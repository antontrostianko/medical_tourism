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
let currentHeight = 550;
const advTitle = document.querySelector(".adv__title");
const aboutTitle = document.querySelector(".about__title");
line.style.height = currentHeight + scrollY + "px";
document.addEventListener("scroll", function () {
  const line = document.getElementById("line");
  const scrollY = window.scrollY || window.pageYOffset;
  if (scrollY > maxHeight) {
    scrollY = maxHeight;
  }
  line.style.height = currentHeight + scrollY + "px";
  const advPos = advTitle.getBoundingClientRect();
  if (advPos.bottom < 1000 && advPos.bottom > -200) {
    const distanceToCircle = advPos.top - window.innerHeight / 2;
    if (distanceToCircle > 0) {
      setTimeout(function () {
        circle.style.display = "block";
        circle.style.animationPlayState = "running";
      }, distanceToCircle);
    } else {
      circle.style.display = "block";
      circle.style.animationPlayState = "running";
    }
  } else {
    circle.style.display = "none";
  }
  const aboutPos = aboutTitle.getBoundingClientRect();
  if (aboutPos.bottom < 800 && aboutPos.bottom > 0) {
    const distanceToCircle2 = aboutPos.top - window.innerHeight / 2;
    if (distanceToCircle2 > 0) {
      setTimeout(function () {
        circle2.style.display = "block";
        circle2.style.animationPlayState = "running";
      }, distanceToCircle2);
    } else {
      circle2.style.display = "block";
      circle2.style.animationPlayState = "running";
    }
  } else {
    circle2.style.display = "none";
  }
});

const cookie_button = document.querySelector(".cookie-popup__button");
const cookie_popup = document.querySelector("#cookie-popup");

cookie_button.addEventListener("click", function () {
  cookie_popup.style.display = "None";
});
