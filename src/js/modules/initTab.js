export default function initTabNav() {
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
