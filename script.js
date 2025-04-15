  function mostrarTexto() {
    const itemId = event.target.id;
    
    fetch('texto.html')
      .then(response => response.text())
      .then(data => {
        const tempElement = document.createElement('div');
        tempElement.innerHTML = data;

        const conteudo = tempElement.querySelector(`#${itemId}`);
        document.getElementById("saida").innerHTML = conteudo.innerHTML;
      })
      .catch(error => {
        console.error('Erro ao carregar o conteúdo:', error);
        document.getElementById("saida").textContent = "Erro ao carregar o conteúdo.";
      });
  }