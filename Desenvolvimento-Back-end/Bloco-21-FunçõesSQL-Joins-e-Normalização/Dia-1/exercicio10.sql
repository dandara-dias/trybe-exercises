USE hr;
SELECT department_id, AVG(salary), COUNT(*)
FROM employees
GROUP BY department_id
HAVING COUNT(*) > 10;