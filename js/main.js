const toggleButton = document.getElementsByClassName("nav-bar-toggle")[0];
const navBarLinks = document.getElementsByClassName("nav-bar-links")[0];
const navLinks = [...document.getElementsByClassName("nav-link")];
const navBar = document.getElementById('nav-bar')

// Toggle Nav Bar
toggleButton.addEventListener("click", () => {
  navBarLinks.classList.toggle("show");
  toggleButton.classList.toggle("close");
});

// On Nav link click, hide the navigation bar
navLinks.forEach((selectedNavLink) => {
  selectedNavLink.addEventListener("click", () => {
    // unselect all the nav
    const previousSelectedNavLinks = [
      ...document.getElementsByClassName("active"),
    ];
    previousSelectedNavLinks.forEach((navLink) => {
      navLink.classList.remove("active");
    });

    // Select the current clicked nav link
    selectedNavLink.classList.add("active");

    // Toggle the Nav Button and close the navigation bar
    toggleButton.classList.toggle("close");
    navBarLinks.classList.toggle("show");
  });
});

//Navigation bar scorll effect
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  var screenWidth = screen.width;
  console.log(screenWidth);
  if (screenWidth > 768) {
    if (prevScrollpos > currentScrollPos) {
      navBar.style.top = "0";
    } else {
      navBar.style.top = "-8rem";
    }
  }
  prevScrollpos = currentScrollPos;
}

// Fade in Logic Js Code
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);