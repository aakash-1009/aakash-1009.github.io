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
// -------------hover animation--------------------
const letters = document.querySelectorAll("span.blast");
letters.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.classList.toggle("rubberBand");
    // console.log("enterd")
  });
  item.addEventListener("mouseout", () => {
    item.classList.toggle("rubberBand");
  });
});
// -------------------hover animation ends------------------------
// // -------------about section tabs start---------------
// // (() => {
// console.log("hi");
// const aboutContainer = document.querySelector(".about-container");
// console.log(aboutContainer);

// const tabsContainer = document.querySelectorAll(".tabs-item");
// tabsContainer.addEventListener("click", (event) => {
//   console.log("hi");
//   console.log(event.target);
// });
// // })();

// -------------about section tabs ends---------------
