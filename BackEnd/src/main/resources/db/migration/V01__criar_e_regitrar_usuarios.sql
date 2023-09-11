
CREATE TABLE usuario (
    `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
   `nome` varchar(250),
  `senha` varchar(250),
  `email` varchar(45),
  `categoria` VARCHAR(25)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE usuario_comum (
   `id`  INT PRIMARY KEY
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE usuario_empresa (
   `id` INT PRIMARY KEY,
   `cnpj` VARCHAR(14)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


ALTER TABLE usuario_comum
ADD FOREIGN KEY (id) REFERENCES usuario(id);

ALTER TABLE usuario_empresa
ADD FOREIGN KEY (id) REFERENCES usuario(id);

CREATE TABLE evento (
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

ALTER TABLE evento
ADD FOREIGN KEY (cnpj_empresa) REFERENCES usuario(id);

CREATE TABLE mensagens (
   `id`  INT PRIMARY KEY AUTO_INCREMENT,
   `data` date DEFAULT NULL,
   `mensagem` varchar(250),
   `id_usuario_origem` INT(11),
   `id_usuario_destino` INT(11)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

ALTER TABLE mensagens
ADD FOREIGN KEY (id_usuario_origem) REFERENCES usuario(id);

