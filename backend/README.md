# Api RESTful

## Métodos HTTP

- GET: Buscar uma informação do back-end
- POST: Criar uma informação do back-end
- PUT: Alterar uma informação do back-end
- DELETE: Deletar uma informação do back-end

## Tipos de parâmetros

- Query Params: Parâmetros nomeados na rota após o ? (Filtos, Paginação)
- Route Params: Parâmetros utilizados para identificar recursos
- Request Body: Corpo da requisição, utilizado para criar ou alterar recursos

## Routas da API

- /ongs
  - POST
    - Cadastra uma nova ong e retorna o sua ID
    - body
      - name
      - email
      - whatsapp
      - city
      - uf
  - GET
    - retorna todas as ongs
- /incidents
  - POST
    - Cadastra um novo caso para uma determinada ong e retorna a ID do caso
    - Body Params
      - title
      - description
      - value
    - Headers
      - Authorization: ong_id
  - GET
    - Retorna todos os casos
    - Query Params
      - page (OPCIONAL)
  - DELETE
    - Apaga um caso
    - Route Params
      - ID do caso
    - Headers
      - Authorization: ong_id
- /sessions
  - POST
    - Inicia a sessão de um usuário
    - Body Params
      - ong_id
    - Retorna o nome da ONG
- /profile
  - GET
    - Retorna todos os casos de uma ONG
    - Headers
      - Authorization: ong_id
    - Response
      - Os casos da ONG

## Entities of DB

- ONG
- Incident

## Funcionalities

- [x] Login of ONG
- [x] Logout of ONG (frontend)
- [x] Register of ONG
- [x] Register novos incidents
- [x] Delete incidents
- [x] List incidents especificos of a ONG
- [x] Listar todos os incidents of a ONG
- [x] Get contact with the ONG (WPP & email) (frontend)
- [ ]
