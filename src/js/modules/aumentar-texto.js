export default function aumentarDiminuirTexto() {
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
