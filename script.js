function mostrarTexto(event) {
  const itemId = event.target.id;
  carregarConteudo(itemId);
}

function carregarConteudo(itemId) {
  fetch('texto.html')
    .then(response => response.text())
    .then(data => {
      const tempElement = document.createElement('div');
      tempElement.innerHTML = data;

      const conteudo = tempElement.querySelector(`#${itemId}`);
      const saida = document.getElementById("saida");

      if (conteudo) {
        saida.innerHTML = conteudo.innerHTML;
      } else {
        saida.innerHTML = "<p>Conteúdo não encontrado.</p>";
      }
    })
    .catch(error => {
      console.error('Erro ao carregar o conteúdo:', error);
      document.getElementById("saida").textContent = "Erro ao carregar o conteúdo.";
    });
}

// Carregar o conteúdo "Início" automaticamente ao abrir o site
document.addEventListener('DOMContentLoaded', () => {
  carregarConteudo('home');
});


function emBreve(){
  alert("Em Breve")
}