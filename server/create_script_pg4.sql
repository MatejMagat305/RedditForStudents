DROP TABLE IF EXISTS students CASCADE;
CREATE TABLE students (
                          id serial primary key,
                          isic_number varchar unique,
                          password varchar,
                          nick_name varchar unique
);
select * from students;