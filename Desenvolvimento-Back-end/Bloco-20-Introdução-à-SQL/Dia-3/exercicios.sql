USE PecasFornecedores;
SELECT * FROM Pecas
WHERE name LIKE 'Gr%';
SELECT * FROM Fornecimentos
WHERE peca = 2
ORDER BY fornecedor;
SELECT peca, preco, fornecedor FROM Fornecimentos
WHERE fornecedor LIKE '%N%';
SELECT * FROM Fornecedores
WHERE name LIKE '%LTDA%'
ORDER BY name DESC;
SELECT COUNT(*) FROM Fornecedores
WHERE code LIKE '%F%';
SELECT * FROM Fornecimentos
WHERE preco BETWEEN 15 AND 40
ORDER BY preco;
SELECT COUNT(*) FROM Vendas
WHERE DATE(order_date) BETWEEN '2018-04-15' AND '2019-07-30';