// -----------------nav button--------------------
const open = document.getElementById("open");
const close = document.getElementById("close");
const header = document.querySelector(".header");

open.addEventListener("click", () => header.classList.add("show-nav"));
close.addEventListener("click", () => header.classList.remove("show-nav"));

// -----------------nav button ends--------------------
// ---------------typing animation-------------------
var typed = new Typed(".typing", {
  strings: ["Developer", "Student", "Designer", "Freelancer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});
// ---------------typing animation ends-------------------
// -------------------------home img-----------------
const boxesContainer = document.getElementById("boxes");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => boxesContainer.classList.toggle("big"));

function createBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.backgroundPosition = `${-j * 75}px ${-i * 75}px`;
      boxesContainer.appendChild(box);
    }
  }
}
createBoxes();
// -------------------------home img end-----------------
