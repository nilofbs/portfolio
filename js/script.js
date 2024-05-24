document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('certificadosLink').addEventListener('click', function(event) {
        event.preventDefault();

        const userResponse = confirm("Você parece ser curioso, quer mesmo ver os meus certificados?!");

        if (userResponse) {
            window.location.href = this.href;
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const projetosLink = document.getElementById('projetosLink');
    projetosLink.addEventListener('click', function(event) {
        event.preventDefault();

        const target = event.target;
        const anchor = target.closest('a');

        if (anchor) {
            const userResponse = confirm("Se você for bem curioso mesmo e quiser acessar meu projeto então aqui está o login! usuário: fulano@gmail.com e senha: fulano0104");

            if (userResponse) {
                window.location.href = anchor.href;
            }
        }
    });
});