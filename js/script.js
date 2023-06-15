function toggleForm() {
  let formPopup = document.getElementById("myForm");
  formPopup.style.display =
    formPopup.style.display === "block" ? "none" : "block";
}

function submitForm() {
  let name = document.getElementById("senha").value;

  var url =
    "./pages/manifest.html" +
    "?senha=" +
    encodeURIComponent(senha) +

  window.open("./pages/manifest.html", "_blank");
}

const params = new URLSearchParams(window.location.search);

// Extrair os valores dos parâmetros
const name = params.get("senha");


// Exibir os resultados na página
const resultDiv = document.getElementById("result");
resultDiv.innerHTML = `
      <p><strong>Nome:</strong> ${senha}</p>

  `;