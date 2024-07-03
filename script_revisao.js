document.addEventListener('DOMContentLoaded', function() {
    const pedidoInfo = document.getElementById('pedidoInfo');

    const nome = sessionStorage.getItem('pedidoNome');
    const tipoCamisa = sessionStorage.getItem('pedidoTipoCamisa');
    const tamanho = sessionStorage.getItem('pedidoTamanho');
    const nomeCamisa = sessionStorage.getItem('pedidoNomeCamisa');
    const numeroCamisa = sessionStorage.getItem('pedidoNumeroCamisa');
    const pagamento = sessionStorage.getItem('pedidoPagamento');

    const html = `
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Tipo de Camisa:</strong> ${tipoCamisa}</p>
        <p><strong>Tamanho:</strong> ${tamanho}</p>
        <p><strong>Nome na Camisa:</strong> ${nomeCamisa}</p>
        <p><strong>Número na Camisa:</strong> ${numeroCamisa}</p>
        <p><strong>Forma de Pagamento:</strong> ${pagamento}</p>
    `;

    pedidoInfo.innerHTML = html;

    const editarPedidoBtn = document.getElementById('editarPedido');
    editarPedidoBtn.addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    const enviarWhatsappBtn = document.getElementById('enviarWhatsapp');
    enviarWhatsappBtn.addEventListener('click', function() {
        const whatsappMessage = `
            Detalhes do Pedido de Camisa do Interclasse
            Nome: ${nome}
            Tipo de Camisa: ${tipoCamisa}
            Tamanho: ${tamanho}
            Nome na Camisa: ${nomeCamisa}
            Número na Camisa: ${numeroCamisa}
            Forma de Pagamento: ${pagamento}
        `;
        const whatsappLink = `https://wa.me/5531996699957?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappLink, '_blank');
    });
});
