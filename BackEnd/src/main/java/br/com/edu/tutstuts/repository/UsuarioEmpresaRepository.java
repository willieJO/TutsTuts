package br.com.edu.tutstuts.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import br.com.edu.tutstuts.model.UsuarioEmpresa;

public interface UsuarioEmpresaRepository  extends JpaRepository<UsuarioEmpresa,Long>{
	
}