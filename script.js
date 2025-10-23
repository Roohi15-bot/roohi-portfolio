// Smooth scrolling with header offset
const headerHeight = document.querySelector('header').offsetHeight;

document.querySelectorAll('header nav ul li a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 10; 
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  });
});

// Theme toggle
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Fade-in animation on scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.1 };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => { appearOnScroll.observe(fader); });