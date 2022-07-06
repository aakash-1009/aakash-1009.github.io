// preloader
window.addEventListener("load", () => {
  document.querySelector(".preloader").classList.add("fade-out");
  setTimeout(() => {
    document.querySelector(".preloader").style.display = "none";
  }, 1600);
});
//--------------- custom cursor-------------------

const cursor = document.querySelector(".cursor");
const cursorLazy = document.querySelector(".cursor-lazy");
var editCursor = function editCursor(event) {
  // console.log("running")
  // console.log(event.clientX)
  // console.log(event.clientY)
  // cursor.style.left=event.clientX + "px"
  // cursor.style.top=event.clientY + "px"
  // cursorLazy.style.left=event.clientX + "px"
  // cursorLazy.style.top=event.clientY + "px"
  cursor.setAttribute(
    "style",
    "top: " + (event.pageY ) + "px; left: " + (event.pageX) + "px;"
  );
  cursorLazy.setAttribute(
    "style",
    "top: " + (event.pageY) + "px; left: " + (event.pageX) + "px;"
  );
};
window.addEventListener("mousemove", editCursor);
//---------------scroll Bar---------------
let progress = document.querySelector(".progressBar");
// fucntion to get the height of document that works in all browser
function getDocHeight() {
  var D = document;
  return Math.max(
    Math.max(D.body.scrollHeight, D.documentElement.scrollHeight),
    Math.max(D.body.offsetHeight, D.documentElement.offsetHeight),
    Math.max(D.body.clientHeight, D.documentElement.clientHeight)
  );
}
totalHeight = getDocHeight() - window.innerHeight;
window.onscroll = function () {
  progressHeight = (window.pageYOffset / totalHeight) * 100;
  progress.style.height = progressHeight + "%";
};

// -----------------nav button--------------------
const open = document.getElementById("open");
const close = document.getElementById("close");
const header = document.querySelector(".header");

open.addEventListener("click", () => header.classList.add("show-nav"));
close.addEventListener("click", () => header.classList.remove("show-nav"));

// -----------------nav button ends--------------------
// --------------------------------mobile nav--------------------
const open_btn = document.querySelector(".open-btn");
const close_btn = document.querySelector(".close-btn");
const nav = document.querySelectorAll(".nav");

open_btn.addEventListener("click", () => {
  nav.forEach((nav_el) => nav_el.classList.add("visible"));
});

close_btn.addEventListener("click", () => {
  nav.forEach((nav_el) => nav_el.classList.remove("visible"));
});
// ---------------------------mobile nav ends-------------------------
// // -------------------------tilt effect---------------------
// let newQuery = window.matchMedia(" ( max-width: 555px ) ");

// const queryListenChanges = (query) => {
//   if (query.matches) {
//     VanillaTilt.init(document.querySelectorAll(".gradBox"), {
//       max: 20,
//       speed: 200,
//       glare: true,
//       "max-glare": 0.8,
//       reverse: true,
//       scale: 0.8,
//     });
//   } else {
//     VanillaTilt.init(document.querySelectorAll(".gradBox"), {
//       max: 20,
//       speed: 200,
//       glare: true,
//       "max-glare": 0.8,
//       reverse: true,
//       scale: 1.2,
//     });
//   }
// };

// queryListenChanges(newQuery);
// newQuery.addListener(queryListenChanges);
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
const computerImg = document.querySelector(".computerImg")
const btn = document.getElementById("btn");

btn.addEventListener("click", () => boxesContainer.classList.toggle("big"));
btn.addEventListener("click", () => computerImg.classList.toggle("hideComputer"));

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
