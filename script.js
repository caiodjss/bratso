  function mostrarTexto() {
    const itemId = event.target.id; // Pega o id do item clicado (como 'about', 'servicos', etc.)
    
    fetch('texto.html')
      .then(response => response.text())
      .then(data => {
        // Cria um elemento temporário para armazenar o conteúdo carregado
        const tempElement = document.createElement('div');
        tempElement.innerHTML = data;

        // Mostra o conteúdo do ID correspondente
        const conteudo = tempElement.querySelector(`#${itemId}`);
        document.getElementById("saida").innerHTML = conteudo.innerHTML;
      })
      .catch(error => {
        console.error('Erro ao carregar o conteúdo:', error);
        document.getElementById("saida").textContent = "Erro ao carregar o conteúdo.";
      });
  }