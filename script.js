const menuLinks = document.querySelectorAll('.menu-principal');
        
const conteudo = document.getElementById('conteudo');

menuLinks.forEach(link => { 
    link.addEventListener('click', function(event) {
        conteudo.innerHTML = 'index.html';
      });
    });