
-- Databese para appFinal --
create database appmenu;

-- selecciono la Database --
use appmenu;

-- creamos la tabla usuarios-clientes menuclik --
create table usuarios(
idUsuarios int unsigned not null auto_increment,
nombre varchar(100) not null,
email varchar(200) not null,
phone int not null,
primary key (idUsuarios)
);

