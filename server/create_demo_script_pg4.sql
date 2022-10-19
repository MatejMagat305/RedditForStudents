drop table if exists users cascade;
create table users
(
    id serial primary key,
    name varchar,
    isic integer
);