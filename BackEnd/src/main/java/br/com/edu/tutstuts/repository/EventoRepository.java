package br.com.edu.tutstuts.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import br.com.edu.tutstuts.model.Evento;

public interface EventoRepository extends JpaRepository<Evento,Long>{
	
}
