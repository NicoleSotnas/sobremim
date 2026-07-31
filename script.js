document.addEventListener("DOMContentLoaded", () => {
  // Configurações do Observador de Tela
  const opcoes = {
    root: null, // Utiliza a viewport do navegador
    threshold: 0.15, // Ativa quando 15% do elemento estiver visível
    rootMargin: "0px",
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


/*Feedback */

// PONTO DE PARTIDA - Seleção dos elementos do HTML
const form = document.getElementById("form-feedback");
const inputNome = document.getElementById("nome");
const inputComentario = document.getElementById("comentario");
const mensagem = document.getElementById("mensagem-feedback");
const listaComentarios = document.getElementById("lista-comentarios");



// Etapa 1 - Interceptando o Envio do Formulário
if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // impede o recarregamento da página

    // Etapa 2 - Pegando os Valores Digitados
    const nomeDigitado = inputNome.value.trim();
    const comentarioDigitado = inputComentario.value.trim();

    // Etapa 3 - Criando a Validação
    if (nomeDigitado === "" || comentarioDigitado === "") {
      // Regra de erro
      // Etapa 4 - Feedback de Erro
      mensagem.textContent = "Erro ao envia seu Feedback!";
      mensagem.style.color = "#ff4d4d";
    } else {
      // Regra de sucesso
      // Etapa 4 - Feedback de Sucesso
      mensagem.textContent = "Seu Feedback foi enviado com sucesso!";
      mensagem.style.color = "#e4f805";

      // Etapa 5 - Renderizando o Novo Item na Tela (apenas se for válido)
      const novoItem = document.createElement("li");

      // Uso de innerHTML para dar um destaque visual ao nome do usuário
      novoItem.innerHTML = `<strong>${nomeDigitado}</strong> disse: ${comentarioDigitado}`;

      // adiciona o li como filho da ul do html
      listaComentarios.appendChild(novoItem);

      // limpeza dos campos após o envio com sucesso
      inputNome.value = "";
      inputComentario.value = "";

      // Limpa a mensagem de sucesso após 4 segundos
      setTimeout(() => {
        mensagem.textContent = "";
      }, 4000);
    }
  });
}
