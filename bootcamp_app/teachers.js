const { Pool } = require('pg');

const pool = new Pool ({
  user: 'vagrant',
  password: '123', 
  host: 'localhost',
  database: 'bootcampx'
});

const cohortName = process.argv[2];
const values = [`%${cohortName}%`];

const query = `
SELECT teachers.name as teacher, cohorts.name as cohort
FROM assistance_requests 
JOIN students ON students.id = student_id 
JOIN cohorts ON cohorts.id = cohort_id 
JOIN teachers ON teachers.id = teacher_id
WHERE cohorts.name LIKE $1
GROUP BY teacher, cohort
ORDER BY teacher;`

pool.query(query, values)
    .then(res => {
      res.rows.forEach(row => {
        console.log(`${row.cohort}: ${row.teacher}`);
      });
    })
    .catch(err => {
      console.log('query error', err.stack);
    });