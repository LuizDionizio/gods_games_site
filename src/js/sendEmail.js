window.env = {
    EMAILJS_SERVICE_ID: "${{ secrets.SERVICE_ID }}",
    EMAILJS_TEMPLATE_ID: "${{ secrets.TEMPLATE_ID }}",
    EMAILJS_USER_ID: "${{ secrets.USER_ID }}"
};

// Usando as variáveis de ambiente no frontend
const serviceID = process.env.EMAILJS_SERVICE_ID;
const templateID = process.env.EMAILJS_TEMPLATE_ID;
const userID = process.env.EMAILJS_USER_ID;

emailjs.init(userID);

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o envio tradicional do formulário

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Envio de e-mail usando EmailJS
    emailjs.send(serviceID, templateID, {
        name: name,
        email: email,
        subject: subject,
        message: message
    }).then(function(response) {
        showAlert("Mensagem enviada com sucesso!", "success");
        console.log("Mensagem enviada:", response);
    }).catch(function(error) {
        showAlert("Erro ao enviar a mensagem. Tente novamente.", "error");
        console.log("Erro:", error);
    });
});

function showAlert(message, type) {
    var alertBox = document.getElementById("custom-alert");
    var alertMessage = document.getElementById("alert-message");
    var closeButton = document.getElementById("close-alert");

    // Atualiza o texto do alerta
    alertMessage.innerText = message;

    // Altera a cor do alerta com base no tipo
    if (type === "success") {
        alertBox.classList.add("bg-opacity-50");
        alertBox.classList.add("flex")
    } else if (type === "error") {
        alertBox.classList.add("bg-opacity-50");
        alertBox.classList.add("flex")
    }

    // Limpa os campos do formulário
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';
    
    // Exibe o alerta
    alertBox.classList.remove("hidden");

    // Fecha o alerta quando o botão de fechar é clicado
    closeButton.addEventListener("click", function() {
        alertBox.classList.remove("flex")
        alertBox.classList.add("hidden");
    });

    // Fecha o alerta após 5 segundos
    setTimeout(function() {
        alertBox.classList.add("hidden");
    }, 5000);
}