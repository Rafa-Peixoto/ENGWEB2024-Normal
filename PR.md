# Projeto ENGWEB2024-Normal

## Descrição do Projeto

Este projeto foi desenvolvido para o teste de Engenharia Web 2024. Ele consiste em duas partes principais: uma API de dados e uma interface web para visualização dos dados. A API de dados fornece informações sobre contratos e a interface web permite visualizar e interagir com esses dados.

## Estrutura do Repositório

O repositório está organizado da seguinte forma:

- **ex1/**: Contém a implementação da API de dados.
- **ex2/**: Contém a implementação da interface web.
- **scripts/**: Contém os scripts usados para converter o dataset de CSV para JSON e manipular o JSON.

## Persistência de Dados

Os dados foram fornecidos em formato CSV e foram convertidos para JSON utilizando dois scripts:

1. **Conversão de CSV para JSON**:
    - Script utilizado para converter o dataset CSV em um arquivo JSON.
    - O script lê o arquivo CSV e escreve os dados em um arquivo JSON.

2. **Manipulação do JSON**:
    - Script utilizado para formatar o JSON adequadamente para a importação no MongoDB.
    - O script garante que o campo `precoContratual` seja convertido para um número.

Usei tambem o script setup-container.py para a criação do container.

Os comandos usados foram:

npx express-generator --no-view ex1
cd ex1
npm install
npm install axios --save
npm install mongoose --save

Configurar o MongoDB:

docker ps
docker exec -it <dockerID> mongosh
use contratos

bash
npm start

Exercicio 2: Interface Web

npx express-generator --view=pug ex2
cd ex2
npm install
npm install axios --save

npm start