DROP TABLE IF EXISTS students CASCADE;
CREATE TABLE students (
                          id serial primary key,
                          first_name varchar,
                          last_name varchar,
                          isic_number varchar unique,
                          password varchar,
                          nick_name varchar,  
-- other atributes will appear later because we are agil  .........  
);
-- other tables will appear later because we are agil  .........
