-- 1. Os 10 registros de exemplos estão no data.sql no /resources

-- 2. Clientes com mais de 3 dias de atraso no pagamento e status "Bloqueado"
SELECT DISTINCT c.*
FROM cliente c
JOIN fatura f ON f.cliente_id = c.id
WHERE c.status_bloqueio = 'B'
  AND f.status_fatura = 'A'
  AND f.data_vencimento < CURDATE() - INTERVAL 3 DAY;

-- 3. Atualizar limite de crédito para zero de clientes bloqueados
UPDATE cliente
SET limite_credito = 0.00
WHERE status_bloqueio = 'B';
