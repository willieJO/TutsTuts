package br.com.edu.tutstuts.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import br.com.edu.tutstuts.model.UsuarioComum;
import br.com.edu.tutstuts.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario,Long>{
	public Optional<Usuario> findByEmail(String email);
}
