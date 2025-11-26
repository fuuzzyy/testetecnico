📦 Teste Técnico – Lista de Produtos

Aplicação React simples e funcional desenvolvida para um teste técnico, consumindo uma API externa e exibindo produtos com busca em tempo real.

<div align="center">
🔧 Tecnologias
<img src="https://img.shields.io/badge/React-149ECA?logo=react&logoColor=white&style=for-the-badge"/> <img src="https://img.shields.io/badge/TailwindCSS-38BDF8?logo=tailwindcss&logoColor=white&style=for-the-badge"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=for-the-badge"/> </div>
🚀 Sobre o projeto

A ideia do teste era criar uma interface simples que consumisse dados de uma API, exibisse uma lista de produtos e tivesse uma barra de busca funcional.
O foco principal foi organização, clareza e funcionamento real.

🎯 Funcionalidades

✔️ Lista os produtos vindos da API

✔️ Busca dinâmica (filtra enquanto digita)

✔️ Loading com animação

✔️ Mensagem de erro caso a API falhe

✔️ Layout limpo e responsivo

✔️ Componentes reaproveitáveis

🌐 API utilizada

A aplicação consome esta API:

https://aplicacaodeteste-6e15d4c66973.herokuapp.com/api/products


Retorno esperado:

{
  "products": [
    {
      "id": 1,
      "name": "Produto Exemplo",
      "price": 59.9,
      "image": "url_da_imagem"
    }
  ]
}

📁 Estrutura do projeto
src/
│── App.jsx              # Lógica principal + consumo da API
│── index.css            # TailwindCSS
│── index.js             # Ponto inicial
│
└── components/
    ├── ProductCard.jsx  # Card individual
    └── SearchBar.jsx    # Barra de pesquisa

▶️ Como rodar o projeto
1️⃣ Clonar o repositório
git clone https://github.com/fuuzzyy/testetecnico

2️⃣ Instalar dependências
npm install

3️⃣ Rodar o servidor
npm start


Acesse em:
➡️ http://localhost:3000

🏗️ Gerar build
npm run build

👤 Autora

Anna Luiza Ramalho de Sousa
📌 GitHub: https://github.com/fuuzzyy

📄 Licença

Licenciado sob MIT License — uso livre para fins educacionais.