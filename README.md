# 🎟️ e-Ticket — Sistema de Compra de Ingressos

<p align="center">
  <img src="./assets/PNG/Logo e-tricket.png" alt="Logo e-Ticket" width="200"/>
</p>

> Aplicação front-end para compra de ingressos com controle de estoque em tempo real, validação de quantidade e layout responsivo.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/status-concluído-4ade80?style=flat-square)

---

<img width="999" height="871" alt="image" src="https://github.com/user-attachments/assets/9161e515-3966-440c-9527-033d3fb500d8" />

---

## 📋 Índice

- [Sobre o projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Como executar](#-como-executar)
- [Estrutura do projeto](#-estrutura-do-projeto)
- [Design e decisões técnicas](#-design-e-decisões-técnicas)
- [Autor](#-autor)

---

## 💡 Sobre o projeto

O **e-Ticket** é uma aplicação front-end de venda de ingressos desenvolvida como projeto de portfólio. O sistema permite ao usuário escolher o tipo de ingresso (Pista, Cadeira Superior ou Cadeira Inferior), informar a quantidade desejada e finalizar a compra — com validação de estoque em tempo real e feedback imediato na tela.

O projeto foi construído com HTML semântico, CSS organizado em arquivos separados e JavaScript puro, sem nenhuma dependência externa.

---

## ✅ Funcionalidades

- [x] Seleção de tipo de ingresso (Pista, Cadeira Superior, Cadeira Inferior)
- [x] Entrada de quantidade com validação de campo numérico
- [x] Verificação de estoque disponível antes de confirmar a compra
- [x] Atualização do estoque em tempo real após cada compra
- [x] Feedback de confirmação ou erro exibido diretamente na tela
- [x] Layout responsivo (desktop e mobile)

---

## 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| **HTML5** | Estrutura semântica com `<header>`, `<main>`, `<form>`, `<section>` e `<ul>` |
| **CSS3** | Reset, layout com Flexbox, gradiente de fundo, responsividade com media queries |
| **JavaScript (ES6+)** | Manipulação de DOM, lógica de compra e controle de estoque |
| **Google Fonts** | Tipografia: Chakra Petch (títulos) + Inter (corpo) |

Nenhuma biblioteca ou framework externo foi utilizado — JavaScript vanilla puro.

---

## 🚀 Como executar

### Pré-requisitos

Apenas um navegador moderno. Não há dependências, build steps ou servidores necessários.

### Executar localmente

```bash
# 1. Clone o repositório
git clone https://github.com/dida0982/e-ticket.git

# 2. Acesse a pasta
cd e-ticket

# 3. Abra o arquivo no navegador
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```

Ou simplesmente arraste o `index.html` para o seu navegador.

---

## 📁 Estrutura do projeto

```
e-ticket/
├── index.html              # Estrutura da aplicação
├── js/
│   └── app.js              # Lógica de compra e controle de estoque
├── styles/
│   ├── _reset.css          # Reset e estilos base globais
│   └── style.css           # Estilos da aplicação e responsividade
└── assets/
    ├── PNG/                # Logo, imagem de fundo, seta do select
    └── SVG/                # Grafismo decorativo, hachuras, ingresso
```

---

## 🎨 Design e decisões técnicas

### Visual

O layout usa um fundo escuro com gradiente azul-marinho e detalhes em verde neon (`#00F4BF`) e azul elétrico (`#1875E8`), criando uma identidade visual de evento. A tipografia combina **Chakra Petch** nos títulos (peso e impacto) com **Inter** nos elementos de formulário e lista (legibilidade).

### CSS separado por responsabilidade

Os estilos foram divididos em dois arquivos:

- `_reset.css` — zeragem de margens, padding, box-sizing, remoção das setas nativas do `input[type="number"]` e normalização de imagens.
- `style.css` — layout com Flexbox, gradiente de fundo, estilo do formulário, seção de disponibilidade e dois breakpoints de responsividade (`768px` e `480px`).

### Lógica JavaScript

A lógica é dividida em duas funções com responsabilidades distintas:

```js
// Lê os valores do formulário e exibe o resumo
function comprar() { ... }

// Valida o estoque e atualiza a quantidade disponível no DOM
function processarCompra(tipo, qtd) { ... }
```

O controle de estoque é feito diretamente no DOM: o valor exibido em cada `<span>` de quantidade é lido, comparado com o pedido e decrementado em caso de sucesso. Se a quantidade solicitada for maior que o disponível, a compra é bloqueada e uma mensagem de erro é exibida.

### Responsividade

Dois breakpoints cobrem os principais cenários:

| Largura | Comportamento |
|---|---|
| > 768px | Layout horizontal, formulário em linha, grafismo visível |
| ≤ 768px | Formulário em coluna, elementos centralizados, grafismo oculto |
| ≤ 480px | Ajuste de tamanho de fonte nos títulos e lista de disponibilidade |

---

## 👤 Autor

**Guilherme Barros**

<img src="https://github.com/dida0982.png" width="120" alt="Foto de perfil">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/guilherme-barros-6a0369209/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/dida0982)
[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=netlify&logoColor=white)](https://developerguilhermebarros.netlify.app)

---

<p align="center">
  <sub>Projeto desenvolvido para fins de aprendizado e portfólio.</sub>
</p>
