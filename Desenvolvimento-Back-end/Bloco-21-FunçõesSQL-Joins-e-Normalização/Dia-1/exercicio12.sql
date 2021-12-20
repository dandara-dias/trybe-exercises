USE hr;
SELECT * FROM employees
WHERE CHAR_LENGTH(first_name) >= 8;