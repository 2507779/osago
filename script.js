// Инициализация WOW.js
new WOW({
  mobile: false, // Отключаем анимации на мобильных для производительности
}).init();

// Мобильное меню
const menuIcon = document.querySelector('.mobile-menu-icon');
const navUl = document.querySelector('header nav ul');
if (menuIcon && navUl) {
  menuIcon.addEventListener('click', () => {
    navUl.classList.toggle('show');
  });

  // Закрытие меню при клике вне его
  document.addEventListener('click', (e) => {
    if (!menuIcon.contains(e.target) && !navUl.contains(e.target) && navUl.classList.contains('show')) {
      navUl.classList.remove('show');
    }
  });
}

// Эффект сжатия header при прокрутке
const header = document.querySelector('header');
if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// Параллакс-эффект для hero
const parallaxBg = document.querySelector('.parallax-bg');
if (parallaxBg) {
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    parallaxBg.style.transform = `translateY(${scrollPosition * 0.4}px)`;
  });
}

// Закрытие мобильного меню при клике на ссылку
const navLinks = document.querySelectorAll('header nav ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navUl && navUl.classList.contains('show')) {
      navUl.classList.remove('show');
    }
  });
});

