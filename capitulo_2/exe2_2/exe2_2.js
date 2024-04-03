// Elaborar um programa para um Cinema, que leia o título e a duração de um filme em minutos. Exiba o título do filme e converta a duração para horas e minutos.

// Exemplo: 
//     Título file: 
//     Duração (min):

//     Botão(Converter em Horas e Minutos)

//     Resultado Título
//     Resultado Hora e minutos.

const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");


frm.addEventListener("submit", (e) => {

    const titulo = frm.inTitulo.value;
    const duracao = Number(frm.inDuracao.value);

    const horas = Math.floor(duracao / 60);
    const minutos = duracao % 60;

    resp1.innerText = titulo
    resp2.innerText = `${horas} horas(s) e ${minutos} minutos(s)`

    e.preventDefault()
} )