
const form = document.getElementById("cadastro");
const status = document.getElementById("status");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário
    status.innerText = "CADASTRADO COM SUCESSO!";
});

