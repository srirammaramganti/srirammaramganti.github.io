// Get references to toggle button and body
const themeToggle = document.getElementById("themeToggle");
const body = document.body;
const navLinks = document.querySelectorAll("li a");
const navBar = document.querySelector("ul");

// Set initial state to dark mode
body.classList.add("dark-mode");
navBar.classList.add("dark-mode");
navLinks.forEach(link => link.classList.add("dark-mode"));

// Toggle dark mode and light mode
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");

  navBar.classList.toggle("dark-mode");
  navBar.classList.toggle("light-mode");

  navLinks.forEach(link => {
    link.classList.toggle("dark-mode");
    link.classList.toggle("light-mode");
  });

  // Update button text
  if (body.classList.contains("dark-mode")) {
    themeToggle.textContent = "Light Mode";
  } else {
    themeToggle.textContent = "Dark Mode";
  }
});
