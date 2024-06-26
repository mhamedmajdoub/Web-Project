create database users;
use users;

create table users(
	id int primary key auto_increment,
    first_name varchar(50) not null,
    last_name varchar(50) not null,
    email varchar(50) not null,
    password varchar(100) not null
);

select * from users;