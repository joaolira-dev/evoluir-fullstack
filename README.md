# 💳 Gestor de Faturas — Fullstack

Aplicação fullstack desenvolvida como parte do desafio técnico para a vaga de **Estágio em Desenvolvimento Fullstack** 



## 🧪 Instruções de Execução do Projeto
### ✅ Pré-requisitos
- Docker
- Docker Compose


### 🚀 Como Executar
Clone este repositório:
```bash
git clone https://github.com/joaolira-dev/evoluir-fullstack.git
cd evoluir-fullstack
```
Execute o projeto com Docker Compose na raiz do diretorio:
```bash
docker-compose up --build
```
Acesse a aplicação:
- Front-end: http://localhost:5173
- Swagger (API): http://localhost:8080/swagger-ui/index.html

## 🚀 Principais Funcionalidades
- Cadastro e listagem de clientes
- Consulta de faturas e listagem de faturas atrasadas
- Registro de pagamentos com impacto direto nas regras de negócio

## 📌 Regras de Negócio Implementadas
- Faturas pagas mudam o status para Paga (P)
- Pagamentos com mais de 3 dias de atraso resultam no bloqueio do cliente
- Clientes bloqueados têm seu limite de crédito zerado

## Scripts SQL
### 📚✅ Scripts SQL pedidos no desafio estão dentro da pasta /docs no back-end



## 🛠️ Tecnologias Utilizadas
**Back-end:**
- Java 21
- Spring Boot 3
- Spring Data JPA
- Lombok
- MySQL
- Swagger (Documentação da API)
- JUnit 5 + Mockito (Testes unitários)

**Front-end:**
- React.js
- React Router DOM
- Tailwind CSS
- Axios

## ✅ Testes Unitários
Cobertura de serviços com JUnit 5 e Mockito

## 📚 Documentação da API
Disponível via Swagger: http://localhost:8080/swagger-ui/index.html

- ### Dockerfile implementado no back-end
- ### Docker compose implementado na aplicação e banco

## 🧠 O que eu implementaria se tivesse mais tempo:
- Mais funcionalidades e telas no front-end
- Lógicas adicionais e novos fluxos no back-end
- Paginação, autenticação e melhorias na experiência do usuário
