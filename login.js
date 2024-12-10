function login(event) {
  event.preventDefault();

  const accountType = document.getElementById("account-type").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(u => u.email === email && u.password === password && u.accountType === accountType);

  if (user) {
    if (accountType === "artista") {
      window.location.href = "tela.artista.html";
    } else if (accountType === "contratante") {
      window.location.href = "tela.contratante.html";
    }
  } else {
    alert("Email, senha ou tipo de conta incorretos.");
  }
}

document.querySelector("form").addEventListener("submit", login);

const accountType = document.getElementById('account-type');
const artistInfo = document.getElementById('artist-info');
const contractorInfo = document.getElementById('contractor-info');

if (accountType) {
  accountType.addEventListener('change', function() {
    if (accountType.value === 'artista') {
      artistInfo.classList.remove('hidden');
      contractorInfo.classList.add('hidden');
    } else if (accountType.value === 'contratante') {
      contractorInfo.classList.remove('hidden');
      artistInfo.classList.add('hidden');
    }
  });
}
