//active (skills)
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

//toggle button
const toggleBtn = document.querySelector("#toggleBtn");
const show = document.querySelector(".work-list-2");
const showtest2 = document.querySelector(".work-list");
var flag1 = 1;
var flag2 = 0;

toggleBtn.addEventListener("click", () => {
  if (flag2 === 0) {
    showtest2.style.display = "none";
    flag2 = 1;
  } else {
    showtest2.style.display = "grid";
    flag2 = 0;
  }
});
toggleBtn.addEventListener("click", () => {
  if (flag1 === 1) {
    show.style.display = "grid";
    flag1 = 0;
    toggleBtn.innerHTML = "Tampilkan Lebih Sedikit";
  } else {
    show.style.display = "none";
    flag1 = 1;
    toggleBtn.innerHTML = "Tampilkan Lebih Banyak";
  }
});

// hamburger menu
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-150px";
}

// shrink navbar
const navcontent = document.querySelector(".nav-content");
const language = document.querySelector(".lg");
const navmenu = document.querySelector(".navmenu");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY >= 0) {
    navcontent.classList.add("shrink");
    language.classList.add("hidden");
    navmenu.classList.add("up");
  }
  if (lastScrollY <= 20) {
    navcontent.classList.remove("shrink");
    language.classList.remove("hidden");
    navmenu.classList.remove("up");
  }
  lastScrollY = window.scrollY;
});

//GoogleSheets PORTFOLIO Contact Form
var form = document.getElementById("sheetdb-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(form.action, {
    method: "POST",
    body: new FormData(document.getElementById("sheetdb-form")),
  })
    .then((response) => response.json())
    .then((html) => {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      alert(
        "Terima kasih telah menghubungi saya! Saya akan segera menghubungi Anda kembali."
      );
      document.querySelector("#sheetdb-form").reset();
    });
});

// document.body.innerHTML = '<h1>test</h1>'
