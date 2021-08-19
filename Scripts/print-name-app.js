// variables
const btn = document.getElementById("print-button");
const myName = document.querySelector(".name-case-hidden");

// show name funtion
function showName() {
  myName.classList.remove("name-case-hidden");
  myName.classList.add("fade-name-in");
}

// event listener
btn.addEventListener("click", showName);
