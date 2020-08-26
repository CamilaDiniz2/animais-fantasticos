export default function scrollSmooth() {
  const internLinks = document.querySelectorAll('[href^="#');

  internLinks.forEach((item) => {
    function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    item.addEventListener('click', scrollToSection);
  });
}
