// Função segura para envio de emails de contato
(function(){
  emailjs.init("bjaT6QMQigbzFIudy"); 
})();

const form = document.getElementById("formContato");
const statusDiv = document.getElementById("mensagemStatus");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // Serve para evitar recarregamento da página

  emailjs.sendForm("service_cx31jba", "template_dogjtln", form)
    .then(() => {
      statusDiv.textContent = "✅ Email enviado com sucesso!";
      statusDiv.style.color = "green";
      form.reset();
    }, (error) => {
      statusDiv.textContent = "❌ Erro ao enviar: " + error.text;
      statusDiv.style.color = "red";
    });
});
