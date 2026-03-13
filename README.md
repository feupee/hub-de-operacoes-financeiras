# Documentação da API Credflow com Swagger/OpenAPI

## 🎯 Acesso à Documentação

A documentação interativa da API está disponível em:
**http://localhost:8080/api/docs**

## 📋 Endpoints Documentados

### 1. Health Check

- **GET /**: Verifica se a API está funcionando

### 2. Usuários (/users)

- **POST /users**: Criar novo usuário
  - Body: `{ name, email, password }`
  - Validações: Email válido, senha com no mínimo 6 caracteres
- **GET /users**: Listar todos os usuários

### 3. Contratos (/contracts)

- **POST /contracts**: Criar novo contrato
  - Body: `{ customerName, amount, status }`
  - Status possíveis: pending, active, completed, cancelled
- **GET /contracts**: Listar todos os contratos

### 4. Pagamentos (/payments)

- **POST /payments**: Criar novo pagamento
  - Body: `{ contractId, amount, method, status }`
  - Métodos: credit_card, bank_transfer, pix, boleto
  - Status: pending, processing, completed, failed
- **GET /payments**: Listar todos os pagamentos

## 🛠️ Funcionalidades Swagger

### Testar Requisições Diretamente

1. Acesse http://localhost:8080/api/docs
2. Clique em um endpoint
3. Clique em "Try it out"
4. Preencha os parâmetros
5. Clique em "Execute"

### Visualizar Modelos

- Scroll down para ver exemplos de request/response
- Cada modelo tem descrição detalhada de cada campo

### Download da Especificação OpenAPI

- JSON: http://localhost:8080/api-json
- YAML: http://localhost:8080/api-yaml

## 📝 Exemplos de Recursos

### Criar Usuário

```bash
POST http://localhost:8080/users
Content-Type: application/json

{
  "name": "João Silva",
  "email": "joao@example.com",
  "password": "senha123"
}
```

### Criar Contrato

```bash
POST http://localhost:8080/contracts
Content-Type: application/json

{
  "customerName": "Empresa XYZ",
  "amount": 5000,
  "status": "pending"
}
```

### Criar Pagamento

```bash
POST http://localhost:8080/payments
Content-Type: application/json

{
  "contractId": 1,
  "amount": 1250,
  "method": "credit_card",
  "status": "pending"
}
```

## 🔐 Validações Automáticas

A API já valida automaticamente:

- ✅ Email em formato válido
- ✅ Senha com mínimo 6 caracteres
- ✅ Valores numéricos corretos
- ✅ Campos obrigatórios preenchidos
- ✅ Enums para status e métodos

Erros retornam status 400 com mensagem descritiva.

## 📚 Tags de Documentação

- **health**: Verificação de saúde da API
- **users**: Gerenciamento de usuários
- **contracts**: Gerenciamento de contratos
- **payments**: Gerenciamento de pagamentos

## 🚀 Próximas Melhorias

Você pode adicionar aos endpoints:

- `@ApiParam()` para parâmetros de rota (ex: GET /users/:id)
- `@ApiQuery()` para query parameters (ex: filtros e paginação)
- `@ApiBearerAuth()` para autenticação JWT
- `@ApiConsumes()` para diferentes tipos de conteúdo
- Mais detalhes de erro com `@ApiErrorResponse()`

## 📖 Referências

- [NestJS Swagger Docs](https://docs.nestjs.com/openapi/introduction)
- [Swagger/OpenAPI Spec](https://swagger.io/specification/)
