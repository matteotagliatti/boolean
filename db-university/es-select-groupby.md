# Ex con Select

```sql
// 1.
SELECT * FROM `students` WHERE YEAR(`date_of_birth`) = 1990;

// 2.
SELECT * FROM `courses` WHERE `cfu` > 10;

// 3.
SELECT * FROM `students` WHERE YEAR(CURDATE()) - YEAR(`date_of_birth`) > 30

// 4.
SELECT * FROM `courses` WHERE `period` = 'I Semestre' AND `year` = 1;

// 5.
SELECT * FROM `exams` WHERE `date` = '2020-06-20' AND HOUR(`hour`) >= 14;

// 6.
SELECT * FROM `degrees` WHERE `level` = 'magistrale';

// 7.
SELECT COUNT(*) AS `department_n` FROM `departments`;

// 8.
SELECT COUNT(*) as `n` FROM `teachers` WHERE `phone` IS NULL
```

# Ex con Group By

```sql
// 1.
SELECT COUNT(*) as `subscriptions`, YEAR(`enrolment_date`) as `year` FROM `students` GROUP BY YEAR(`enrolment_date`)

// 2.
SELECT COUNT(*) as `teachers`, `office_address` FROM `teachers` GROUP BY `office_address`

// 3.
SELECT AVG(`vote`) as `avg_vote`, `exam_id` FROM `exam_student` GROUP BY `exam_id`

// 4.
SELECT COUNT(*) as `n_courses`, `department_id` FROM `degrees` GROUP BY `department_id`
```
