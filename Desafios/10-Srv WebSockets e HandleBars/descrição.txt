Configure o servidor para integrar o template engine do Handlebars e instale um servidor socket.io nele.

Crie uma visualização "home.handlebars" que contém uma lista de todos os produtos adicionados até agora

Além disso, crie uma view “realTimeProducts.handlebars”, que ficará no endpoint “/realtimeproducts” em nosso roteador de views, ela conterá a mesma lista de produtos, porém funcionará com websockets.

Ao trabalhar com websockets, sempre que criamos um novo produto, ou sempre que excluímos um produto, a lista deve ser atualizada automaticamente na referida visualização.

Já que a conexão entre uma consulta HTTP e websocket não é contemplada dentro da classe. Recomenda-se que, para a criação e exclusão de um produto, seja criado um formulário simples na view realTimeProducts.handlebars. Para que o conteúdo seja enviado de websockets e não HTTP. No entanto, esta não é a melhor solução, leia o próximo ponto.

Se você quiser fazer a conexão socket emit com HTTP, você terá que encontrar uma maneira de usar o servidor Sockets io dentro da requisição POST. Como você usará um emit dentro do POST?

___________________________________________________________

- Configurar o projeto para trabalhar com handlebars e Websockets

- Configurar o templateEngine handlebars
- Instalar o servidor socket.io nele.

- Criar uma visualização/layout home.handlebars get '/'
    -Contem uma lista de todos produtos adicionados até agora (product.json)
    -Segunda view realTimeProducs.handlebars -> exibida no caminho get '/realTimeProducs'

- Ao criar um produto, ou excluir um produto. A lista deve ser atualizada imediatamente.
    -Função que cria/guarda ou deleta produto -> chamada para o websocket com uma nova mensgem contendo os produtos.

- Para criar ou excluir um produto, criem um formulário simples na view /realTimeProducs (realTimeProducs.handlebars)