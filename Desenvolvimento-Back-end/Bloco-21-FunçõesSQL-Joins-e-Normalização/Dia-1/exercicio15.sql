USE hr;
SELECT employee_id, first_name, MONTH(hire_date)
FROM employees;