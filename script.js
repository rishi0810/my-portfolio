function toggleTheme() {
  const root = document.documentElement;
  const btn = document.getElementById("theme-toggle");
  const isLight = root.getAttribute("data-theme") === "light";
  const nextTheme = isLight ? "dark" : "light";

  root.setAttribute("data-theme", nextTheme);
  try {
    localStorage.setItem("theme", nextTheme);
  } catch (e) {}
  if (btn) {
    btn.textContent = nextTheme === "dark" ? "LIGHT" : "DARK";
  }
}

function toggleScreenshots(el) {
  const container = el.nextElementSibling;
  container.classList.toggle("open");
  el.textContent = container.classList.contains("open")
    ? "HIDE SCREENSHOTS"
    : "VIEW SCREENSHOTS";
}

function toggleNav() {
  const navLinks = document.getElementById("nav-links");
  const navToggle = document.getElementById("nav-toggle");
  navLinks.classList.toggle("open");
  navToggle.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
      var navLinks = document.getElementById("nav-links");
      var navToggle = document.getElementById("nav-toggle");
      navLinks.classList.remove("open");
      navToggle.classList.remove("open");
    });
  });
});
