-- create database for burgers --
CREATE DATABASE burgers_db;
USE burgers_db;

-- create the table burgers --
CREATE TABLE burgers
(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

