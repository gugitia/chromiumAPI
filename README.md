# Chromium Api

A aplicação Chromium Api desenvolvida com a tecnologia Node.js é responsavel pela comunicação entre o banco de dados mongoDB e o front-end em react Chromium App (https://github.com/gugitia/chromiumApp)
Ela foi construida sob conceitos de Clean Code e Programação Orientada a Objetos trabalhando com classes de modelos e encapsulamento.

### Pré-requisitos

Ferramentas necessárias para rodar o projeto:
- Node.js
- NPM

### Passos

1. Clone o repositório:
    ```
    git clone https://github.com/gugitia/chromiumAPI.git
    ```
2. Navegue até o diretório do projeto:
    ```
    cd chromiumAPI
    ```
3. Instale as dependências:
    ```bash
    npm install
    ```
4. (Opcional) Configure variáveis de ambiente:

    Edite o arquivo `.env` com suas configurações.

5. Inicie a aplicação:
    ```bash
    npm start
    ```

## Uso

### Rotas

A Aplicação possui 5 rotas principais:

const userRoutes = require("./routes/userRoutes");

const productsRoutes = require("./routes/productsRoutes");

...

router.use("/usuario", userRoutes);

router.use("/produtos", productsRoutes);

router.use("/ordem", orderRoutes);

router.use("/staff", staffRoutes);

router.use("/login", authRoutes);

### Endpoints

Todas as rotas, com exceção da /usuario, possuem 5 endpoints tal quais:

router.get("/", OrderController.getOrders);

router.get("/:id", OrderController.getOrderById);

router.post("/", OrderController.createOrder);

router.put("/:id", OrderController.updateOrder);

router.delete("/:id", OrderController.deleteOrder);



A /usuario possue os endpoits abaixo e realiza o login de usuarios e de staffs

router.post("/staff", AuthController.loginStaff);

router.post("/user", AuthController.loginUser);

#### Mapeamento

A conexão com o banco esta localizada em ../src/config/server

Os modelos estão em ../src/models

A rotas em ../src/routes

A controller em ../src/controllers

