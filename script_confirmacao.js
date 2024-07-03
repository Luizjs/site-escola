document.addEventListener('DOMContentLoaded', function() {
    const nome = sessionStorage.getItem('pedidoNome');
    const tamanho = sessionStorage.getItem('pedidoTamanho');
    const nomeCamisa = sessionStorage.getItem('pedidoNomeCamisa');
    const numeroCamisa = sessionStorage.getItem('pedidoNumeroCamisa');
    const pagamento = sessionStorage.getItem('pedidoPagamento');

    const pixData = `00020126330014BR.GOV.BCB.PIX011111943578656520400005303986540555.005802BR5920Luiz Gustavo Martins6009SAO PAULO62140510NKwRGpA0w66304139C`;
    document.getElementById('pixData').value = pixData;

    const qrcodeUrl = `frame.png`;
    document.getElementById('qrcode').src = qrcodeUrl;

    if (pagamento === 'Pix') {
        document.getElementById('editarPedido').style.display = 'block';
    }

    document.getElementById('nome').textContent = nome;
    document.getElementById('tamanho').textContent = tamanho;
    document.getElementById('nomeCamisa').textContent = nomeCamisa;
    document.getElementById('numeroCamisa').textContent = numeroCamisa;
    document.getElementById('pagamento').textContent = pagamento;

    document.getElementById('editarPedido').addEventListener('click', function() {
        window.location.href = 'index.html';
    });

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

        document.getElementById('mensagemDestacada').style.display = 'block';
    });
});
