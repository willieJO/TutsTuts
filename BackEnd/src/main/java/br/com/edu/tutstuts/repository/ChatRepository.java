package br.com.edu.tutstuts.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import br.com.edu.tutstuts.model.Mensagem;

public interface ChatRepository extends JpaRepository<Mensagem,Long>{
	public Optional<Mensagem> findByOrigeml(String id_usuario_origem);
}
