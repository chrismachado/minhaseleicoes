# Requisitos do Sistema

## Funcionais

1. **Leitura do QR Code:**
   - O sistema deve ser capaz de ler o QR Code gerado pela urna eletrônica.
   - O QR Code contém informações sobre o voto e o candidato escolhido.

2. **Validação dos Votos:**
   - O sistema deve validar os dados extraídos do QR Code.
   - Apenas votos legítimos (segundo o formato do QR Code) serão aceitos.

3. **Armazenamento dos Votos:**
   - Os votos lidos devem ser armazenados em um banco de dados.
   - Cada voto será registrado com informações como o candidato escolhido e a data de recebimento.

4. **Exibição dos Resultados:**
   - O sistema deve mostrar os votos em tempo real.
   - O aplicativo móvel exibirá gráficos com a contagem de votos.

5. **Autenticação:**
   - Usuários administradores poderão acessar os resultados completos.
   - A autenticação será baseada em JWT.

## Não Funcionais

1. **Escalabilidade:**
   - O sistema deve ser capaz de lidar com uma grande quantidade de votos sem afetar o desempenho.

2. **Segurança:**
   - A comunicação entre frontend e backend deve ser realizada via HTTPS.
   - Todos os dados do usuário e votos devem ser protegidos e criptografados.

3. **Disponibilidade:**
   - O sistema deve estar disponível 24/7, com baixo tempo de inatividade.

4. **Responsividade:**
   - O frontend deve ser responsivo e funcionar em diferentes dispositivos móveis.

## Tecnologias Recomendadas

- **Frontend:** React Native, Expo
- **Backend:** Spring Boot, PostgreSQL
- **Segurança:** JWT
- **Banco de Dados:** PostgreSQL
