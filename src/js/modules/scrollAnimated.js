export default function scrollAnimated() {
  const sections = document.querySelectorAll('.js-scroll');
  if (sections.length) {
    const windowHalf = window.innerHeight * 0.6;
    sections[0].classList.add('animacao');
    function animaScroll() {
      sections.forEach((section) => {
        const sectionToTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionToTop - windowHalf < 0;
        if (isSectionVisible) section.classList.add('animacao');
        else section.classList.remove('animacao');
      });
    }

    window.addEventListener('scroll', animaScroll);
  }
}
