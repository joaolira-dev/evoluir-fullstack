
CREATE TABLE IF NOT EXISTS cliente (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(20) NOT NULL UNIQUE,
    data_nascimento DATE NOT NULL,
    status_bloqueio VARCHAR(1) NOT NULL,
    limite_credito DECIMAL(10,2) NOT NULL
);

CREATE TABLE IF NOT EXISTS fatura (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    cliente_id BIGINT NOT NULL,
    data_vencimento DATE NOT NULL,
    data_pagamento DATE,
    valor DECIMAL(10,2) NOT NULL,
    status_fatura VARCHAR(1) NOT NULL,
    FOREIGN KEY (cliente_id) REFERENCES cliente(id)
);
