package br.com.edu.tutstuts.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import br.com.edu.tutstuts.model.Evento;

public interface EventoRepository extends JpaRepository<Evento,Long>{
	@Query(
			  value = "SELECT * FROM evento e WHERE e.nome LIKE %?1%", 
			  nativeQuery = true)
	List<Evento> BuscaEventosPeloNome(String palavraChave);
}
