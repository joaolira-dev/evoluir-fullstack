INSERT INTO cliente (nome, cpf, data_nascimento, status_bloqueio, limite_credito)
SELECT * FROM (SELECT 'Maria Oliveira', '11111111111', '1985-01-01', 'A', 4000.00) AS tmp
WHERE NOT EXISTS (SELECT 1 FROM cliente WHERE cpf = '11111111111');

INSERT INTO cliente (nome, cpf, data_nascimento, status_bloqueio, limite_credito)
SELECT * FROM (SELECT 'João Santos', '22222222222', '1990-02-02', 'A', 3500.00) AS tmp
WHERE NOT EXISTS (SELECT 1 FROM cliente WHERE cpf = '22222222222');

INSERT INTO cliente (nome, cpf, data_nascimento, status_bloqueio, limite_credito)
SELECT * FROM (SELECT 'Ana Paula', '33333333333', '1987-03-03', 'A', 5000.00) AS tmp
WHERE NOT EXISTS (SELECT 1 FROM cliente WHERE cpf = '33333333333');

INSERT INTO cliente (nome, cpf, data_nascimento, status_bloqueio, limite_credito)
SELECT * FROM (SELECT 'Carlos Lima', '44444444444', '1992-04-04', 'A', 6000.00) AS tmp
WHERE NOT EXISTS (SELECT 1 FROM cliente WHERE cpf = '44444444444');

INSERT INTO cliente (nome, cpf, data_nascimento, status_bloqueio, limite_credito)
SELECT * FROM (SELECT 'Juliana Castro', '55555555555', '1995-05-05', 'A', 2500.00) AS tmp
WHERE NOT EXISTS (SELECT 1 FROM cliente WHERE cpf = '55555555555');

INSERT INTO cliente (nome, cpf, data_nascimento, status_bloqueio, limite_credito)
SELECT * FROM (SELECT 'Marcos Souza', '66666666666', '1993-06-06', 'A', 3000.00) AS tmp
WHERE NOT EXISTS (SELECT 1 FROM cliente WHERE cpf = '66666666666');

INSERT INTO cliente (nome, cpf, data_nascimento, status_bloqueio, limite_credito)
SELECT * FROM (SELECT 'Fernanda Rocha', '77777777777', '1991-07-07', 'A', 4500.00) AS tmp
WHERE NOT EXISTS (SELECT 1 FROM cliente WHERE cpf = '77777777777');

INSERT INTO cliente (nome, cpf, data_nascimento, status_bloqueio, limite_credito)
SELECT * FROM (SELECT 'Paulo Cesar', '88888888888', '1994-08-08', 'A', 4800.00) AS tmp
WHERE NOT EXISTS (SELECT 1 FROM cliente WHERE cpf = '88888888888');

INSERT INTO cliente (nome, cpf, data_nascimento, status_bloqueio, limite_credito)
SELECT * FROM (SELECT 'Patrícia Almeida', '99999999999', '1996-09-09', 'A', 3200.00) AS tmp
WHERE NOT EXISTS (SELECT 1 FROM cliente WHERE cpf = '99999999999');

INSERT INTO cliente (nome, cpf, data_nascimento, status_bloqueio, limite_credito)
SELECT * FROM (SELECT 'Renato Martins', '00000000000', '1989-10-10', 'A', 3800.00) AS tmp
WHERE NOT EXISTS (SELECT 1 FROM cliente WHERE cpf = '00000000000');




-- Maria Oliveira
INSERT INTO fatura (cliente_id, data_vencimento, data_pagamento, valor, status_fatura)
SELECT id, '2025-07-01', '2025-07-04', 800.00, 'P'
FROM cliente
WHERE cpf = '11111111111'
  AND NOT EXISTS (
    SELECT 1 FROM fatura f
    WHERE f.cliente_id = cliente.id
      AND f.data_vencimento = '2025-07-01'
      AND f.valor = 800.00
  );

INSERT INTO fatura (cliente_id, data_vencimento, data_pagamento, valor, status_fatura)
SELECT id, '2025-06-20', NULL, 1200.00, 'B'
FROM cliente
WHERE cpf = '11111111111'
  AND NOT EXISTS (
    SELECT 1 FROM fatura f
    WHERE f.cliente_id = cliente.id
      AND f.data_vencimento = '2025-06-20'
      AND f.valor = 1200.00
  );

-- João Santos
INSERT INTO fatura (cliente_id, data_vencimento, data_pagamento, valor, status_fatura)
SELECT id, '2025-07-10', NULL, 950.00, 'B'
FROM cliente
WHERE cpf = '22222222222'
  AND NOT EXISTS (
    SELECT 1 FROM fatura f
    WHERE f.cliente_id = cliente.id
      AND f.data_vencimento = '2025-07-10'
      AND f.valor = 950.00
  );

