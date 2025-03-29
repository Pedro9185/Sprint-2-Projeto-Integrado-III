//inicio tabs
let abaAtual = 0;
const totalAbas = document.querySelectorAll('.tab-content').length;

function showTab(index) {
    abaAtual = index;
    document.querySelectorAll('.tab').forEach((tab, i) => {
        tab.classList.toggle('active', i === index);
        document.getElementById('tab-' + i).classList.toggle('active', i === index);
    });

    // Configura visibilidade dos botões
    document.getElementById('btnAnterior').disabled = abaAtual === 0;
    document.getElementById('btnProximo').style.display = (abaAtual === totalAbas - 1) ? 'none' : 'inline-block';
    document.getElementById('btnSalvar').style.display = (abaAtual === totalAbas - 1) ? 'inline-block' : 'none';
}

function mudarAba(direcao) {
    if ((abaAtual + direcao) >= 0 && (abaAtual + direcao) < totalAbas) {
        showTab(abaAtual + direcao);
    }
}

document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede recarga da página
    const formData = new FormData(this);
    const dados = {};
    formData.forEach((value, key) => dados[key] = value);
    console.log("Dados do Formulário:", dados);
    alert("Cadastro enviado com sucesso!");
});
//fim tabs

//validações