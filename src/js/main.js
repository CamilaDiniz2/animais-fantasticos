function darkLighterMode() {
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

function aumentarDiminuirTexto() {
  const aumentarTexto = document.querySelector('.aumentarTexto');
  // aumentar tamanho do texto
  function aumentarTamanhoTexto() {
    document.documentElement.classList.contains('textoMaior')
      ? (aumentarTexto.textContent = 'A+')
      : (aumentarTexto.textContent = 'A-');

    document.documentElement.classList.toggle('textoMaior');
  }
  aumentarTexto.addEventListener('click', aumentarTamanhoTexto);
}

function initTabNav() {
  // Conectar imagens dos animais com os textos
  const tabMenu = document.querySelectorAll('.js-tabMenu li');
  const tabContent = document.querySelectorAll('.js-tabContent section');

  // verifica se os elementos existem
  if (tabMenu.length && tabMenu.length) {
    // pega o primeiro animal e adiciona a classe ativo a ele
    tabContent[0].classList.add('ativo');

    // Adiciona a classa 'ativo' a um item da seção de animais
    function activeMenu(index) {
      tabContent.forEach((itemTabContent) => {
        itemTabContent.classList.remove('ativo');
      });
      tabContent[index].classList.add('ativo');
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeMenu(index);
      });
    });
  }
}

function initAccord() {
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

function scrollSmooth() {
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

function scrollAnimated() {
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

initTabNav();
aumentarDiminuirTexto();
darkLighterMode();
initAccord();
scrollSmooth();
scrollAnimated();
