
CREATE TABLE Usuario (
    `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
   `nome` varchar(250),
  `senha` varchar(250),
  `email` varchar(45),
  `categoria` VARCHAR(25)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE UsuarioComum (
   `id`  INT PRIMARY KEY
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE UsuarioEmpresa (
   `id` INT PRIMARY KEY,
   `cnpj` VARCHAR(14)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


ALTER TABLE UsuarioComum
ADD FOREIGN KEY (id) REFERENCES Usuario(id);

ALTER TABLE UsuarioEmpresa
ADD FOREIGN KEY (id) REFERENCES Usuario(id);

CREATE TABLE Evento (
   `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `nome` varchar(250),
	`descricao` varchar(250),
     `data_evento` date DEFAULT NULL,
     `cnpj_empresa` INT(14),
     `avaliacao` INT(2),
     `ativo` INT(1),
     `localidade` varchar(100),
   `categoria` VARCHAR(25)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

ALTER TABLE Evento
ADD FOREIGN KEY (cnpj_empresa) REFERENCES Usuario(id);

CREATE TABLE Mensagens (
   `id`  INT PRIMARY KEY AUTO_INCREMENT,
   `data` date DEFAULT NULL,
   `mensagem` varchar(250),
   `id_usuario_origem` INT(11),
   `id_usuario_destino` INT(11)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

ALTER TABLE Mensagens
ADD FOREIGN KEY (id_usuario_origem) REFERENCES Usuario(id);

ALTER TABLE Mensagens
