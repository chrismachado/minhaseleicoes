# Sistema de Contabilização de Votos

Este é um sistema para contabilizar votos em eleições brasileiras, utilizando o QR Code gerado pela urna eletrônica. O sistema é composto por um aplicativo móvel em React Native para o frontend e uma API em Spring Boot para o backend.

## Funcionalidades

- **Leitura do QR Code:** O sistema permite que o eleitor escaneie o boletim de urna impresso pela urna eletrônica.
- **Validação e Armazenamento:** Os votos são validados e armazenados em um banco de dados relacional.
- **Exibição em Tempo Real:** O sistema exibe os resultados da votação em tempo real.
<!-- - **Autenticação:** Apenas usuários autorizados podem acessar os resultados completos. -->

## Tecnologias Utilizadas

- **Frontend:** React Native, Expo
- **Backend:** Spring Boot, PostgreSQL
- **Segurança:** JWT, HTTPS
- **Banco de Dados:** PostgreSQL

## Como Rodar o Projeto

### Pré-requisitos

- **Node.js** (para rodar o frontend)
- **Java JDK 17+** (para rodar o Spring Boot)
- **PostgreSQL** (para o banco de dados)

### Rodando o Backend

1. Clone o repositório:
   ```sh
   git clone https://github.com/seuusuario/minhas-eleicoes.git
   ```