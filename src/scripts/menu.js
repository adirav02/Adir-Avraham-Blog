document.addEventListener("DOMContentLoaded", (event) => {
  const hamburger = document.querySelector("#main-nav-hamburger");
  const close = document.querySelector("#main-nav-close");
  const nav = document.querySelector("#main-nav");

  hamburger.addEventListener("click", (event) => {
    nav.classList.remove("hidden"); // Show the navigation
    hamburger.classList.add("hidden"); // Hide the hamburger icon
    close.classList.remove("hidden"); // Show the close icon
    document.body.style.overflow = "hidden"; // Disable scrolling
  });

  close.addEventListener("click", (event) => {
    nav.classList.add("hidden"); // Hide the navigation
    hamburger.classList.remove("hidden"); // Show the hamburger icon
    close.classList.add("hidden"); // Hide the close icon
    document.body.style.overflow = "auto"; // Enable scrolling
  });
});
