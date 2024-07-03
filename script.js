document.addEventListener('DOMContentLoaded', function() {
    const tipoCamisaSelect = document.getElementById('tipoCamisa');
    const tamanhoSelect = document.getElementById('tamanho');

    function atualizarOpcoesTamanho() {
        const tipoCamisaSelecionado = tipoCamisaSelect.value;

        if (tipoCamisaSelecionado === 'Normal') {
            document.getElementById('normalImage').style.display = 'block';
            document.getElementById('babylookImage').style.display = 'none';
        } else if (tipoCamisaSelecionado === 'BabyLook') {
            document.getElementById('normalImage').style.display = 'none';
            document.getElementById('babylookImage').style.display = 'block';
        }

        if (tipoCamisaSelecionado === 'Normal') {
            mostrarOpcoes('Tamanhos Unissex');
            mostrarOpcoes('Tamanhos Especiais');
            ocultarOpcoes('Babylook');
        } else if (tipoCamisaSelecionado === 'BabyLook') {
            mostrarOpcoes('Babylook');
            ocultarOpcoes('Tamanhos Unissex');
            ocultarOpcoes('Tamanhos Especiais');
        }

        tamanhoSelect.value = '';
    }

    function mostrarOpcoes(labelGroup) {
        const optgroup = tamanhoSelect.querySelector(`optgroup[label="${labelGroup}"]`);
        if (optgroup) {
            optgroup.hidden = false;
        }
    }

    function ocultarOpcoes(labelGroup) {
        const optgroup = tamanhoSelect.querySelector(`optgroup[label="${labelGroup}"]`);
        if (optgroup) {
            optgroup.hidden = true;
        }
    }

    atualizarOpcoesTamanho();

    tipoCamisaSelect.addEventListener('change', function() {
        atualizarOpcoesTamanho();
    });

    const form = document.getElementById('camisaForm');

    const nomeSalvo = sessionStorage.getItem('pedidoNome');
    const tipoCamisaSalvo = sessionStorage.getItem('pedidoTipoCamisa');
    const tamanhoSalvo = sessionStorage.getItem('pedidoTamanho');
    const nomeCamisaSalvo = sessionStorage.getItem('pedidoNomeCamisa');
    const numeroCamisaSalvo = sessionStorage.getItem('pedidoNumeroCamisa');
    const pagamentoSalvo = sessionStorage.getItem('pedidoPagamento');

    if (nomeSalvo && tipoCamisaSalvo && tamanhoSalvo && nomeCamisaSalvo && numeroCamisaSalvo && pagamentoSalvo) {
        document.getElementById('nome').value = nomeSalvo;
        document.getElementById('tipoCamisa').value = tipoCamisaSalvo;
        document.getElementById('pagamento').value = pagamentoSalvo;

        atualizarOpcoesTamanho();

        if (tamanhoSalvo) {
            document.getElementById('tamanho').value = tamanhoSalvo;
        }
        if (nomeCamisaSalvo) {
            document.getElementById('nomeCamisa').value = nomeCamisaSalvo;
        }
        if (numeroCamisaSalvo) {
            document.getElementById('numeroCamisa').value = numeroCamisaSalvo;
        }
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const tipoCamisa = document.getElementById('tipoCamisa').value;
        const tamanho = document.getElementById('tamanho').value;
        const nomeCamisa = document.getElementById('nomeCamisa').value;
        const numeroCamisa = document.getElementById('numeroCamisa').value;
        const pagamento = document.getElementById('pagamento').value;

        sessionStorage.setItem('pedidoNome', nome);
        sessionStorage.setItem('pedidoTipoCamisa', tipoCamisa);
        sessionStorage.setItem('pedidoTamanho', tamanho);
        sessionStorage.setItem('pedidoNomeCamisa', nomeCamisa);
        sessionStorage.setItem('pedidoNumeroCamisa', numeroCamisa);
        sessionStorage.setItem('pedidoPagamento', pagamento);

        if (pagamento === 'Pix') {
            window.location.href = 'confirmacao.html';
        } else if (pagamento === 'Dinheiro') {
            window.location.href = 'revisao.html';
        }
    });
});
