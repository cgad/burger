create database burgers_db;
use burgers_db;

create table burgers(
    id int not null auto_increment,
    name varchar(255) not null,
    eaten boolean default false,
    createdAt timestamp not null,
    primary key (id)
);