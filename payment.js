document.addEventListener("DOMContentLoaded", () => {
    // Gerar código de boleto
    const generateBoletoButton = document.getElementById("generate-boleto");
    const boletoCodeDisplay = document.getElementById("boleto-code");
  
    generateBoletoButton.addEventListener("click", () => {
      const boletoCode = Array.from({ length: 47 }, () => Math.floor(Math.random() * 10)).join("");
      boletoCodeDisplay.textContent = `Código do Boleto: ${boletoCode}`;
    });
  
    // Gerar QR Code Pix
    const generatePixButton = document.getElementById("generate-pix");
    const pixQrCodeDisplay = document.getElementById("pix-qr-code");
  
    generatePixButton.addEventListener("click", () => {
      const pixCode = "00020126640014BR.GOV.BCB.PIX0114+55349999999990204ABCD5204000053039865405123.455802BR5920Exemplo Nome6014Cidade Exemplo62070503***6304ABCD";
      const qrCodeImageUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(pixCode)}&size=200x200`;
  
      pixQrCodeDisplay.innerHTML = `<img src="${qrCodeImageUrl}" alt="QR Code Pix">`;
    });
  });
  