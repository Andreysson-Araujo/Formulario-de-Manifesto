function toggleForm() {
  let formPopup = document.getElementById("myForm");
  formPopup.style.display =
    formPopup.style.display === "block" ? "none" : "block";
}

function submitForm() {
  let name = document.getElementById("name").value;
  let rating = document.getElementById("rating").value;
  let comments = document.getElementById("comments").value;

  var url =
    "./pages/manifest.html" +
    "?name=" +
    encodeURIComponent(name) +
    "&rating=" +
    encodeURIComponent(rating) +
    "&comments=" +
    encodeURIComponent(comments);

  window.open(url, "_blank");
}

const params = new URLSearchParams(window.location.search);

// Extrair os valores dos parâmetros
const name = params.get("name");
const rating = params.get("rating");
const comments = params.get("comments");

// Exibir os resultados na página
const resultDiv = document.getElementById("result");
resultDiv.innerHTML = `
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Classificação:</strong> ${rating}</p>
      <p><strong>Comentários:</strong> ${comments}</p>
  `;