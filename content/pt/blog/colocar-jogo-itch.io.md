---
tags:
  - blogpt
  - article
  - gamedev

title: Como subir seu jogo para a plataforma itch.io
date: 2021-10-25

subtitle: Um passo a passo pra te ajudar (ou te salvar numa game jam)
description: O itch.io é hoje uma das maiores lojas de jogos independentes da internet e todos podem colocar seu jogo lá, tanto para venda, quanto para download gratuito. Esse é um passo-a-passo pra colocar seu jogo lá!

thumbnail: "/img/posts/colocar-jogo-itch-io/thumbnail.jpg"
---

Nunca foi tão fácil fazer um jogo hoje em dia, seja ele digital ou analógico. Tanto o público começou a aceitar jogos feitos por times menores (ou por uma pessoa só), quanto as ferramentas de que você precisa para colocar seu jogo no ar também aumentaram bastante. O [**itch.io**](https://itch.io/) é uma das plataformas mais democráticas e abertas para disponibilizar seu jogo na internet (e em meio de vários outros jogos famosos!).

![Página inicial do itch.io](/img/posts/colocar-jogo-itch-io/home.png)

Vamos supor que você já tenha seu jogo feito, ou pelo menos uma versão de demonstração, e você quer jogar ele pro mundo e ver o que as pessoas falam. **Este é um passo-a-passo de como subir um projeto no itch.io.** Lembrando que, independente se você fez um jogo digital ou analógico (tabuleiro/cartas/RPG de mesa), todo o procedimento é o mesmo. Inclusive, se você faz qualquer outra coisa digital (quadrinhos, fontes, músicas, recursos gráficos), você também pode usar esse tutorial para colocá-lo na loja.

# Antes de começar...
Antes de começarmos, é importante que você já tenha preparado as seguintes coisas:
- Uma conta no itch.io - [clique aqui para criar uma.](https://itch.io/register)
- Arquivos digitais do seu jogo, em todas as plataformas que ele estiver disponível (ou seja, os arquivos necessários para alguém jogar seu jogo). No caso de mais um arquivo ser necessário juntos, faça um arquivo ZIP com todos eles.
- Uma imagem com tamanho mínimo de 315x250 pixels para ser usada de "capa" do seu jogo. Idealmente, se seu jogo tiver um logo, coloque-o nessa imagem. O tamanho recomendado é 630x500 pixels.
- Pelo menos, uma imagem representativa do seu jogo, como uma captura de tela ou alguma arte importante do jogo.

Outras coisas opcionais são mais imagens, um vídeo (trailer ou gameplay) do seu jogo no YouTube ou Vimeo e um banner para colocar no topo da página do seu jogo.

## Sobre jogos que rodam na Web
Se o seu jogo roda diretamente numa página do navegador, você pode subir uma versão dele na sua página do itch.io e as pessoas poderão jogar diretamente dali. Isso inclui um jogo feito na Unity e exportado para HTML5, por exemplo. Nesse caso, é importante que você prepare um arquivo especial para que o itch.io entenda seu jogo corretamente. Se as instruções abaixo não forem suficientes, a plataforma tem uma [página de ajuda sobre jogos HTML5 (em inglês)](https://itch.io/docs/creators/html5).

- Faça um arquivo ZIP com todos os arquivos necessários para executar seu jogo.
- NÃO faça uma pasta dentro do ZIP para colocar os arquivos. Deixe os arquivos que estaríam na raíz do ZIP neste lugar mesmo.
- É importante que na raíz do ZIP exista um arquivo **index.html** que seja capaz de importar e executar o jogo como um todo. É este arquivo que será colocado na página do itch.io para os jogadores.

# Passo 1: criando um projeto
Clique no menu superior direito (onde deve estar o seu nome de usuário), abra o menu suspenso e escolha a opção [**Upload new project**](https://itch.io/game/new). Esta é a tela principal de criação de projeto, onde poderemos subir novos arquivos, alterar dados importantes do projeto e publicá-lo. Se você quiser editar posteriormente o seu jogo, a tela será bem parecida com esta aqui.

![Create a new project](/img/posts/colocar-jogo-itch-io/createnew.png)

1. No campo **Title**, coloque o nome do seu jogo.
2. No campo **Project URL**, você pode escolher como será a URL da página do seu jogo. Ele sempre será no formato *[seu-nome-de-usuario].itch.io/[project-url-escolhida]*. Escolha um nome pequeno, sem acentos ou espaços.
3. Clique no botão **Upload Cover Image** e escolha a imagem de "capa" do seu jogo para que o upload dela seja feito.
4. No campo **Short description or tagline**, escreva uma breve descrição do seu jogo, que não ultrapasse algumas poucas palavras. Essa frase será mostrada quando alguém encontrar seu jogo pela plataforma.
5. No campo **Gameplay video or trailer**, você pode colocar um link do YouTube ou do Vimeo com um vídeo do seu jogo. É um campo opcional.
6. No campo **Classification**, você pode escolher o tipo de conteúdo que você está subindo para a loja. Para jogos digitais, escolha a opção *Games*. Para jogos analógicos, escolha a opção *Physical games*.
7. No campo **Screenshots**, você pode dar upload em imagens significativas do seu jogo. A plataforma recomenda 3 a 5 imagens, mas coloque pelo menos 1. Aperte o botão *Add screenshots* para colocar novas imagens. Ao passar o mouse em cima das imagens, as opções *Move up* e *Move down* trocam a ordem delas e *Delete* apaga uma imagem.
8. O campo **Kind of project** serve apenas se o seu jogo for jogado no browser - neste caso, escolha a opção *HTML*. Nos outros casos, deixe na opção padrão *Downloadable*.
9. O campo **Release status** não é realmente muito importante, mas serve se você quiser indicar que um projeto é um protótipo ou que seu desenvolvimento foi cancelado.
10. A seção **Pricing** indica como você quer ganhar dinheiro com este projeto - a pĺataforma tem um [artigo explicando como a parte de vendas e pagamento funciona (em inglês)](https://itch.io/docs/creators/how-buying-works). Existem 3 opções possíveis, que são definidas por projeto:
    - Escolha **$0 ou donate** para que seu jogo seja gratuito, mas as pessoas que quiserem doar uma quantia qualquer de dinheiro também poderão fazer. O campo *Suggested donation* é o valor (em dólares) sugerido por você para uma doação, como se fosse o preço da "compra".
    - Escolha **Paid** para que seu jogo seja pago e não possa ser baixado gratuitamente. O campo **Minimum price** indica o preço mínimo que alguém deve pagar (em dólares) para conseguir comprar o seu jogo. As pessoas podem dar mais dinheiro que esse preço, como uma doação ao projeto.
    - Escolha **No payments** para que seu jogo seja gratuito e a funcionalidade de doação seja desativada. Todos poderão baixar gratuitamente seu jogo, mas não poderão enviar dinheiro de nenhuma maneira pela plataforma.
11. Na seção **Uploads**, você poderá subir os arquivos do seu jogo. Clique em *Upload files* e escolha todos os arquivos. Se o seu arquivo já está disponível em outro lugar (como um site pessoal) e você quer apenas fazer um link pra ele no itch, use a opção *Add External file*. Ao dar upload de um arquivo, novas opções vão aparecer:
    - Clique em **Change display name** para mudar o nome de exibição do arquivo na página, caso queira.
    - Clique em **Delete file** para apagá-lo dos servidores do itch.io.
    - No menu, você pode escolher o que aquele arquivo representa. Se seu jogo for para Windows, Mac, Linux ou Android, escolha a opção **Executable** e marque as plataformas que este arquivo foi feito para.
    - Se você marcou que o seu projeto era HTML, ao subir um arquivo .zip, a opção **This file will be played in the browser** aparecerá. Escolha esta opção para o arquivo que tenha o necessário para rodar na Web. Você poderá alterar configurações em *Embed options*.
12. No campo **Description**, você poderá escrever o texto da página do seu jogo. As ferramentas no topo do campo são usadas para colocar negrito, itálico, sublinhado, listas, colunas, links, alinhamentos, vídeos e imagens. O primeiro ícone mostra o texto no formato HTML, caso você queira alterar manualmente.
13. No campo **Genre**, você escolhe o gênero do jogo (ação, aventura, corrida, esportes, etc.). Escolha o que mais faz sentido para o seu jogo.
14. No campo **Tags**, você pode colocar até 10 palavras-chave sobre seu jogo. Não use o gênero ou as plataformas que seu jogo roda (pois a plataforma já tem filtros para isso).
15. Se seu jogo estiver disponível em outra loja (Steam, App Store, Google Play, Amazon Store ou Windows Store), coloque os links na seção **App store links**.
16. No campo **Download & install instructions**, você pode colocar informações mais específicas sobre download e instalação do seu jogo (ou preparação e impressão no caso de jogos analógicos).
17. Na seção **Community**, você pode escolher a forma com que as pessoas vão interagir com a página do seu jogo. *Disabled* desativa a funcionalidade, *Comments* cria um campo de comentários e *Discussion board* cria um fórum (com tópicos) só do seu jogo.
18. Enfim, na seção **Visibility & access**, você escolhe a visibilidade do projeto na plataforma. *Draft* significa que ele está em rascunho, e só você pode ver. Em *Restricted*, você pode autorizar pessoas a vê-lo. Ao colocar em *Public*, o jogo fica público na plataforma. Você precisa salvar uma vez o projeto antes de torná-lo público.

Clique em **Save & view page** para salvar um rascunho do seu jogo e ver como a página dele ficou.

# Passo 2: mudar o tema visual da página do projeto
O básico você já fez e seu jogo já pode ir pro ar! É só voltar a página de edição clicando em **Edit game** e colocar a visibilidade como público. Porém, ainda podemos fazer algumas alterações interessantes na parte visual da página que não podiam ser configuradas antes. Clique no botão **Edit theme** para abrir um menu lateral de tema visual.

![Edit theme](/img/posts/colocar-jogo-itch-io/edittheme.png)

1. Na seção **Color**, você pode escolher cores para certas coisas na página, como o plano de fundo (*BG*), o fundo da seção de conteúdo (*BG 2*), a cor do texto (*Text*) e a cor dos links, títulos e botões (*Link*). Ao clicar no botão *More options...*, também abrem opções para definir cores específicas para títulos (*Headers*) e botões (*Buttons*) e a transparência do fundo da seção de conteúdo (*BG2 Alpha*).
2. Na seção **Text**, você pode escolher qual a fonte será usada para todo o texto da página no campo *Font* e o seu tamanho em *Size*. Existem algumas fontes padrão, mas você pode escolher qualquer fonte do repositório do [Google Fonts](https://fonts.google.com/) ao clicar na opção *Select Google Font...*. A opção *More options...* permite que você escolha uma fonte específica para os títulos do texto.
3. A seção **Layout** permite escolher onde as imagens do jogo serão mostradas na página: *Sidebar* para serem mostradas num menu lateral à direita ou *Hidden* para serem escondidas.
4. Na seção **Images**, é possível colocar imagens para o banner no topo da página, o fundo (background) da página e o background da janela de jogo (Embed BG, no caso de um jogo Web HTML5).

Quando terminar suas modificações, não esqueça de apertar o botão **Save**.

# Passo 3: publicando seu jogo
Agora sim a sua página não tem só as informações e arquivos do seu jogo, mas também está visualmente com a cara dele! Clique no botão **Edit game** no topo da página para voltar à página de edição do projeto e troque a visibilidade para Público. Quando você salvar, **seu jogo já vai estar no ar!**

# Passo Extra: submeter seu jogo a uma game jam
Se você encontrou esse tutorial para poder submeter seu jogo em uma game jam/maratona de criação de jogos que está sendo hospedada no itch.io, siga estas instruções.

![Submit game to jam](/img/posts/colocar-jogo-itch-io/gamejam.png)

1. Crie seu projeto como os passos anteriores descreveram e deixe-o público.
2. Vá até a página da jam no itch.io.
3. Clique no botão **Join jam** para inscrever sua conta na maratona.
4. Se o período de submissão já tiver começado, clique no botão **Submit your project**.
5. No campo **Existing game**, escolha o projeto que você criou na lista. Você também pode começar a criar um novo projeto agora ao clicar em *Upload game*.
6. Se os organizadores da jam estipularam campos extras a serem preenchidos, você vai encontrá-los nessa tela.
7. Quando tiver feito tudo, só clicar no botão **Submit** e você terá submetido seu jogo para a jam!

Tem muito mais coisas que você pode fazer com seu projeto no itch.io, como escrever devlogs, adicionar novas pessoas ao projeto, preparar metadados, mas como o intuito desse texto era ser um passo-a-passo bem básico, terminamos por aqui. Espero que esse texto tenha te ajudado a colocar seu jogo tão querido no ar!