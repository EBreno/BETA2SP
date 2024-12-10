// Acessando os elementos do DOM
const editProfileBtn = document.querySelector('.edit-profile-btn');  // Botão para editar o perfil
const editModal = document.getElementById('editModal');  // Modal de edição
const closeModalBtn = document.querySelector('.close');  // Botão de fechar modal
const editForm = document.getElementById('editForm');  // Formulário de edição
const editName = document.getElementById('editName');  // Campo de nome
const editGenre = document.getElementById('editGenre');  // Campo de gênero musical
const editLocation = document.getElementById('editLocation');  // Campo de localização
const companyName = document.querySelector('.company-info h1');  // Nome da empresa no perfil
const companyGenre = document.querySelector('.company-info p:nth-of-type(1)');  // Gênero musical no perfil
const companyLocation = document.querySelector('.company-info p:nth-of-type(2)');  // Localização no perfil

// Verificando se os elementos existem para evitar erros
if (editProfileBtn && editModal && closeModalBtn && editForm) {
    // Abrir o modal e preencher os campos com as informações atuais
    editProfileBtn.addEventListener('click', function() {
      editModal.style.display = 'block';  // Exibe o modal
      
      // Preenche os campos com os dados atuais
      editName.value = companyName.textContent;
      editGenre.value = companyGenre.textContent.replace('Tipo de Evento: ', '');
      editLocation.value = companyLocation.textContent.replace('Localização: ', '');
    });

    // Fechar o modal ao clicar no "X"
    closeModalBtn.addEventListener('click', function() {
      editModal.style.display = 'none';  // Fecha o modal
    });

    // Fechar o modal se clicar fora dele
    window.addEventListener('click', function(event) {
      if (event.target === editModal) {
        editModal.style.display = 'none';  // Fecha o modal se clicar fora
      }
    });

    // Atualizar os dados do perfil após a edição
    editForm.addEventListener('submit', function(event) {
      event.preventDefault();  // Impede o envio do formulário

      // Atualiza os valores no perfil com os novos dados
      companyName.textContent = editName.value;
      companyGenre.textContent = 'Tipo de Evento: ' + editGenre.value;
      companyLocation.textContent = 'Localização: ' + editLocation.value;

      // Fecha o modal após salvar as alterações
      editModal.style.display = 'none';
    });
} else {
    console.error("Erro ao acessar os elementos do DOM.");
}
