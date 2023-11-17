package br.com.edu.tutstuts.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.edu.tutstuts.model.Mensagem;
import br.com.edu.tutstuts.repository.MensagemRepository;

@Service
public class MensagemService {
	@Autowired
	private MensagemRepository _mensagemRepository;
	
	public void EnviarMensagem(Mensagem mensagem) {
		_mensagemRepository.save(mensagem);
	}
	
}
