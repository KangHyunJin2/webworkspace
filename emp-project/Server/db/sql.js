let emp = {
    list : `select e.emp_no,
                     e.first_name,
                     e.last_name,
                     e.gender,
                     e.hire_date,
                     s.salary,
                     d.dept_no,
                     d.dept_name
FROM employees e JOIN dept_emp h
                ON ( e.emp_no = h.emp_no)
                JOIN departments d
                ON(h.dept_no = d.dept_no)
                JOIN salaries s
                ON( e.emp_no = s.emp_no)
WHERE h.to_date = CAST('9999-01-01' AS DATE)
AND s.to_date = CAST('9999-01-01' AS DATE)

ORDER BY e.emp_no DESC
LIMIT 0,10
`,
    info : `SELECT e.emp_no,
                    e.first_name,
                    e.last_name,
                    e.gender,
                    e.hire_date,
                    s.salary,
                    d.dept_no,
                    d.dept_name
FROM employees e JOIN dept_emp h
                ON ( e.emp_no = h.emp_no)
                JOIN departments d
                ON(h.dept_no = d.dept_no)
                JOIN salaries s
                ON( e.emp_no = s.emp_no)
WHERE h.to_date = CAST('9999-01-01' AS DATE)
AND s.to_date = CAST('9999-01-01' AS DATE)
AND e.emp_no = ?`,
insert : ` INSERT INTO employees SET ?`, //컬럼정보없이 set다음 ? 형태는 객체가 넘어가야한다 그래서 let empData = {};이렇게
update : `UPDATE employees SET? WHERE emp_no =?`, 
delete : ` UPDATE dept_emp
             SET to_date = '2023-12-06'
             WHERE emp_no = ?`,
}

let dept = {
    list : `
    SELECT dept_no FROM departments
    `
}
let sal = {
    insert : `
    INSERT INTO salaries SET ?
    `,

}

let deptEmp = {
    insert : `
    INSERT INTO dept_emp
    SET emp_no = ?, dept_no = ?, from_date = ?, to_date = CAST('9999-01-01' AS DATE)
    `,
    update : `
    UPDATE dept_emp
    SET to_date = ?
    WHERE emp_no = ?
    `
}

module.exports = {
    emp,
    dept,
    sal,
    deptEmp
}
