const cadastros = JSON.parse(localStorage.getItem("cadastros")) || [];

let listaFuncionarios = cadastros;

document.addEventListener("DOMContentLoaded", mostrarFuncionarios());

function mostrarFuncionarios() {
  const tbody = document.getElementById("lista-funcionarios");

  tbody.innerHTML = "";

  listaFuncionarios.map((employe) => {
    tbody.innerHTML += `
    <tr class="table_row" id=${employe.id}>
                                <td scope="row" class=""><img src="${employe.foto}" alt="imagem-funcionario"
                                        ></td>
                                <td >${employe.nome}</td>
                               


                                <td> <a href="./viewInfo.html" class="link_table">Ver </a></td>


                            </tr>
    `;
  });
}
