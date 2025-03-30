//inicio tabs
let abaAtual = 0;
const totalAbas = document.querySelectorAll(".tab-content").length;

function showTab(index) {
    abaAtual = index;
    document.querySelectorAll(".tab").forEach((tab, i) => {
        tab.classList.toggle("active", i === index);
        document.getElementById("tab-" + i).classList.toggle("active", i === index);
    });

    // Configura visibilidade dos botões
    document.getElementById("btnAnterior").disabled = abaAtual === 0;
    document.getElementById("btnProximo").style.display =
        abaAtual === totalAbas - 1 ? "none" : "inline-block";
    document.getElementById("btnSalvar").style.display =
        abaAtual === totalAbas - 1 ? "inline-block" : "none";
}

function mudarAba(direcao) {
    if (abaAtual + direcao >= 0 && abaAtual + direcao < totalAbas) {
        showTab(abaAtual + direcao);
    }
}

//EDITAR FORMULÁRIO COM A MESMA PÁGINA DE CRIAR
//pegar o id mandado na url
document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const index = urlParams.get("id"); // Pega o ID da URL

    if (index) {
        document.title="Sistema RH TopRH-Editar Colaborador"
        document.getElementById("breadcrumbs2").textContent = "Editar Colaborador";
        editarCadastro(index); // Se tem ID, carrega os dados
    }
});

// Função para editar um cadastro existente

function editarCadastro(index) {
    // Recupera os cadastros
    const cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];
    const cadastro = cadastros[index];

    // Preenche o formulário com os dados do cadastro
    

    
    document.getElementById('nome').value = cadastro.nome;
    document.getElementById('dataNascimento').value = cadastro.dataNascimento;
    document.getElementById('telefone').value = cadastro.telefone;
    document.getElementById('email').value = cadastro.email;
    document.getElementById('estadoCivil').value = cadastro.estadoCivil;
    document.getElementById('sexo').value = cadastro.sexo;
    document.getElementById('cep').value = cadastro.cep;
    document.getElementById('endereco').value = cadastro.endereco;
    document.getElementById('bairro').value = cadastro.bairro;
    document.getElementById('cidade').value = cadastro.cidade;
    document.getElementById('estado').value = cadastro.estado;
    document.getElementById('pais').value = cadastro.pais;

    document.getElementById('id').value = index;
    document.getElementById('usuario').value = cadastro.usuario;
    document.getElementById('departamento').value = cadastro.departamento;
    document.getElementById('emailCorp').value = cadastro.emailCorp;
    document.getElementById('ativo').value = cadastro.ativo; // Se for um checkbox
    document.getElementById('dataAdmissao').value = cadastro.dataAdmissao;

    document.getElementById('numeroIdentidade').value = cadastro.numeroIdentidade;
    document.getElementById('numeroCpf').value = cadastro.numeroCpf;
    //não é possível salvar e carregar files no local storage
    // document.getElementById('identidade').value = cadastro.identidade; 
    // document.getElementById('cpf').textContent = cadastro.cpf;
    // document.getElementById('comprovanteResidencia').textContent = cadastro.comprovanteResidencia;
    // document.getElementById('certidaoNascimento').textContent = cadastro.certidaoNascimento;
    // document.getElementById('carteiraTrabalho').textContent = cadastro.carteiraTrabalho;
    // document.getElementById('carteiramotorista').textContent = cadastro.carteiramotorista;
    console.log(cadastro.foto)

    // Mostra a imagem se existir
    const previewDiv = document.getElementById('imagemPreview');
    if (cadastro.foto) {
        previewDiv.innerHTML = `<img src="${cadastro.foto}" style="max-width: 200px; max-height: 200px;">`;
    } else {
        previewDiv.innerHTML = '';
    }

}


//ENVIAR FORMULÁRIO E SALVAR NO LOCAL STORAGE

// Função para converter a imagem para Base64 (para salvar no localStorage)
function converterImagemParaBase64(file, callback) {
    const reader = new FileReader();
    reader.onload = function (e) {
        callback(e.target.result);
    };
    reader.readAsDataURL(file);
}

// Evento para mostrar preview da imagem quando um arquivo é selecionado
document.getElementById('foto').addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (file) {
        converterImagemParaBase64(file, function (base64) {
            document.getElementById('imagemPreview').innerHTML = `<img src="${base64}" style="max-width: 200px; max-height: 200px;">`;
        });
    }
});

