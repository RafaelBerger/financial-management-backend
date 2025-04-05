# Financial Management - Backend

API do aplicativo de controle de gastos pessoais. Fornece endpoints para que o frontend possa cadastrar, visualizar, atualizar e remover transações financeiras, com diferenciação entre ganhos e gastos.

🔗 Frontend do projeto: [Repositório Frontend](https://github.com/RafaelBerger/financial-management-frontend)

## 🚀 Tecnologias

- Node.js
- Express
- PostgreSQL
- Neon (plataforma de banco de dados PostgreSQL na nuvem)

## 🔧 Como rodar o projeto

```bash
# Clone o repositório
git clone https://github.com/RafaelBerger/financial-management-backend.git

# Instale as dependências
npm install

# Crie o .env com os dados do banco e porta da aplicação (exemplo):
DATABASE_URL='sua conexão com o banco de dados'
DEV_PORT='porta usada para desenvolvimento'

(o backend está hospedado no render que usa a já usa a variavel PORT)

# Inicie o servidor
npm run server
