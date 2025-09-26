# Análise de Qualidade de Código em uma API CRUD com SonarQube

Este repositório é um estudo do projeto original [crud-api-users](https://github.com/giovanniamorimprof/crud-api-users), utilizado para uma aplicação prática da ferramenta de análise de qualidade de código SonarQube.

O trabalho consistiu em:
1.  Configurar um ambiente local completo com SonarQube Server e SonarScanner.
2.  Executar a análise estática no código-fonte original.
3.  Identificar e refatorar um ponto crítico de performance no módulo de acesso ao banco de dados (`userModel.js`).
4.  Validar a melhoria com uma nova análise.

## Sobre o Projeto Original

A base de código é uma API simples para gerenciamento de usuários (CRUD), desenvolvida com Node.js, Express e MySQL. Suas funcionalidades incluem:

-   Criar, Listar, Atualizar e Deletar usuários.
-   Endpoints RESTful para manipulação dos dados.

## Tecnologias Utilizadas no Estudo

-   **Backend:** Node.js, Express.js
-   **Banco de Dados:** MySQL (com o driver `mysql2`)
-   **Análise de Qualidade:** SonarQube, SonarScanner

## Pré-requisitos para Execução

-   Node.js (versão 14 ou superior)
-   NPM
-   Um servidor de banco de dados MySQL ativo.

## Como Executar o Projeto Localmente

1.  **Clone este repositório:**
    ```bash
    git clone [https://github.com/MateusLima909/analise-de-codigo.git](https://github.com/MateusLima909/analise-de-codigo.git)
    cd analise-de-codigo
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as Variáveis de Ambiente:**
    Crie um arquivo chamado `.env` na raiz do projeto com as credenciais do seu banco de dados.

    **Exemplo de arquivo `.env`:**
    ```
    DB_HOST=localhost
    DB_PORT=3306
    DB_USER=root
    DB_PASSWORD=sua_senha_aqui
    DB_NAME=nome_do_seu_banco
    ```

4.  **Crie a Tabela no Banco de Dados:**
    Execute o seguinte comando SQL no seu banco de dados para criar a tabela `users`:
    ```sql
    CREATE TABLE users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        phone VARCHAR(20)
    );
    ```

5.  **Inicie o servidor:**
    ```bash
    npm start
    ```
    O servidor estará rodando em `http://localhost:3000`.

## Modificações e Análise Realizada

A principal modificação neste projeto foi a **refatoração do `userModel.js`**. A implementação original criava uma nova conexão com o banco de dados a cada consulta, uma prática ineficiente. A nova versão utiliza um **Pool de Conexões**, que gerencia e reutiliza conexões, garantindo uma performance e estabilidade muito superiores para a API.

Todo esse processo foi acompanhado e validado com o SonarQube, cujas configurações de análise se encontram no arquivo `sonar-project.properties`.
