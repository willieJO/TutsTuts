package br.com.edu.tutstuts.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import br.com.edu.tutstuts.model.Mensagem;

public interface MensagemRepository extends JpaRepository<Mensagem,Long>{
    @Query(
			  value = "SELECT * FROM mensagens where id_usuario_origem = ?1 and id_usuario_destino = ?2 UNION SELECT * FROM mensagens where id_usuario_origem = ?2 and id_usuario_destino = ?1", 
			  nativeQuery = true)
	public List<Mensagem> ObterMensagemDoUsuario(int id, int destino );
}

