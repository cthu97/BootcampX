SELECT name, email, id, cohort_id 
FROM students 
WHERE email NOT LIKE '@gmail.com' 
And phone IS NULL;