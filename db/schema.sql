drop database if exists burgers_db;
create database burgers_db;
use burgers_db;

create table burgers(
    id not null auto_increment,
    name varchar(255) not null,
    eaten boolean default false,
    primary key (id)
);

select * from burgers;