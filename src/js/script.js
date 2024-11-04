document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector('[data-collapse-toggle="navbar-default"]');
    const navbarMenu = document.getElementById("navbar-default");

    toggleButton.addEventListener("click", function () {
        // Alterna a classe 'hidden' no menu ao clicar no botão
        navbarMenu.classList.toggle("hidden");
    });
});
