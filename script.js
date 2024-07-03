document.addEventListener('DOMContentLoaded', function() {
    const tipoCamisaSelect = document.getElementById('tipoCamisa');
    const tamanhoSelect = document.getElementById('tamanho');

    // Função para mostrar ou ocultar opções de tamanho com base no tipo de camisa selecionado
    function atualizarOpcoesTamanho() {
        const tipoCamisaSelecionado = tipoCamisaSelect.value;

        // Mostrar imagem de referência adequada
        if (tipoCamisaSelecionado === 'Normal') {
            document.getElementById('normalImage').style.display = 'block';
            document.getElementById('babylookImage').style.display = 'none';
        } else if (tipoCamisaSelecionado === 'BabyLook') {
            document.getElementById('normalImage').style.display = 'none';
            document.getElementById('babylookImage').style.display = 'block';
        }

        // Mostrar opções de tamanho de acordo com o tipo de camisa selecionado
        if (tipoCamisaSelecionado === 'Normal') {
            // Mostra apenas tamanhos unissex e tamanhos especiais
            mostrarOpcoes('Tamanhos Unissex');
            mostrarOpcoes('Tamanhos Especiais');
            ocultarOpcoes('Babylook');
        } else if (tipoCamisaSelecionado === 'BabyLook') {
            // Mostra apenas tamanhos babylook
            mostrarOpcoes('Babylook');
            ocultarOpcoes('Tamanhos Unissex');
            ocultarOpcoes('Tamanhos Especiais');
        }

        // Resetar o campo de tamanho para "Selecione"
        tamanhoSelect.value = '';
    }

    // Função auxiliar para mostrar opções de tamanho de um determinado grupo
    function mostrarOpcoes(labelGroup) {
        const optgroup = tamanhoSelect.querySelector(`optgroup[label="${labelGroup}"]`);
        if (optgroup) {
            optgroup.hidden = false;
        }
    }

    // Função auxiliar para ocultar opções de tamanho de um determinado grupo
    function ocultarOpcoes(labelGroup) {
        const optgroup = tamanhoSelect.querySelector(`optgroup[label="${labelGroup}"]`);
        if (optgroup) {
            optgroup.hidden = true;
        }
    }

    // Inicializar as opções de tamanho com base no valor inicial do tipo de camisa selecionado
    atualizarOpcoesTamanho();

    // Adicionar um ouvinte de evento de mudança para o campo "Tipo de Camisa"
    tipoCamisaSelect.addEventListener('change', function() {
        atualizarOpcoesTamanho();
    });

    const form = document.getElementById('camisaForm');

    // Verificar se há dados no sessionStorage para preencher o formulário
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

        // Atualizar opções de tamanho com base no tipo de camisa salvo
        atualizarOpcoesTamanho();

        // Preencher os campos de tamanho, nome da camisa e número da camisa, se disponíveis
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

        // Obter valores do formulário
        const nome = document.getElementById('nome').value;
        const tipoCamisa = document.getElementById('tipoCamisa').value;
        const tamanho = document.getElementById('tamanho').value;
        const nomeCamisa = document.getElementById('nomeCamisa').value;
        const numeroCamisa = document.getElementById('numeroCamisa').value;
        const pagamento = document.getElementById('pagamento').value;

        // Armazenar dados no sessionStorage
        sessionStorage.setItem('pedidoNome', nome);
        sessionStorage.setItem('pedidoTipoCamisa', tipoCamisa);
        sessionStorage.setItem('pedidoTamanho', tamanho);
        sessionStorage.setItem('pedidoNomeCamisa', nomeCamisa);
        sessionStorage.setItem('pedidoNumeroCamisa', numeroCamisa);
        sessionStorage.setItem('pedidoPagamento', pagamento);

        // Redirecionar com base no método de pagamento escolhido
        if (pagamento === 'Pix') {
            window.location.href = 'confirmacao.html';
        } else if (pagamento === 'Dinheiro') {
            window.location.href = 'revisao.html';
        }
    });
});
