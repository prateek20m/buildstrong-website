// Scroll to Top
const scrollBtn = document.getElementById("scrollTopBtn");
window.onscroll = function () {
  scrollBtn.style.display = (window.scrollY > 300) ? "block" : "none";
};
scrollBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Contact Form Submission
document.querySelector('.contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you! Your message has been sent.');
});

// Counter Animation
const counters = document.querySelectorAll('.counter');
let counterStarted = false;

const animateCounters = () => {
  counters.forEach(counter => {
    const update = () => {
      const target = +counter.getAttribute('data-target');
      const current = +counter.innerText;
      const increment = Math.ceil(target / 100);
      if (current < target) {
        counter.innerText = current + increment;
        setTimeout(update, 30);
      } else {
        counter.innerText = target;
      }
    };
    update();
  });
};

window.addEventListener('scroll', () => {
  const statsSection = document.getElementById('stats');
  const sectionTop = statsSection.offsetTop;
  if (!counterStarted && window.scrollY + window.innerHeight > sectionTop + 100) {
    animateCounters();
    counterStarted = true;
  }
});

// Loader
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

// Mobile Nav Toggle
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');
menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
});

// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

function setTheme(theme) {
  html.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  themeToggle.innerHTML = theme === 'dark'
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
}

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  setTheme(next);
});

// Initialize theme on load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);
});
