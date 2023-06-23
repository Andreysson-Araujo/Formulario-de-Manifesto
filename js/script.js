function toggleForm() {
  let formPopup = document.getElementById("myForm");
  formPopup.style.display =
    formPopup.style.display === "block" ? "none" : "block";
}

function submitForm() {
  let senha = document.getElementById("senha").value;

  var url =
    "./pages/manifest.html" +
    "?senha=" +
    encodeURIComponent(senha) +

  window.open("./pages/manifest.html", "_blank");
}

function checkPasswordLength() {
  var inputSenha = document.querySelector('.inserir');
  var buttons = document.querySelectorAll('.btn-content button');

  if (inputSenha.value.length >= 4) {
    buttons.forEach(function(button) {
      button.disabled = false;
    });
    
  } else {
    buttons.forEach(function(button) {
      button.disabled = true;
    });
  }
}

// Event listener para chamar a função checkPasswordLength() sempre que o valor do campo de senha mudar
document.querySelector('.inserir').addEventListener('input', checkPasswordLength);

const params = new URLSearchParams(window.location.search);

// Extrair os valores dos parâmetros
const name = params.get("senha");


// Exibir os resultados na página
const resultDiv = document.getElementById("result");
resultDiv.innerHTML = `
      <p><strong>Nome:</strong> ${senha}</p>

  `;