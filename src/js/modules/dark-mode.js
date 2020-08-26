export default function darkLighterMode() {
  const changeLighterToDark = document.querySelector('.changeLighterToDark');
  const title = document.querySelector('h1');
  const paragraphs = document.querySelectorAll('p');
  const links = document.querySelectorAll('li a');

  // Mudar site do modo dark -> ligther -> dark
  function mudarSite() {
    if (document.body.classList.contains('dark')) {
      changeLighterToDark.textContent = 'Dark';
    } else {
      changeLighterToDark.textContent = 'Lighter';
    }
    document.body.classList.toggle('dark');
    title.classList.toggle('dark');
    paragraphs.forEach((paragraph) => {
      paragraph.classList.toggle('darkParagraph');
    });
    links.forEach((link) => link.classList.toggle('dark'));
  }
  changeLighterToDark.addEventListener('click', mudarSite);
}
