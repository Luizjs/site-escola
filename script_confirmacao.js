document.addEventListener('DOMContentLoaded', function() {
    // Recupera os dados do sessionStorage
    const nome = sessionStorage.getItem('pedidoNome');
    const tamanho = sessionStorage.getItem('pedidoTamanho');
    const nomeCamisa = sessionStorage.getItem('pedidoNomeCamisa');
    const numeroCamisa = sessionStorage.getItem('pedidoNumeroCamisa');
    const pagamento = sessionStorage.getItem('pedidoPagamento');

    // Constrói o código Pix para copiar e colar (exemplo estático)
    const pixData = `00020126330014BR.GOV.BCB.PIX011111943578656520400005303986540555.005802BR5920Luiz Gustavo Martins6009SAO PAULO62140510NKwRGpA0w66304139C`;
    document.getElementById('pixData').value = pixData;

    // Gera o QR Code (simulado)
    const qrcodeUrl = `frame.png`;
    document.getElementById('qrcode').src = qrcodeUrl;

    // Mostra o botão de editar se o pagamento for feito pelo Pix
    if (pagamento === 'Pix') {
        document.getElementById('editarPedido').style.display = 'block';
    }

    // Exibir as opções escolhidas
    document.getElementById('nome').textContent = nome;
    document.getElementById('tamanho').textContent = tamanho;
    document.getElementById('nomeCamisa').textContent = nomeCamisa;
    document.getElementById('numeroCamisa').textContent = numeroCamisa;
    document.getElementById('pagamento').textContent = pagamento;

    // Botão para editar o pedido
    document.getElementById('editarPedido').addEventListener('click', function() {
        // Redireciona de volta ao formulário de pedido
        window.location.href = 'index.html';
    });

    // Botão para enviar detalhes pelo WhatsApp
    document.getElementById('enviarWhatsapp').addEventListener('click', function() {
        const whatsappMessage = `
            Detalhes da Blusa do Interclasse
            Nome: ${nome}
            Tamanho: ${tamanho}
            Nome na Camisa: ${nomeCamisa}
            Número na Camisa: ${numeroCamisa}
            Forma de Pagamento: ${pagamento}
        `;
        const whatsappLink = `https://wa.me/5531996699957?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappLink, '_blank');

        // Exibir mensagem destacada
        document.getElementById('mensagemDestacada').style.display = 'block';
    });
});
