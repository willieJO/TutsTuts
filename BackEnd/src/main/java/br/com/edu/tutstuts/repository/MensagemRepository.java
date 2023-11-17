package br.com.edu.tutstuts.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.edu.tutstuts.model.Mensagem;

public interface MensagemRepository extends JpaRepository<Mensagem,Long>{
	
}

