package br.com.edu.tutstuts.repository;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.com.edu.tutstuts.model.Curtida;
import br.com.edu.tutstuts.model.Evento;

public interface CurtidaRepository extends JpaRepository<Curtida,Long>{
	@Query(
			  value = "SELECT * FROM curtidas_x_evento c WHERE c.usuario_id = ?1 AND evento_id = ?2", 
			  nativeQuery = true)
	Optional<Curtida> BuscaCurtidaDoUsuarioNesseEvento(long usuario_id, long evento_id);
	
	@Query(
			  value = "SELECT * FROM curtidas_x_evento c WHERE c.usuario_id = ?1 AND c.is_curtiu = 1", 
			  nativeQuery = true)
	List<Curtida> ObterEventosCurtidoPeloUsuario(int id);

	@Modifying
    @Query(value = "DELETE FROM curtidas_x_evento c WHERE c.evento_id = :eventoId",nativeQuery = true)
    void deleteByEventoId(Long eventoId);
}
