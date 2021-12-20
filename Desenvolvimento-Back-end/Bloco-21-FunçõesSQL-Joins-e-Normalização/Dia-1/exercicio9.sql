USE hr;
SELECT job_id, AVG(salary)
FROM employees
GROUP BY job_id
HAVING job_id <> 'IT_PROG'
ORDER BY AVG(salary) DESC;