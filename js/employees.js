//mostrar filtros
const filterButtom = document.getElementById('filterButtom');
const showFiltersSpace = document.getElementById('showFilters-space');



filterButtom.addEventListener('click', function () {
  showFiltersSpace.classList.toggle("show");
});

// Função para excluir um cadastro
function excluirCadastro(index) {
  if (confirm('Tem certeza que deseja excluir este cadastro?')) {
    // Recupera os cadastros
    const cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];

    // Remove o cadastro pelo índice
    cadastros.splice(index, 1);

    // Salva a lista atualizada de cadastros no localStorage
    localStorage.setItem('cadastros', JSON.stringify(cadastros));

    // Recarrega a tabela
    carregarCadastros();
  }
}

// Função para carregar os cadastros salvos no localStorage e exibir na tabela
function carregarCadastros() {
  const tbody = document.querySelector('.table tbody');
  tbody.innerHTML = '';  // Limpa a tabela

  // Recupera os cadastros do localStorage
  const cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];

  // Para cada cadastro, cria uma linha na tabela
  cadastros.forEach((cadastro, index) => {
    const tr = document.createElement('tr');

    // Células para cada informação
    // Células para Foto
    const tdFoto = document.createElement('td');
    if (cadastro.foto) {
      const img = document.createElement('img');
      img.src = cadastro.foto;
      img.className = 'profile-pic';
      tdFoto.appendChild(img);
    } else {
      tdFoto.textContent = 'Sem foto';
    }

    // Células para Nome
    const tdNome = document.createElement('td');
    tdNome.textContent = cadastro.nome;

    // Células para Telefone
    const tdSexo = document.createElement('td');
    tdSexo.textContent = cadastro.telefone;

    // Células para Departamento
    const tdData = document.createElement('td');
    tdData.textContent = cadastro.departamento;


    const tdAcoes = document.createElement('td');

    // Botão de ver
    const linkVer = document.createElement('a')
    linkVer.onclick = function () {
      window.location.href = `newEmployee.html?id=${index}`;
     };
     linkVer.classList.add("actions");

    const imgVer = document.createElement('img');
    imgVer.src = "./img/see_black.png";
    imgVer.alt = "ver";
    linkVer.appendChild(imgVer); // Adicionar imagem dentro do link
    
    // Botão de editar
    const linkEditar = document.createElement('a')
     linkEditar.onclick = function () {
      window.location.href = `newEmployee.html?id=${index}`;
     };
    linkEditar.classList.add("actions");

    const imgEditar = document.createElement('img');
    imgEditar.src = "./img/edit_black.png";
    imgEditar.alt = "editar";
    linkEditar.appendChild(imgEditar); // Adicionar imagem dentro do link

    // Botão de excluir
    const linkExcluir = document.createElement('a');
    linkExcluir.onclick = function () {
      excluirCadastro(index);
    };
    linkExcluir.classList.add("actions");

    const imgExcluir = document.createElement('img');
    imgExcluir.src = "./img/delete_black.png";
    imgExcluir.alt = "excluir";
    linkExcluir.appendChild(imgExcluir); // Adicionar imagem dentro do link


    // Adiciona os links dentro do td
    tdAcoes.appendChild(linkVer);
    tdAcoes.appendChild(linkEditar);
    tdAcoes.appendChild(linkExcluir);
    

    // Adiciona todas as células à linha
    tr.appendChild(tdFoto);
    tr.appendChild(tdNome);
    tr.appendChild(tdSexo);
    tr.appendChild(tdData);
    tr.appendChild(tdAcoes);

    // Adiciona a linha à tabela
    tbody.appendChild(tr);
  });
}

//carrega a tabela ao iniciar a página
document.addEventListener('DOMContentLoaded', function () {
  carregarCadastros();
});