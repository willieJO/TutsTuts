CREATE TABLE mensagens (
    `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    'data' date,
    'id_usuario_origem' INT(11),
    'id_usuario_destino' int(11),
    'mensagem' varchar(512)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

ALTER TABLE mensagemXUser
ADD FOREIGN KEY (id_usuario_origem) REFERENCES usuario(id);

ALTER TABLE mensagemXUser
ADD FOREIGN KEY (id_usuario_destino) REFERENCES usuario(id);
