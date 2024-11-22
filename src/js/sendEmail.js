// Inicializando o EmailJS com a sua chave pública
emailjs.init("oFu7Pf0pZEL99iQgd");

// Enviar o e-mail
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();  // Evita o envio tradicional

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Envia o e-mail
    emailjs.send("service_6gcjtjt", "template_6n019ud", {
        name: name,
        email: email,
        subject: subject,
        message: message
    }).then(function (response) {
        alert("Mensagem enviada com sucesso!");
        console.log("Sucesso:", response);
    }).catch(function (error) {
        alert("Erro ao enviar a mensagem. Tente novamente.");
        console.log("Erro:", error);
    });
});