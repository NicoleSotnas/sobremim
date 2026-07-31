document.addEventListener("DOMContentLoaded", () => {
  // Configurações do Observador de Tela
  const opcoes = {
    root: null,          // Utiliza a viewport do navegador
    threshold: 0.15,     // Ativa quando 15% do elemento estiver visível
    rootMargin: "0px"
  };

  const observador = new IntersectionObserver((entradas, obs) => {
    entradas.forEach((entrada) => {
      // Quando o elemento entra na área visível da tela
      if (entrada.isIntersecting) {
        entrada.target.classList.add("revelado");
        // Deixa de observar após a animação rodar uma vez
        obs.unobserve(entrada.target);
      }
    });
  }, opcoes);

  // Seleciona todos os elementos que possuem a classe .revelar
  const elementosParaRevelar = document.querySelectorAll(".revelar");
  elementosParaRevelar.forEach((el) => observador.observe(el));
});