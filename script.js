// Passo 1: Selecionar os elementos
const nomes = document.querySelectorAll('nav ul li');
const listas = document.querySelectorAll('main section div');

// Função para mostrar a lista baseada no índice
function mostrarLista(index) {
  // Esconder todas as listas
  listas.forEach(lista => {
    lista.style.display = 'none';
  });

  // Mostrar a lista correspondente
  listas[index].style.display = 'block';
}

// Passo 2: Adicionar evento de clique em cada nome
nomes.forEach((nome, index) => {
  nome.addEventListener('click', () => {
    // Mostrar a lista do nome clicado
    mostrarLista(index);

    // Salvar o nome no localStorage
    localStorage.setItem('participanteSelecionado', index);
  });
});

// Passo 3: Verificar se existe um nome salvo no localStorage ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
  const participanteSalvo = localStorage.getItem('participanteSelecionado');
  
  // Se houver um participante salvo, mostrar a lista correspondente
  if (participanteSalvo !== null) {
    mostrarLista(participanteSalvo);
  }
});
