package br.com.edu.tutstuts.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import br.com.edu.tutstuts.model.PessoaFisica;
import br.com.edu.tutstuts.model.Usuario;

public interface UsuarioRepository extends JpaRepository<PessoaFisica,Long>{
	@Query("INSERT INTO Usuario (nome,senha,email,categoria) values('a','b','c','d')")
	void Teste();
	
}
