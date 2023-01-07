-- Databese para appFinal --
create database appmenu;

-- selecciono la Database --
use appmenu;
# DATETIME YYY-MM-DD HH:MM:SS

-- creamos la tabla usuarios-clientes menuclik --
create table usuarios(
idUsuarios int unsigned not null auto_increment,
nombre varchar(100) not null,
email varchar(200) not null,
phone bigint not null,
primary key (idUsuarios)
);

create table productos(
idMenus int unsigned not null auto_increment,
Menu varchar(80) not null,
precio int not null,
primary key(idMenus)
);

create table pedidos(
idPedidos int unsigned not null auto_increment,
idUsuarios int unsigned not null,
idMenus int unsigned not null,
cantidad int not null,
precio int not null,
total int not null,
data_create timestamp default current_timestamp,
primary key(idPedidos),
foreign key(idUsuarios) references usuarios(idUsuarios),
foreign key(idmenus) references productos(idMenus)
);