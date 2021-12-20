USE hr;
SELECT employee_id, first_name, DAY(hire_date)
FROM employees;