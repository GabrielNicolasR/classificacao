let selecionarNota = document.querySelectorAll('.btn-nota')
let botaoEnviar = document.querySelector('.btn-enviar')
let selecionarAgradecimento = document.querySelector('.agradecimento')
let conteudoPrincipal = document.querySelector('.card-classificacao')
let notaEscolhida = document.querySelector('.nota-escolhida')

let notaSelecionadaValor = null;

selecionarNota.forEach(notaSelecionada => {
    notaSelecionada.addEventListener('click', () => {
        selecionarNota.forEach(nota => {
            nota.classList.remove('selecionada')

        });

        notaSelecionada.classList.add("selecionada");

        notaSelecionadaValor = notaSelecionada.innerHTML;

        notaSelecionadaValor = notaSelecionada.innerHTML;

        notaEscolhida.innerHTML = `Você selecionou ${notaSelecionadaValor} de 5`;

        botaoEnviar.addEventListener('click', () => {
            if (notaSelecionadaValor) {
                selecionarAgradecimento.classList.remove('ocultar')
                conteudoPrincipal.classList.add('ocultar')
            }
        })
    })
});