// Evento para o envio do formulário
document.getElementById('cadastroForm').addEventListener('submit', function (e) {
    e.preventDefault();// impedir ação padrão

    // Recupera os valores do formulário
    //<!-- Informações Pessoais -->
    const fotoInput = document.getElementById('foto');
    const nome = document.getElementById('nome').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const estadoCivil = document.getElementById('estadoCivil').value;
    const sexo = document.getElementById('sexo').value;
    const cep = document.getElementById('cep').value;
    const endereco = document.getElementById('endereco').value;
    const bairro = document.getElementById('bairro').value;
    const cidade = document.getElementById('cidade').value;
    const estado = document.getElementById('estado').value;
    const pais = document.getElementById('pais').value;

    //<!-- Informações Profissionais -->
    const id = document.getElementById('id').value;
    const usuario = document.getElementById('usuario').value;
    const departamento = document.getElementById('departamento').value;
    const emailCorp = document.getElementById('emailCorp').value;
    const ativo = document.getElementById('ativo').value;
    const dataAdmissao = document.getElementById('dataAdmissao').value;

    //<!-- Documentos -->
    const numeroIdentidade = document.getElementById('numeroIdentidade').value;
    const numeroCpf = document.getElementById('numeroCpf').value;

    //extrair apenas os nomes dos arquivos pra guardar no local storage
    const identidade = document.getElementById('identidade');
    const nomeArquivoIdentidade = identidade.files.length > 0 ? identidade.files[0].name : null;

    const cpf = document.getElementById('cpf');
    const nomeArquivoCpf = cpf.files.length > 0 ? cpf.files[0].name : null;

    const comprovanteResidencia = document.getElementById('comprovanteResidencia');
    const nomeArquivoComprovanteResidencia = comprovanteResidencia.files.length > 0 ? comprovanteResidencia.files[0].name : null;

    const certidaoNascimento = document.getElementById('certidaoNascimento');
    const nomeArquivoCertidaoNascimento = certidaoNascimento.files.length > 0 ? certidaoNascimento.files[0].name : null;

    const carteiraTrabalho = document.getElementById('cateiraTrabalho');
    const nomeArquivoCateiraTrabalho = carteiraTrabalho.files.length > 0 ? carteiraTrabalho.files[0].name : null;

    const carteiramotorista = document.getElementById('carteiramotorista');
    const nomeArquivoCarteiramotorista = carteiramotorista.files.length > 0 ? carteiramotorista.files[0].name : null;


    // Recupera os cadastros existentes do localStorage
    const cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];

    // Função para salvar o cadastro
    function salvarCadastro(fotoBase64) {
        const cadastro = {
            foto: fotoBase64,
            nome: nome,
            dataNascimento: dataNascimento,
            telefone: telefone,
            email: email,
            estadoCivil: estadoCivil,
            sexo: sexo,
            cep: cep,
            endereco: endereco,
            bairro: bairro,
            cidade: cidade,
            estado: estado,
            pais: pais,

            id: id,
            usuario: usuario,
            departamento: departamento,
            emailCorp: emailCorp,
            ativo: ativo,
            dataAdmissao: dataAdmissao,

            numeroIdentidade: numeroIdentidade,
            numeroCpf: numeroCpf,
            identidade: nomeArquivoIdentidade,
            cpf: nomeArquivoCpf,
            comprovanteResidencia: nomeArquivoComprovanteResidencia,
            certidaoNascimento: nomeArquivoCertidaoNascimento,
            carteiraTrabalho: nomeArquivoCateiraTrabalho,
            carteiramotorista: nomeArquivoCarteiramotorista

        };

        if (id === '') {
            // Adiciona um novo cadastro
            cadastros.push(cadastro);
        } else {
            // Atualiza um cadastro existente
            cadastros[id] = cadastro;
        }

        // Salva no localStorage
        localStorage.setItem('cadastros', JSON.stringify(cadastros));

        // // Limpa o formulário
        // limparFormulario();

        // Exibe mensagem
        alert('Cadastro salvo com sucesso!');


        console.log("Dados do Formulário:", cadastros);

        // // Volta para a lista de cadastros
        window.location = "employees.html";
    }

    // Verifica se foi selecionada uma nova foto
    if (fotoInput.files.length > 0) {
        converterImagemParaBase64(fotoInput.files[0], function (base64) {
            salvarCadastro(base64);
        });
    } else {
        // Se não tem nova foto e é edição, mantém a foto existente
        if (id !== '') {
            salvarCadastro(cadastros[id].foto);
        } else {
            // Cadastro novo sem foto
            salvarCadastro(null);
        }
    }
});


//fim tabs
//limpar local storage
function limpar() {
    localStorage.clear();
}

//validações
