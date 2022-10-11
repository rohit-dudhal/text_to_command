const toggleButton = document.getElementsByClassName("nav-bar-toggle")[0];
const navBarLinks = document.getElementsByClassName("nav-bar-links")[0];
const navLinks = [...document.getElementsByClassName("nav-link")];

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
