package br.com.edu.tutstuts.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.edu.tutstuts.model.PessoaJuridica;
import br.com.edu.tutstuts.model.Usuario;

public interface EmpresaRepository  extends JpaRepository<PessoaJuridica,Long>{
	
}