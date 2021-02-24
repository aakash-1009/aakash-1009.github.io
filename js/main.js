// -----------------nav button--------------------
const open = document.getElementById("open");
const close = document.getElementById("close");
const header = document.querySelector(".header");

open.addEventListener("click", () => header.classList.add("show-nav"));
close.addEventListener("click", () => header.classList.remove("show-nav"));

// -----------------nav button ends--------------------
// mobile nav--------------------
const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')

open_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible'))
})

close_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
})
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
      box.style.backgroundPosition = `${-j * 65}px ${-i * 65}px`;
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
