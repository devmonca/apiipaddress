# IP Address

Este é um projeto de estudo com o objetivo de desenvolver uma aplicaçao web que consome uma API que busca o endereço pelo IP ou domínio, para isso usei a Ipify. Ela faz uma busca de endereço pelo IP ou domínio. Com este projeto aprendi: 

- Estilização com styled components
- UseEffect para atualização de estados em componentes
- Validação de formulário com React-hook-form e Zod
- Reforcei fundamentos do React, como: gerenciamento de estado e context API

### Tecnologias Utilizadas
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="react"/>
<img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="vite"/>
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript"/>
<img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
<img src="https://img.shields.io/badge/zod-%233068b7.svg?style=for-the-badge&logo=zod&logoColor=white">
<img src="https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white">

### Dificuldades enfrentadas

- Pela falta de experiência com API, inicialmente foi difícil de pensar em como compartilhar os dados que vem das requisições e compartilhar com os demais componentes. Então usei o context API para gerenciar os dados da API e o fetch para realizar as requisições

### O que tomei como aprendizado para o próximo projeto?

- Pensar melhor na estrutura ao utilizar API pois deixei a lógica dela para fazer por último
- Realizar testes durante o desenvolvimento

### Dependências e versões necessárias
- Node.js - versão 18+ ou 20+
- React - versão 18.3.1
- Zod - versão 3.23.8
- React hook form - versão 7.53.2
- Leaflet - versão 1.9.4
- Dotenv - versão 16.4.5
- Hookform/resolvers: versão 3.9.1

## Como rodar o projeto ✅

### Instalação do Node.js

Este projeto requer o **Node.js** versão 18+ ou 20+. Abaixo estão as instruções para instalação do Node.js em diferentes sistemas operacionais.

#### Windows

1. **Acesse o site oficial do Node.js:**  
    Vá para [https://nodejs.org/](https://nodejs.org/) e baixe o instalador adequado para o Windows (versão 20.x).

2. **Execute o instalador:**  
   Siga as instruções do instalador. Certifique-se de marcar a opção "Add to PATH" durante a instalação.

3. **Verifique a instalação:**  
   Abra o **Prompt de Comando** ou **PowerShell** e execute o seguinte comando para verificar se o Node.js foi instalado corretamente:

   
        node -v

    Você deverá ver algo como v20.x.x.

#### macOS

1. **Via Homebrew (Recomendado):**  
    Se você já usa o Homebrew, instale o Node.js executando o comando abaixo no terminal:

        brew install node@20
2. **Instalação manual:** 

    Acesse o site oficial do Node.js e baixe o instalador do macOS para a versão 18.x ou 20.x.
    Siga as instruções do instalador.

3. **Verifique a instalação:**
    Abra o terminal e execute:

        node -v
    Certifique-se de que a versão instalada é 18.x ou 20.x.

### Linux
1. **Via Node Version Manager (NVM) [Recomendado]:**
    A maneira recomendada de instalar o Node.js no Linux é usando o NVM.

    Instale o NVM:

        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash

    Carregue o NVM:

        source ~/.bashrc
    Instale o Node.js (versão 20):

        nvm install 20

    Verifique a instalação:

        node -v
2. **Instalação manual via apt (Ubuntu/Debian):**
    
    Atualize os pacotes:

        sudo apt update
    
    Instale o Node.js 20.x:

        curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash - sudo apt install -y nodejs
    
    Verifique a instalação:
    
        node -v
    O resultado deve ser v20.x.x.

### Instalando todas as dependências
- Depois de instalar o Node.js corretamente, siga os passos abaixo para instalar as dependências do projeto:

    Clone o repositório:

        git clone https://github.com/gabrieldev4/ignitefeed.git

    Navegue até o diretório do projeto:


        cd nome-do-projeto

    Instale as dependências:

        npm install react-icons --save
        npm install

## Visualizando o projeto✅

Para visualizar o projeto, basta rodar o seguinte comando:

    npm run dev

O Vite irá exibir no console o endereço para visualizar o projeto no navegador, algo como:


    Local: http://localhost:3000/

Abra o navegador e acesse o link fornecido.