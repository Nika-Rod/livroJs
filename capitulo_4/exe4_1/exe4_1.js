const formulario = document.querySelector("form");
const infoNota = document.querySelector("h3");
const infoView = document.querySelector("h4");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = formulario.inNome.value;
    const priNota = Number(formulario.inPriNota.value);
    const segNota =  Number(formulario.inSegNota.value);

    const media = (priNota + segNota) / 2

    infoNota.innerText = `Média das Notas ${media.toFixed(2)}`

    if (media >= 7 ) {
        infoView.innerText = `Parabéns ${nome}! Você foi aprovado(a)`
        infoView.style.color = "green"
    } else {
        infoView.innerText = `Ops ${nome}... Você foi reprovado(a)`
        infoView.style.color = "red"
    }
})