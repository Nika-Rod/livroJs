// Um supermercado está com uma promoção para aumentar suas vendas no setor de higiene, cada etiqueta de produto deve exibir uma mensagem anunciando 50% de desconto
// (para um item) na compra de três unidade do produto. Elabora um programa que leia a descrição e preço de um produto. Após, aprensente as mensagens indicando a promoção.

const formulario = document.querySelector("form");
const infoView = document.querySelector("h3");

formulario.addEventListener("submit", (e) => {

    const nomeProduto = formulario.inProduto.value;
    const precoProduto = formulario.inPreco.value;

    const preco3Unid = precoProduto / 2;
    const total = (precoProduto * 2) + preco3Unid;

    infoView.innerText = `${nomeProduto} - Promoção: Leve 3 por R$: ${total.toFixed(2)}\n O 3º produto custa apenas R$: ${preco3Unid.toFixed(2)}`

    e.preventDefault();
})

 