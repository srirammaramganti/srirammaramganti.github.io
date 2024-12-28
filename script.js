// JavaScript to Toggle Dark Mode
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;
const navLinks = document.querySelectorAll("li a");

darkModeToggle.addEventListener("click", () => {
  // Toggle the "dark-mode" class on the body
  body.classList.toggle("dark-mode");

  // Toggle dark mode for navigation links
  navLinks.forEach(link => link.classList.toggle("dark-mode"));

  // Update button text
  if (body.classList.contains("dark-mode")) {
    darkModeToggle.textContent = "Light Mode";
  } else {
    darkModeToggle.textContent = "Dark Mode";
  }
});
