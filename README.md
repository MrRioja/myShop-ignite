# MyShop - Ignite

<p align="center">
  <img src="https://img.shields.io/static/v1?label=my&message=shop&color=blueviolet&style=for-the-badge"/>
  <img src="https://img.shields.io/github/license/MrRioja/myShop-ignite?color=blueviolet&logo=License&style=for-the-badge"/>
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/MrRioja/myShop-ignite?color=blueviolet&logo=TypeScript&logoColor=white&style=for-the-badge">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/MrRioja/myShop-ignite?color=blueviolet&style=for-the-badge">
</p>

<p align="center">
  <a href="#sobre">Sobre</a> •
  <a href="#myshop">MyShop</a> •
  <a href="#instalação">Instalação</a> •
  <a href="#tecnologias">Tecnologias</a> •
  <a href="#autor">Autor</a>  
</p>

## Sobre

Projeto desenvolvido durante o bootcamp Ignite da Rocketseat na trilha de React Native. O app foi proposto durante o módulo de fundamentos do Firebase no React Native.

## MyShop

O MyShop é um app de lista de compras e gerenciamento de comprovantes de pagamento criado com React Native, Firebase e Typescript.

O app possui funcionalidades para suprir necessidades de gerenciar dois tipos de dados:

- [x] Lista de produtos a serem comprados.
- [x] Comprovantes de pagamentos.

Para isso o app conta com algumas funcionalidades interessantes as quais serão apresentadas a seguir.

Ao acessar o app o usuário será direcionado para a tela de login, onde poderá:

- [x] Realizar login com seu e-mail e senha.
- [x] Alterar sua senha:
  - Para isso basta ele digitar o e-mail no input de e-mail e clicar em `Recuperar senha`.
- [x] Cadastrar-se na aplicação:
  - Para isso basta informar e-mail e senha nos respectivos campos e clicar no botão `Criar minha conta`.

Sabendo disso, deixo um screenshot das telas que pertencem ao fluxo de autenticação explicado acima e alguns alertas dados ao usuário dentro desse fluxo:

|                              Tela de Login                               |                                    Alerta e-mail duplicado                                    |                                            Alerta recuperação de senha                                            |                                      Alerta cadastro realizado                                       |
| :----------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------: |
| <img src="./.github/login-screen.png" alt="Tela de login" width="350" /> | <img src="./.github/email-duplicated.png" alt="Alerta de e-mail já cadastrado" width="350" /> | <img src="./.github/recovery-password.png" alt="Alerta de envio de e-mail para alteração de senha" width="350" /> | <img src="./.github/user-created.png" alt="Alerta de criação de usuário bem sucedida" width="350" /> |

Após realizar login com sucesso, o usuário é direcionado para a home do aplicativo aonde poderá visualizar os itens cadastrados na sua lista de compras, cadastrar novos ou navegar para outras funcionalidades do app clicando nas opções presentes no menu inferior.

Para cadastrar um item basta informar o nome do produto e a quantidade à ser comprada e clicar no botão verde. Com isso o item já estará na lista e o usuário já poderá gerencia-lo ou adicionar novos itens. Na lista de itens, cada um deles possui dois botões no canto direito, onde:

- [x] Botão verde dá o item como comprando.
  - Com isso o item receberá um risco indicando que a quantidade previamente cadastrada já foi comprada.
  - Após o clique o ícone do botão irá mudar para indicar que a ação é reversível e o usuário pode reverter a sinalização de compra a qualquer momento.
- [x] Botão vermelho remove o item da lista.

|                          Lista de itens                           |                                 Lista de itens com itens comprados                                  |
| :---------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------: |
| <img src="./.github/home.png" alt="Lista de itens" width="350" /> | <img src="./.github/home-checked-items.png" alt="Lista de itens com itens comprados" width="350" /> |

Agora que conhecemos a aba `Produtos`, vamos conhecer a aba seguinte: `Comprovantes`. Seu objetivo é centralizar e tornar acessíveis os comprovantes de compras cadastrados pelo usuário para eventuais consultas.
Nessa tela teremos as funcionalidades:

