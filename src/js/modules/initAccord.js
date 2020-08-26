export default function initAccord() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activeClasse = 'ativo';
  if (accordionList.length) {
    accordionList[0].classList.add(activeClasse);
    accordionList[0].nextElementSibling.classList.add(activeClasse);

    function activeAccordion() {
      this.classList.toggle(activeClasse);
      this.nextElementSibling.classList.toggle(activeClasse);
    }
    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
