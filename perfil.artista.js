// Selecionar elementos do DOM
const modal = document.getElementById('editProfileModal');
const editBtn = document.querySelector('.edit-profile-btn');
const closeModal = document.querySelector('.close');
const nameField = document.querySelector('.artist-info h1');
const genreField = document.querySelector('.artist-info p:nth-child(2)');
const locationField = document.querySelector('.artist-info p:nth-child(3)');
const editForm = document.getElementById('editProfileForm');

// Abrir o modal ao clicar no botão "Editar Perfil"
editBtn.addEventListener('click', () => {
  document.getElementById('name').value = nameField.textContent;
  document.getElementById('genre').value = genreField.textContent.replace('Gênero Musical: ', '');
  document.getElementById('location').value = locationField.textContent.replace('Localização: ', '');
  modal.style.display = 'block';
});

// Fechar o modal ao clicar no botão "×"
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Fechar o modal ao clicar fora da área do modal
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Salvar alterações ao enviar o formulário
editForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Impede o recarregamento da página

  // Atualizar informações do perfil
  nameField.textContent = document.getElementById('name').value;
  genreField.textContent = `Gênero Musical: ${document.getElementById('genre').value}`;
  locationField.textContent = `Localização: ${document.getElementById('location').value}`;

  // Fechar o modal
  modal.style.display = 'none';
});
