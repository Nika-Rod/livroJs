// Elaborar um programa para uma revenda de veículos. O programa deve ler modelo e preço do veículo. Apresentar como resposta o valor da entrada(50%)
// e o saldo em 12x. 


let nomeVeiculo = document.getElementById("nVeiculo");
let valorVeiculo = document.getElementById("nPreco");
let infoNome = document.getElementById("nomeVeiculo");
let valorEntrada = document.getElementById("entradaVeiculo");
let parcelaVeiculo = document.getElementById("parcelaVeiculo");
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {

    let veiculoNome = nomeVeiculo.value;
    let veiculoValor = Number(valorVeiculo.value);

    let desconto = veiculoValor / 2;
    let valorParcela = desconto / 12;

    infoNome.innerText = `Promoção: ${veiculoNome}`;
    valorEntrada.innerText = `Entrada de R$: ${veiculoValor.toFixed(2)}`;
    parcelaVeiculo.innerText = `+12x de R$ ${valorParcela.toFixed(2)}`;


    e.preventDefault();
})

/* Solução proposta pelo livro:

const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

frm.addEventListener("submit", (e) => {
  const veiculo = frm.inVeiculo.value;        
  const preco = Number(frm.inPreco.value);

  const entrada = preco * 0.50;               
  const parcela = (preco * 0.50) / 12;        

  resp1.innerText = `Promoção: ${veiculo}`;         
  resp2.innerText = `Entrada de R$: ${entrada.toFixed(2)}`;
  resp3.innerText = `+12x de R$ ${parcela.toFixed(2)}`;
  
  e.preventDefault();                       
})


*/

