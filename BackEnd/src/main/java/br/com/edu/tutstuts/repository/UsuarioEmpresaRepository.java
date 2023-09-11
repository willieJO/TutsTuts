package br.com.edu.tutstuts.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.edu.tutstuts.model.UsuarioEmpresa;
import br.com.edu.tutstuts.model.Usuario;

public interface UsuarioEmpresaRepository  extends JpaRepository<UsuarioEmpresa,Long>{
	
}