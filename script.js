function criptografarTexto() {
  let textoOriginal = document.getElementById("texto").value;
  let chave = "CHAVESECRETA"; // Substitua por uma chave segura em um ambiente de produção
  let textoCriptografado = CryptoJS.AES.encrypt(
    textoOriginal,
    chave
  ).toString();
  document.getElementById("mensagem").value = textoCriptografado;
}

function descriptografarTexto() {
  let textoCriptografado = document.getElementById("mensagem").value;
  let chave = "CHAVESECRETA"; // Utilizar a mesma chave de criptografarTexto()
  let textoDescriptografado = CryptoJS.AES.decrypt(
    textoCriptografado,
    chave
  ).toString(CryptoJS.enc.Utf8);
  document.getElementById("mensagem").value = textoDescriptografado;
}

function limparTexto() {
  document.getElementById("texto").value = "";
  document.getElementById("mensagem").value = "";
}

function limparPlaceholder(element) {
  element.placeholder = "";
}

function copiarTexto() {
  // Seleciona o texto na caixa de input
  let texto = document.getElementById("mensagem");
  texto.select();

  // Copia o texto para a área de transferência
  document.execCommand("copy");

  // Deseleciona o texto
  window.getSelection().removeAllRanges();
}

// Bloqueia caracteres especiais no input texto
let input = document.querySelector("#texto");
input.addEventListener("keypress", function (e) {
  if (!checkChar(e)) {
    e.preventDefault();
  }
});
function checkChar(e) {
  let char = String.fromCharCode(e.keyCode);

  let pattern = "[a-zA-Z0-9]";
  if (char.match(pattern)) {
    return true;
  }
}
