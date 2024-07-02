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
