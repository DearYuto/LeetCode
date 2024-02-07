# Write your MySQL query statement below
SELECT NAME, BONUS FROM Employee
LEFT JOIN BONUS ON Employee.empId = BONUS.empId
WHERE BONUS < 1000 OR BONUS IS NULL;