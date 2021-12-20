USE hr;
SELECT first_name, last_name, DATEDIFF(NOW(), hire_date)
FROM employees;