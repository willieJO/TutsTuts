package br.com.edu.tutstuts.service;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.edu.tutstuts.model.Mensagem;
import br.com.edu.tutstuts.model.Usuario;
import br.com.edu.tutstuts.repository.MensagemRepository;
import br.com.edu.tutstuts.repository.UsuarioRepository;

@Service
public class MensagemService {
	@Autowired
	private MensagemRepository _mensagemRepository;
	@Autowired
	private UsuarioRepository _usuarioRepository;
	
	public void EnviarMensagem(Mensagem mensagem) {
		_mensagemRepository.save(mensagem);
	}
	public List<Mensagem> ObterMensagemDoUsuario(int id, int destino) {
		List<Mensagem> todasAsMensagens =_mensagemRepository.ObterMensagemDoUsuario(id, destino);
		todasAsMensagens = todasAsMensagens.stream()
    		.sorted(Comparator.comparing(Mensagem::getId))
    		.collect(Collectors.toList());
		return todasAsMensagens;	
	}
	public List<Usuario> ObterUsuariosDoSistema() {
		  return _usuarioRepository.findAll();
	}
	
}
