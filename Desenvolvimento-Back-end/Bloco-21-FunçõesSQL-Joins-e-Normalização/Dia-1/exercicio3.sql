USE hr;
SELECT job_id, AVG(salary)
FROM employees
GROUP BY job_id
ORDER BY AVG(salary) DESC;