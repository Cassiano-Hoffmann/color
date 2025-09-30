// Gerar cor aleatória
function generateColor() {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
  document.getElementById("color-box").style.backgroundColor = randomColor;
  document.getElementById("color-code").textContent = randomColor;
  document.getElementById("message").textContent = "";
}

// Copiar cor
function copyColor() {
  const colorCode = document.getElementById("color-code").textContent;
  navigator.clipboard.writeText(colorCode).then(() => {
    document.getElementById("message").textContent = "Código copiado com sucesso!";
  });
}

// Eventos
document.getElementById("generate").addEventListener("click", generateColor);
document.getElementById("copy").addEventListener("click", copyColor);

// Gera uma cor inicial
generateColor();
