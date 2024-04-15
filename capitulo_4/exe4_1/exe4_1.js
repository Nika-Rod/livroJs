const formulario = document.querySelector("form");
const resultView = document.querySelector("h3");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = formulario.nome.value;
    const sexoM = formulario.inM.checked;
    const altura = formulario.altura.value;

    const calculo = sexoM ? 22 * Math.pow(altura, 2) : 21 * Math.pow(altura, 2);

    resultView.innerText = `${nome}: Seu peso ideal é ${calculo.toFixed(3)} kg`
})