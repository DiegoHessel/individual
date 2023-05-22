

create database individuall;

use individuall;
select * from cadastro;

create table jogador(
idjogador int primary key auto_increment,
nome varchar (45),
idade int,
titulos int,
gols int,
jogos int,
posicao varchar (45)
);

create table cadastro(
idcadastro int primary key auto_increment,
nome varchar(100),
idade int,
email varchar (250),
senha varchar(100),
fkjogador int, constraint fkjogo foreign key (fkjogador) references jogador (idjogador)
); 

 insert into jogador values
 (null,'DUDU',31,11,86,427,'ATACANTE'),
 (null,'WEVERTON',35, 10,0,295,'GOLEIRO'),
 (NULL,'RAPHAEL VEIGA',27 ,9 ,75,231,'MEIA'),
 (NULL,'GUSTAVO SCARPA',29 , 8,44,230,'MEIA'),
(NULL,'GUSTAVO GOMEZ',31,10,31,243,'zageiro'),
(NULL,'FERNANDO PRASS',44,4,1,274,'GOLEIRO'),
(NULL,'MARCOS',49,12,0,533,'GOLEIRO'),
(NULL,'ZÉ ROBERTO',48,2,10,133,'MEIA'),
(NULL,'VALDIVIA',39,4,41,24,'MEIA'),
(NULL,'MARCOS ASSUNÇÃO',46,1,31,145,'VOLANTE'),
(NULL,'EDMUNDO',51,5,99,223,'ATACANTE'),
(NULL,'ALEX',45,4,78,243,'MEIA');
