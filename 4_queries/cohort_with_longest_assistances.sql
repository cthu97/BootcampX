SELECT cohorts.name as name, AVG(completed_at - started_at) as average 
FROM assistance_requests
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
GROUP BY cohorts.name 
ORDER BY average desc
LIMIT 1;