INSERT INTO fatura (cliente_id, data_vencimento, data_pagamento, valor, status_fatura)
SELECT id, '2025-06-30', NULL, 1100.00, 'A'
FROM cliente
WHERE cpf = '22222222222'
  AND NOT EXISTS (
    SELECT 1 FROM fatura f
    WHERE f.cliente_id = cliente.id
      AND f.data_vencimento = '2025-06-30'
      AND f.valor = 1100.00
  );

-- Ana Paula
INSERT INTO fatura (cliente_id, data_vencimento, data_pagamento, valor, status_fatura)
SELECT id, '2025-06-15', '2025-06-16', 700.00, 'P'
FROM cliente
WHERE cpf = '33333333333'
  AND NOT EXISTS (
    SELECT 1 FROM fatura f
    WHERE f.cliente_id = cliente.id
      AND f.data_vencimento = '2025-06-15'
      AND f.valor = 700.00
  );

-- Carlos Lima
INSERT INTO fatura (cliente_id, data_vencimento, data_pagamento, valor, status_fatura)
SELECT id, '2025-06-01', NULL, 1000.00, 'A'
FROM cliente
WHERE cpf = '44444444444'
  AND NOT EXISTS (
    SELECT 1 FROM fatura f
    WHERE f.cliente_id = cliente.id
      AND f.data_vencimento = '2025-06-01'
      AND f.valor = 1000.00
  );

-- Juliana Castro
INSERT INTO fatura (cliente_id, data_vencimento, data_pagamento, valor, status_fatura)
SELECT id, '2025-07-05', NULL, 500.00, 'B'
FROM cliente
WHERE cpf = '55555555555'
  AND NOT EXISTS (
    SELECT 1 FROM fatura f
    WHERE f.cliente_id = cliente.id
      AND f.data_vencimento = '2025-07-05'
      AND f.valor = 500.00
  );

INSERT INTO fatura (cliente_id, data_vencimento, data_pagamento, valor, status_fatura)
SELECT id, '2025-06-15', NULL, 1500.00, 'A'
FROM cliente
WHERE cpf = '55555555555'
  AND NOT EXISTS (
    SELECT 1 FROM fatura f
    WHERE f.cliente_id = cliente.id
      AND f.data_vencimento = '2025-06-15'
      AND f.valor = 1500.00
  );

-- Marcos Souza
INSERT INTO fatura (cliente_id, data_vencimento, data_pagamento, valor, status_fatura)
SELECT id, '2025-06-20', '2025-06-21', 900.00, 'P'
FROM cliente
WHERE cpf = '66666666666'
  AND NOT EXISTS (
    SELECT 1 FROM fatura f
    WHERE f.cliente_id = cliente.id
      AND f.data_vencimento = '2025-06-20'
      AND f.valor = 900.00
  );

-- Fernanda Rocha
INSERT INTO fatura (cliente_id, data_vencimento, data_pagamento, valor, status_fatura)
SELECT id, '2025-07-01', NULL, 1100.00, 'B'
FROM cliente
WHERE cpf = '77777777777'
  AND NOT EXISTS (
    SELECT 1 FROM fatura f
    WHERE f.cliente_id = cliente.id
      AND f.data_vencimento = '2025-07-01'
      AND f.valor = 1100.00
  );

-- Paulo Cesar
INSERT INTO fatura (cliente_id, data_vencimento, data_pagamento, valor, status_fatura)
SELECT id, '2025-06-25', NULL, 1250.00, 'A'
FROM cliente
WHERE cpf = '88888888888'
  AND NOT EXISTS (
    SELECT 1 FROM fatura f
    WHERE f.cliente_id = cliente.id
      AND f.data_vencimento = '2025-06-25'
      AND f.valor = 1250.00
  );

-- Patrícia Almeida
INSERT INTO fatura (cliente_id, data_vencimento, data_pagamento, valor, status_fatura)
SELECT id, '2025-07-03', NULL, 850.00, 'B'
FROM cliente
WHERE cpf = '99999999999'
  AND NOT EXISTS (
    SELECT 1 FROM fatura f
    WHERE f.cliente_id = cliente.id
      AND f.data_vencimento = '2025-07-03'
      AND f.valor = 850.00
  );

-- Renato Martins
INSERT INTO fatura (cliente_id, data_vencimento, data_pagamento, valor, status_fatura)
SELECT id, '2025-07-08', NULL, 950.00, 'B'
FROM cliente
WHERE cpf = '00000000000'
  AND NOT EXISTS (
    SELECT 1 FROM fatura f
    WHERE f.cliente_id = cliente.id
      AND f.data_vencimento = '2025-07-08'
      AND f.valor = 950.00
  );

INSERT INTO fatura (cliente_id, data_vencimento, data_pagamento, valor, status_fatura)
SELECT id, '2025-06-20', NULL, 1050.00, 'A'
FROM cliente
WHERE cpf = '00000000000'
  AND NOT EXISTS (
    SELECT 1 FROM fatura f
    WHERE f.cliente_id = cliente.id
      AND f.data_vencimento = '2025-06-20'
      AND f.valor = 1050.00
  );
