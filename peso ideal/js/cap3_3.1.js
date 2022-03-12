function calcularPeso() {
    var inNome = document.getElementById('inNome');
    var rbMasculino = document.getElementById('rbMasculino');
    var rbFeminino = document.getElementById('rbFeminino');
    var inAltura = document.getElementById('inAltura');
    var outResposta = document.getElementById('outResposta');

    //obtem os valores de campo
    var nome = inNome.value;
    var masculino = rbMasculino.checked;
    var feminino = rbFeminino.checked;
    var altura = Number(inAltura.value);

    //verifica se o nome foi preenchido e o sexo selecionado
    if ( nome =='' || (masculino == false && feminino == false)) {
        alert('Por favor, informe o nome e selecione o sexo...');
        inNome.focus();
        return;
    }
    // se altura valor vazio (0) ou NaN: not a number
    if (altura == 0 || isNaN(altura)) {
        alert('Por favor, informe a altura corretamente');
        inAltura.focus();
        return;
    }
    if (masculino) {
        var peso = 22 * Math.pow(altura, 2);
    } else {
        var peso = 21 * Math.pow(altura, 2);
    }
    //apresenta a resposta
    outResposta.textContent = nome + ': seu peso ideal é ' + peso.toFixed(1) + ' kg';
    outResposta.style.color = "blue";
}

// cria referencia ao botao
var btCalcular = document.getElementById('btCalcular');
btCalcular.addEventListener('click', calcularPeso);

function limparCampos () {
    //recarrega a página
    location.reload();
    //posiciona o foco no elemento inNome
    document.getElementById('inNome').focus();
}
var btLimpar = document.getElementById('btLimpar');
btLimpar.addEventListener('click', limparCampos);