function Navbar() {
  var navBarElement = document.getElementById("nav-bar");
  var navIconElement = document.getElementById("nav-icon");
  if (navBarElement.className === "nav-bar") {
    navBarElement.className += " responsive";
    navIconElement.className += " resp";
    document.getElementById("icon-image").src = "./res/img/x.svg";
  } else {
    navBarElement.className = "nav-bar";
    navIconElement.className = "navigations icon";
    document.getElementById("icon-image").src = "./res/img/menu.svg";
  }
}

var header = document.getElementById("nav-bar");
var nav = header.getElementsByClassName("navigations");
for (var i = 0; i < nav.length; i++) {
  nav[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    console.log(current);
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}