SELECT COUNT(assistance_requests.*) as total_assistances, students.name FROM assistance_requests 
JOIN students on student_id 
WHERE students.name = 'Elliot Dickinson'
GROUP BY students.name;