CREATE SCHEMA sx_challenge;

CREATE TABLE companies (
    codigo      INT PRIMARY KEY AUTO_INCREMENT,
    nome		 VARCHAR(50),
    cnpj		VARCHAR(14),
    email	    varchar(50) DEFAULT NULL,
    telefone	VARCHAR(50) DEFAULT NULL,
	endereco    varchar(100) DEFAULT NULL
);

CREATE TABLE employer(
	codigo   	INT PRIMARY KEY AUTO_INCREMENT,
    cpf		    VARCHAR(11),
    nome	    VARCHAR(50),
    email	    VARCHAR(50) DEFAULT NULL,
    telefone    VARCHAR(50) DEFAULT NULL,
    endereco    VARCHAR(100) DEFAULT NULL,
    empresa     VARCHAR(50)
);

