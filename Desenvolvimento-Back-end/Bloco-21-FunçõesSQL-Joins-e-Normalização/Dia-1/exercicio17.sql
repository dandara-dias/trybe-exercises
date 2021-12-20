USE hr;
SELECT last_name, hire_date
FROM employees
WHERE MONTH(hire_date) = 07 AND YEAR(hire_date) = 1987;