const accountType = document.getElementById('account-type');
const artistInfo = document.getElementById('artist-info');
const contractorInfo = document.getElementById('contractor-info');

accountType.addEventListener('change', function() {
  if (accountType.value === 'artista') {
    artistInfo.classList.remove('hidden');
    contractorInfo.classList.add('hidden');
  } else if (accountType.value === 'contratante') {
    contractorInfo.classList.remove('hidden');
    artistInfo.classList.add('hidden');
  }
});

function cadastrar(event) {
  event.preventDefault();

  const accountType = document.getElementById("account-type").value;
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
    alert("As senhas não coincidem!");
    return;
  }

  const user = { accountType, name, email, phone, password };
  
  let users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));

  alert("Cadastro realizado com sucesso!");
  window.location.href = "login.html";
}
