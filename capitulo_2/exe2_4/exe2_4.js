// Elaborar um programa para um restaurante que leia o preço por kg e o consumo (em gramas) de um cliente. Exiba o valor a ser pago.

let formulario = document.querySelector("form");
let viewResultado = document.querySelector("h3");

formulario.addEventListener( "submit", (e) => {

    let valorKg = Number(formulario.kg.value);
    let consumoCliente = Number(formulario.grama.value);

    let resultado = (valorKg / 1000) * consumoCliente;

    viewResultado.innerText = `Valor a pagar R$ ${resultado.toFixed(2)}`;

    e.preventDefault();
})

/* Exemplo livro:

const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  const quilo = Number(frm.inQuilo.value);    
  const consumo = Number(frm.inConsumo.value);

  const valor = (quilo / 1000) * consumo;      
  resp.innerText = `Valor a pagar R$: ${valor.toFixed(2)}`; 

  e.preventDefault();                
});

*/