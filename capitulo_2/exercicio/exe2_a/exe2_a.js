// Na compra de duas unidades de um mesmo medicamento, o cliente recebe como desconto os centavos do valor total.
// Elaborar um programa que leia descrição e preço de um medicamento.
// Informe o valor do procuto na promoção.

let formulario = document.querySelector("form");
let viewInfo = document.querySelector("h3");

formulario.addEventListener("submit", (e) => {

    let nomeMed = formulario.inMed.value;
    let valorMed = Number(formulario.inPreco.value);

    let total = (valorMed * 2);
    let totalDesc = total - (total % 2) ;
    
    viewInfo.innerText = `Promoção de ${nomeMed} \nLeve 2 por apenas R$: ${totalDesc.toFixed(2)}`

    e.preventDefault();

})