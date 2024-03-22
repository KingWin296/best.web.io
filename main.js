console.log('Hello World');
const containerIcon = document.getElementById("boxIcon");
const buttonIcon = document.querySelector("#buttonMore");

buttonIcon.addEventListener("click", changeClass);

function changeClass() {
  containerIcon.classList.toggle("show")
}