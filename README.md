<p align="center">
  <img src="./docs/Capa do curso.png" width="400" />
</p>

Este projeto é uma API Rest em NodeJS e Typescript desenvolvida para fins de aprendizado no curso de **[API Rest em NodeJS e Typescript](https://youtu.be/SVepTuBK4V0)** do canal **[Lucas Souza Dev](https://www.youtube.com/c/LucasSouzaDev)** no YouTube. 


# Sobre o projeto

No projeto é abordado conceitos importantes sobre o mundo do backend.

Tem conceitos como:
- Endpoints
- Controllers
- Banco de dados SQL
- Query builder
- Migrations de banco
- Seeds de banco
- Controle de usuário com email e senha
- Criptografia de senha
- Login de usuários
- Geração e utilização de tokens JWT
- Validação minuciosa de dados que entram nos endpoints
- Paginação de consultas
- Filtros de consultas
- Testes de código para garantir qualidade das entregas
- Uso de diferentes bancos de dados com um mesmo código
- Boas práticas de código, com conceitos do clean code


Está é uma API Rest, então não tem interface nesse repositório. Porém, é possível conectar um interface a ele. A interface está em outro repositório.

No repositório **[youtube-curso-react-materialui-typescript](https://github.com/lvsouza/youtube-curso-react-materialui-typescript/tree/integracao-curso-api-node)** á um projeto em react que se conecta com este backend.


# Como rodar 

Você vai precisar do nodens instalado no seu computador para rodar o projeto.

Clone o repositório:
```
$ git clone https://github.com/lvsouza/youtube-curso-react-materialui-typescript.git
```

Entre na pasta
```
$ cd youtube-curso-react-materialui-typescript
```

Instale as dependências
```
$ yarn install
```

Configure as variáveis ambiente, crie o arquivo `.env` na pasta raiz do projeto coloque o conteúdo a seguir dentro
```
PORT=3333
NODE_ENV=dev

IS_LOCALHOST=true

ENABLED_CORS=[Lista de endereços separados por ";"]
JWT_SECRET=[Uma string qualquer]
```

Rode o projeto
```
$ yarn start
```

