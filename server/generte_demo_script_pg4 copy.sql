truncate table  users  restart identity cascade;

insert into users(name, isic)  select
                 ('first_name'||i::varchar) as name ,
                 ceil(random() * 400000) as isic

from generate_series(1, 50) as seq(i) ;