# ENGWEB2024-Normal

- Persistência dos dados: escolhi utilizar sempre o dataset `contratos2024.csv` e ao analisar o dataset reparei imediatamente que havia dois parâmetros que costumavam aparecer vazios: nAnuncio e fundamentacao. Analisei todos os outros parâmetros com querys de pesquisa e reparei que somente estes tinham valores vazios, sendo assim no exercício 2, quando eram páginas que continham este parâmetros, em vez de aparecerem vazios, escrevi "Sem informação". Além disso, reparei que os valores do precoContratual utilizavam vírgulas para simbolizar os cêntimos. Para tratar disso, no model do Contrato coloquei esse valor em string e depois quando quis calcular o Valor dos Contratos de uma entidade, fiz `parseFloat` a esses valores.

- Setup de bases de dados: eu utilizei a aplicação MongoDBCompass para fazer a importanção do dataset em CSV, utilizando `localhost:27017` para a conexão e criando a database e a collection com o nome `contratos`.

- Respostas textuais pedidas: Coloquei as queries que eram pedidas no exercício 1.2 no ficheiro `queries.txt` que se encontra dentro da pasta `ex1`.

- Instruções de como executar as aplicações desenvolvidas: No meu caso, depois de ter sido feito o setup da base de dados no MongoDBCompass, basta somente entrar na pasta ex1 ou ex2, depois na pasta contratos (que é comum nas duas pastas) e fazer `npm start`, visto que não implementei a Distribuição das aplicações e as pastas já contêm os node_modules necessários, logo não é preciso fazer `npm i`.

- Verificação dos resultados: para verificar que o exercício 1 estava funcional utilizei o Postman.
