function comprar() {
    const tipo = document.getElementById('tipo-ingresso').value;
    const qtd = parseInt(document.getElementById('qtd').value);

    document.getElementById('resultado').textContent =
        `Tipo de ingresso: ${tipo} | Quantidade de ingresso: ${qtd}`;

    processarCompra(tipo, qtd);
}

function processarCompra(tipo, qtd) {
    const elementoQuantidade = document.getElementById(`qtd-${tipo}`);
    const confirmacao = document.getElementById('confirmacao');

    const quantidadeDisponivel = parseInt(elementoQuantidade.textContent);

    if (qtd > quantidadeDisponivel) {
        confirmacao.textContent =
            `Quantidade de ingresso: ${qtd} indisponível para ${tipo}`;
        return;
    }

    elementoQuantidade.textContent = quantidadeDisponivel - qtd;

    confirmacao.textContent = 'Compra realizada com sucesso!';
}
