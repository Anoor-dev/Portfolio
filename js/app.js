// Filter pill interaction
document.querySelectorAll(".pill").forEach((p) => {
  p.addEventListener("click", () => {
    document
      .querySelectorAll(".pill")
      .forEach((x) => x.classList.remove("active"));
    p.classList.add("active");
  });
});

// Mobile nav toggle
const navbarEl = document.getElementById("navbar");
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navbarEl && navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navbarEl.classList.toggle("nav-open");
    navToggle.classList.toggle("active", isOpen);
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close the menu whenever a nav link or the CTA is tapped
  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navbarEl.classList.remove("nav-open");
      navToggle.classList.remove("active");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Close the menu if the viewport is resized back to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
      navbarEl.classList.remove("nav-open");
      navToggle.classList.remove("active");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

// Navbar subtle shrink on scroll
let lastScroll = 0;
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 40) {
    nav.style.padding = "10px 24px";
  } else {
    nav.style.padding = "14px 28px";
  }
});
// 3D monitor
const wsShowcase = document.getElementById("workspaceShowcase");
const wsScene = document.getElementById("wsScene");
if (wsShowcase && wsScene) {
  wsShowcase.addEventListener("mousemove", (e) => {
    const r = wsShowcase.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    wsScene.style.setProperty("--ry", px * 34 - 22 + "deg");
    wsScene.style.setProperty("--rx", 18 - py * 22 + "deg");
  });
  wsShowcase.addEventListener("mouseleave", () => {
    wsScene.style.setProperty("--ry", "-22deg");
    wsScene.style.setProperty("--rx", "18deg");
  });
}
