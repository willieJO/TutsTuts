package br.com.edu.tutstuts.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.edu.tutstuts.model.Mensagem;
import br.com.edu.tutstuts.model.Usuario;
import br.com.edu.tutstuts.repository.ChatRepository;

@Service
public class ChatService {
	@Autowired
	private ChatRepository _ChatRepository;
	public void EnviarMensagem(Mensagem mensagem) {
		_ChatRepository.save(mensagem);
	}
	
	public Optional<Mensagem> ObterMensagem(long id) {
		return _ChatRepository.findById(id);
	}
}
