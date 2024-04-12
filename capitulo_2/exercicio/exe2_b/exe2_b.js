// Elaborar um programa para uma lan house de um aeroporto: O programa deve ler o valor de cada 15 minutos de uso de um computador e o tempo de uso por um cliente em minutos.
// Informe o valor a ser pago pelo cliente, sabendo que as frações extras de 15 minutos devem ser cobradas de forma integral.

let formulario = document.querySelector("form");
let infoView = document.querySelector("h3");

formulario.addEventListener("submit", (e) => {

    let valorPor15 = formulario.inValor.value;
    let tempoCliente = formulario.inTempo.value;
    
    let valorPagar = Math.ceil(tempoCliente / 15) * valorPor15;

    infoView.innerText = `Valor a Pagar R$: ${valorPagar.toFixed(2)}`

    e.preventDefault();
} )