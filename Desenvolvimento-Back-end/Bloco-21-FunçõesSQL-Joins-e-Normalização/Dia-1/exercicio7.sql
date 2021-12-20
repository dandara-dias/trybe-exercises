USE hr;
SELECT job_id, SUM(salary)
FROM employees
GROUP BY job_id;