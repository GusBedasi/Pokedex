# Desafio - Pokedex - Node JS

### Projeto padronizado

- Cobertura com [Jest](https://jestjs.io/) (ou qualquer outra ferramenta)
- Documentação com [ApiDoc](https://apidocjs.com/) (ou qualquer outra ferramenta)
- Setup do projeto com docker
- Variáveis de environment setadas por ambiente (não hard coded)

## API de Pokemons com autenticação e rotas protegidas

API com suporte a criação, edição, exclusão e leitura, usando a seguinte
[API de referencia](https://pokeapi.co/)
A autenticação deve ser [JWT](https://jwt.io/)

### Rotas

##### Usuários

- Endpoint de login (JWT)
- Endpoint de cadastro
- Endpoint de editar perfil

##### Pokemons

- Endpoint para listagem
- Endpoint para criação
- Endpoint para edição
- Endpoint para exclusão
- Endpoint para detalhamento

### A solução DEVE conter

- Manual do setup no readme.md
- Postman/Insomnia mapeando todos os endpoints
- Autorização do usuário checada para manipulação de uma nota

### Frameworks utilizadas:

- Express https://expressjs.com/
- Mongoose https://mongoosejs.com/
- Jest https://jestjs.io/