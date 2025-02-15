# Arquitetura do Sistema de Contabilização de Votos

## Visão Geral

Este sistema tem como objetivo a contabilização dos votos em uma eleição brasileira, utilizando o QR Code gerado pela urna eletrônica. O sistema será composto por um frontend (React Native) e um backend (Spring Boot), que se comunicarão por meio de uma API REST.

## Componentes

### 1. **Frontend (React Native)**
O frontend será responsável por capturar o QR Code do boletim de urna, extrair os dados e exibi-los para o usuário. A principal biblioteca utilizada será o `expo-barcode-scanner` para leitura do QR Code.

- **Telinhas principais:**
  - **Scanner de QR Code**: Captura os dados do boletim de urna.
  - **Exibição dos Votos**: Mostra os votos contados.
  - **Resultados em Tempo Real**: Exibe gráficos e estatísticas.

### 2. **Backend (Spring Boot)**
O backend será responsável por processar os votos, validar os dados recebidos e armazená-los em um banco de dados relacional.

- **Endpoints principais:**
  - **POST /votos**: Recebe os votos do frontend e os armazena.
  - **GET /votos**: Retorna os votos contabilizados.
  
- **Lógica de negócio**:  
  - Processamento e validação dos votos.
  - Armazenamento dos votos em um banco de dados relacional.

### 3. **Banco de Dados**
Será utilizado um banco de dados relacional (PostgreSQL ou outro) para armazenar os votos recebidos. O banco conterá tabelas como:
  - **Voto**: Para armazenar cada voto individualmente, com informações do candidato e da eleição.
  - **Resultado**: Para armazenar o total de votos por candidato.

### 4. **Segurança**
A comunicação entre o frontend e o backend será feita via HTTPS, e a autenticação será baseada em JWT para garantir que apenas usuários autorizados possam registrar e visualizar votos.

## Fluxo do Sistema

1. O eleitor escaneia o QR Code do boletim de urna.
2. O app envia os dados para o backend via API REST.
3. O backend valida os dados e armazena os votos.
4. O sistema exibe os resultados em tempo real no app.

## Tecnologias Utilizadas

- **Frontend:** React Native, Expo, expo-barcode-scanner
- **Backend:** Spring Boot, PostgreSQL
- **Comunicação:** API REST (JSON)
- **Segurança:** JWT, HTTPS