- [x] Listagem de comprovantes cadastrados.
- [x] Visualização de um comprovante.
  - Disponível através do clique no botão verde na parte direita do card dos comprovantes.
- [x] Exclusão de um comprovante.
  - Disponível através do clique no botão vermelho na parte direita do card dos comprovantes.

Para ilustrar cada uma dessas atividades deixo abaixo screenshots dessa parte da aplicação:

|                               Tela de comprovantes (vazia)                                |                            Tela de comprovantes                             |                                Visualização do comprovante                                 |                               Exclusão de um comprovante                                |
| :---------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------: |
| <img src="./.github/vouchers-empty.png" alt="Tela de comprovantes (vazia)" width="350" /> | <img src="./.github/vouchers.png" alt="Tela de comprovantes" width="350" /> | <img src="./.github/vouchers-preview.png" alt="Visualização do comprovante" width="350" /> | <img src="./.github/delete-voucher.png" alt="Exclusão de um comprovante" width="350" /> |

Agora que conhecemos a aba de comprovantes vamos a ultima aba da aplicação: `Upload`. Como o próprio nome sugere, é nessa página que o cadastro dos comprovantes ocorre. Aqui o fluxo é tão simples quanto:

1. Clicar no quadro pontilhado.
2. Selecionar a imagem do comprovante desejado.
3. Clicar no botão verde para fazer upload do comprovante.

|                           Tela de upload                            |                                   Comprovante selecionado                                   |                                   Mensagem upload concluído                                   |                               Upload Finalizado                               |
| :-----------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------: |
| <img src="./.github/upload.png" alt="Tela de upload" width="350" /> | <img src="./.github/upload-selected-image.png" alt="Comprovante selecionado" width="350" /> | <img src="./.github/upload-finish-message.png" alt="Mensagem upload concluído" width="350" /> | <img src="./.github/upload-finish.png" alt="Upload Finalizado" width="350" /> |

Afim de ilustrar tudo que foi explicado até aqui, deixo o GIF abaixo onde navego por toda a aplicação com o intuito de mostrar a aplicação em funcionamento:

<img src="./.github/demo.gif" alt="Demonstração do app" width="350" />

## Instalação

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com) e [Node.js](https://nodejs.org/en/). Além disso é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

### 📱 Rodando o App (Mobile)

```bash
# Clone este repositório
$ git clone git@github.com:MrRioja/myShop-ignite.git

# Acesse a pasta do projeto no terminal/cmd
$ cd myShop-ignite

# Instale as dependências
$ npm install
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn

# Execute o bundle
$ npm run start
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn start

# Abra o app no emulador android ou iOS
$ npm run [android | ios]
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn [android | ios]
```

## Tecnologias

[![My Skills](https://skillicons.dev/icons?i=react,firebase,ts)](https://skillicons.dev)

## Autor

<div align="center">
<img src="https://images.weserv.nl/?url=avatars.githubusercontent.com/u/55336456?v=4&h=100&w=100&fit=cover&mask=circle&maxage=7d" />
<h1>Luiz Rioja</h1>
<strong>Backend Developer</strong>
<br/>
<br/>

<a href="https://linkedin.com/in/luizrioja" target="_blank">
<img alt="LinkedIn" src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white"/>
</a>

<a href="https://github.com/mrrioja" target="_blank">
<img alt="GitHub" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"/>
</a>

<a href="mailto:lulyrioja@gmail.com?subject=Fala%20Dev" target="_blank">
<img alt="Gmail" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
</a>

<a href="https://api.whatsapp.com/send?phone=5511933572652" target="_blank">
<img alt="WhatsApp" src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"/>
</a>

<a href="https://join.skype.com/invite/tvBbOq03j5Uu" target="_blank">
<img alt="Skype" src="https://img.shields.io/badge/SKYPE-%2300AFF0.svg?style=for-the-badge&logo=Skype&logoColor=white"/>
</a>

<br/>
<br/>
</div>
