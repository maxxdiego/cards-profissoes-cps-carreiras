# CPSC Cards Profissões

Aplicação web para gerenciamento e visualização de cards de profissões, desenvolvida com React, Next.js e TypeScript.

## 🛠️ Tecnologias

- [React](https://react.dev/)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)

## ✅ Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 18.18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

## 🚀 Como rodar o projeto

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/cpsc-cards-profissoes.git
```

Entre na pasta do projeto:

```bash
cd cpsc-cards-profissoes
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📦 Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção |
| `npm start` | Inicia o servidor em modo de produção |
| `npm run lint` | Verifica erros de lint no código |

## 📁 Estrutura do projeto
CPSC-CARDS-PROFISSOES/
├── .next/
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── node_modules/
├── public/
└── src/
    └── components/
        └── features/
            └── flashcards/
                ├── __tests__/
                ├── components/
                │   ├── FlashCardGrid.tsx
                │   └── FlashCardItem.tsx
                ├── hooks/
                │   └── useFlashCardAnimation.ts
                ├── index.ts
                ├── styles.ts
                └── types.ts

## 📝 Licença

Este projeto está sob a licença MIT.