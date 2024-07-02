//FAQ js
let bod = document.getElementById("FAQ");

let main_height = 980;
let clickables = document.querySelectorAll(".clickable");
let extContents = document.querySelectorAll(".question_extended");
clickables.forEach((elem, index) => {
  let ext = extContents[index];

  elem.addEventListener("click", function () {
    if (elem.textContent === "+") {
      elem.textContent = "-";
      ext.style.display = "block";
      main_height += 493;
    } else {
      elem.textContent = "+";
      ext.style.display = "none";
      if (main_height !== 980) {
        main_height -= 493;
      }
    }
    bod.style.height = main_height + "px";
  });
});
function hello() {
  alert("Hello from external script");
}

const emailInput = document.getElementById("email");
const submitButton = document.getElementById("newsletter-button");

// Слушаем событие ввода в поле email
emailInput.addEventListener("input", () => {
  // Если поле email не пустое, разблокируем кнопку
  if (emailInput.value.trim() !== "") {
    submitButton.disabled = false;
    submitButton.style.backgroundColor = "#1F87FF"; // Голубой цвет
    submitButton.style.color = "white";
    //submitButton.style.border-
  } else {
    submitButton.disabled = true;
    submitButton.style.backgroundColor = ""; // Сбрасываем цвет
  }
});
