# Implementação do MVP Web
Implementação de algumas páginas web utilizando HTLM, CSS e JAVASCRIPT da disciplina de Projeto Integrado do curso de Análise e Desenvolvimento de Sistemas da UFCA, seguindo as práticas aprendidas a respeito de layout, acessibilidade e responssividade

O projeto se baseia em um Sistema de RH de pequeno porte

O projeto usa o local Storage do javascript para simular o CRUD

# Versão Live utilizando GitHub Pages:
Você pode acessar o site pelo link:
[Sistema TopRh](https://pedro9185.github.io/)<br>

# Telas Principais implementadas:
- Página inicial com apresentação do sistema
- Página de Login e Cadastro de usuários
- Página Home/dashboard do sistema
- Página Colaboradores com a relação dos funcionários cadastrados
- Página Novo Colaborador cadastra um novo funcionário
- Modal para visualizar as informações do colaborador 
- Página Gestão de Ponto com informações dos funcionários(funcionalidade do ponto não implementada)
- Página ver informações do ponto com dados státicos para simulação
- Página Folha de pagamento (funcionalidades não implementadas)
- Página Gestão de benefícios (funcionalidades não implementadas)
- Página Sobre com informações da equipe
# Funcionalidades Principais implementadas:

### Geral
- Uso de tags semânticas no HTML
- Breadcrumbs em todas as páginas para fácil navegação
- local Storage do javascript para cadastro, login e CRUD dos colaboradores
- Responsividade: Adaptações para diferentes tamanhos de telas utilizando media queries, tamanhos principais consideerados: 1024px, 768px, 425px, 320px
- Menu de navegação lateral responsível e retrátil para telas menores
- Menu de usuário retrátil com Logout(remove o usuário logado do localStorage)

### Página Inicial
- Página Inicial com apresentação do sistema e cards interativos

### Página Login/Cadastro
- Login e Cadastro do usuario salvando dados no localStorage 
- validação dos campos de login e feedback para o usuario caso ele não esteja cadastrado ou o email ou senha estiverem incorretos
- validação dos campos de cadastro e feedback para o usuario caso as senhas não sejam iguais ou se já houver um email já cadastrado

### Página Home
- validação na pag home para não deixar o usuario acessar a pagina home sem ter um usuario logado
- Saudação para  o usuário logado baseado na hora do dia

### Página Colaboradores
- Principal mostrando todos os cadastradodos em uma tabela-Carrega os dados do local storage
  - Botão Novo para cadastrar um novo colaborador
    - Seleção de imagem e preview em tempo real
    - Tabs para divisão das informações
    - Feedback visual da escolha de arquivos de forma customizada
    - Validação dos campos:
      - Campos Obrigatórios com as devidas validações de formato e preenchimento
      - Feedback visual por meio de mensagem na ultima tab e bordas vermelhas nos campos inválidos
  - Botões de ação para:
    - Ver: Abre um modal com todas as informações do formulário
    - Editar: Carrega a página com as informações baseadas no id para edição
    - Excluir: Remove a entrada baseado no id
### Página Gestão de Ponto
  - Pagina inicial mostrando os funcionarios cadastrados puxando os dados direto do local storage
  - layout responsivo para varios tamanhos mobile e desktop
  - pagina stática para ver as informações do funcionario
### Página Gestão de Benefícios
 - Página inicial mostrando os pedidos de benefícios pricipais alimentação,  refeição e vale transporte
 - 
  - 
### Página Folha de Pagamento
  - Pagina inicial mostrando os funcionarios cadastrados puxando os dados direto do local storage
  - layout responsivo para varios tamanhos mobile e desktop


## Desenvolvedores
[Lucas Araujo](https://github.com/lal28)<br>
[Pedro Henrique](https://github.com/Pedro9185)<br>
[Maria Mikaelle Andrade](https://github.com/Mikaelle27)<br>

## Projeto
**Ferramentas Utilizadas:**
Para prototipação e ícones:
[Figma](https://www.figma.com/)<br>
Para desenvolvimento do código:
[Visual Studio Code](https://code.visualstudio.com/)
