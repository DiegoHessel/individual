
create database individuall;
use individuall;
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
