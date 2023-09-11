package br.com.edu.tutstuts.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import br.com.edu.tutstuts.model.UsuarioComum;

public interface UsuarioComumRepository  extends JpaRepository<UsuarioComum,Long>{
	
}
