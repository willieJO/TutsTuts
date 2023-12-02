
CREATE TABLE curtidas_x_evento (
   `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
   `usuario_id` int(11),
   `evento_id` int,
   `is_curtiu` bit
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

ALTER TABLE curtidas_x_evento
ADD FOREIGN KEY (usuario_id) REFERENCES usuario(id);

ALTER TABLE curtidas_x_evento
ADD FOREIGN KEY (evento_id) REFERENCES evento(id);
