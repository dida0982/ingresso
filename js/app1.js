function comprar() {
    const tipoIngresso = document.getElementById("tipo-ingresso").value;
    const quantidade = Number(document.getElementById("qtd").value);

    if (!validarQuantidade(quantidade)) {
        return;
    }

    processarCompra(tipoIngresso, quantidade);
}

function validarQuantidade(quantidade) {
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Informe uma quantidade válida.");
        return false;
    }

    return true;
}

function processarCompra(tipo, quantidade) {
    const elementoQuantidade = document.getElementById(`qtd-${tipo}`);
    const quantidadeDisponivel = Number(elementoQuantidade.textContent);

    if (quantidade > quantidadeDisponivel) {
        alert("Quantidade indisponível para esse tipo de ingresso.");
        return;
    }

    atualizarEstoque(elementoQuantidade, quantidadeDisponivel, quantidade);

    alert(
        `${quantidade} ingresso(s) do tipo "${obterNomeIngresso(tipo)}" comprado(s) com sucesso!`
    );
}

function atualizarEstoque(elemento, estoqueAtual, quantidadeComprada) {
    elemento.textContent = estoqueAtual - quantidadeComprada;
}

function obterNomeIngresso(tipo) {
    const tipos = {
        pista: "Pista",
        superior: "Cadeira Superior",
        inferior: "Cadeira Inferior"
    };

    return tipos[tipo];
}
