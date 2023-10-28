
CREATE TABLE usuario (
    `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
   `nome` varchar(250),
  `senha` varchar(250),
  `email` varchar(45),
  `foto` varchar(250) DEFAULT 'https://res.cloudinary.com/duondvpwq/image/upload/v1697344132/uexc4falwmplpyz0xmrx.jpg',
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
   `link` varchar(250),
   `foto` varchar(512),
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

ALTER TABLE mensagens
ADD FOREIGN KEY (id_usuario_destino) REFERENCES usuario(id);

ALTER TABLE usuario ADD COLUMN ativo BOOLEAN NOT NULL;

CREATE TABLE permissao (
	id INT(11) PRIMARY KEY,
	descricao VARCHAR(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE usuario_permissao (
	id_usuario INT(11) NOT NULL,
	id_permissao INT(11) NOT NULL,
	FOREIGN KEY (id_usuario) REFERENCES usuario(id),
	FOREIGN KEY (id_permissao) REFERENCES permissao(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- admin
INSERT INTO usuario (id, nome, email, senha, categoria, ativo) values (1, 'Administrador', 'admin@ifsp.edu.br', '$2a$10$X607ZPhQ4EgGNaYKt3n4SONjIv9zc.VMWdEuhCuba7oLAL5IvcL5.', 'show', 1);

-- user
INSERT INTO permissao (id, descricao) values (1, 'ROLE_REGISTER_USER');
INSERT INTO permissao (id, descricao) values (2, 'ROLE_REMOVE_USER');
INSERT INTO permissao (id, descricao) values (3, 'ROLE_SEARCH_USER');


