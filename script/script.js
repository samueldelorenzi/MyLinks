document.addEventListener("DOMContentLoaded", function() {
    const caixas = document.querySelectorAll('.caixa');

    caixas.forEach(caixa => {
        caixa.addEventListener('click', function() {
            const url = caixa.getAttribute('data-url');
            window.location.href = url;
        });
    });
});
