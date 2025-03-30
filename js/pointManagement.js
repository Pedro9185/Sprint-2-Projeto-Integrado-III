const cadastros = JSON.parse(localStorage.getItem("cadastros")) || [];

let listaFuncionarios = cadastros;

document.addEventListener("DOMContentLoaded", mostrarFuncionarios());

function mostrarFuncionarios() {
  const tbody = document.getElementById("lista-funcionarios");

  tbody.innerHTML = "";

  listaFuncionarios.map((employe) => {
    tbody.innerHTML += `
    <tr class="table_row" id=${employe.id}>
                                <th scope="row" class=""><img src="${employe.foto}" alt="imagem-funcionario"
                                        class="imagem-funcionario"></th>
                                <td colspan="3">${employe.nome}</td>
                               


                                <td> <a href="./viewInfo.html" class="link_table">Ver informações</a></td>


                            </tr>
    `;
  });
}
