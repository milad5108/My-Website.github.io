// cheange-theme

document.body.classList.add("light-theme");
document.getElementById("change-theme").addEventListener("click", (e) => {
  if (document.body.classList.contains("light-theme")) {
    document.body.classList.replace("light-theme", "dark-theme");
  } else {
    document.body.classList.replace("dark-theme", "light-theme");
  }
});

// active-hover-btn

const activeBtn = document.querySelectorAll(".hover");

console.log(activeBtn);

activeBtn.forEach((active) => {
  active.addEventListener("click", () => {
    removeActiveClasses();
    active.classList.add("active");
  });
});

function removeActiveClasses() {
  activeBtn.forEach((active) => {
    active.classList.remove("active");
  });
}

// cheange-page

const homeClick = document.getElementById("homeClick");
const home = document.getElementById("home");
const aboutClick = document.getElementById("aboutClick");
const about = document.getElementById("about");
const portfolioClick = document.getElementById("portfolioClick");
const portfolio = document.getElementById("portfolio");

const contactMeClick = document.getElementById("contactMeClick");
const contactMe = document.getElementById("contactMe");

console.log(homeClick);

homeClick.addEventListener("click", () => {
  if (home.style.display === "none") {
    about.style.display = "none";
    portfolio.style.display = "none";
    contactMe.style.display = "none";
    home.style.display = "block";
    window.scrollTo(0, 0);
  }
});
aboutClick.addEventListener("click", () => {
  if (about.style.display === "none") {
    home.style.display = "none";
    portfolio.style.display = "none";
    contactMe.style.display = "none";
    about.style.display = "block";
    window.scrollTo(0, 0);
  }
});

portfolioClick.addEventListener("click", () => {
  if (portfolio.style.display === "none") {
    home.style.display = "none";
    about.style.display = "none";
    contactMe.style.display = "none";
    portfolio.style.display = "block";
    window.scrollTo(0, 0);
  }
});

contactMeClick.addEventListener("click", () => {
  if (contactMe.style.display === "none") {
    home.style.display = "none";
    portfolio.style.display = "none";
    about.style.display = "none";
    contactMe.style.display = "block";
    window.scrollTo(0, 0);
  }
});

// transform

const transforms = document.querySelectorAll(".transform");

window.addEventListener("scroll", Showtransform);

function Showtransform() {
  const rtiggerBotttm = window.innerHeight / 1.01;

  transforms.forEach((transform) => {
    const bartop = transform.getBoundingClientRect().top;

    if (bartop < rtiggerBotttm) {
      transform.classList.add("show");
    } else {
      transform.classList.remove("show");
    }
  });
}
