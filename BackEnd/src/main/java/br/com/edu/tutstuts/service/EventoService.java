package br.com.edu.tutstuts.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.edu.tutstuts.model.Evento;
import br.com.edu.tutstuts.model.Usuario;
import br.com.edu.tutstuts.repository.EventoRepository;
import br.com.edu.tutstuts.repository.UsuarioRepository;
import br.com.edu.tutstuts.service.exception.NonExistentOrInactiveUserException;

@Service
public class EventoService {
    @Autowired
    private EventoRepository _EventoRepository;
    @Autowired
	private UsuarioRepository _usuarioRepository;

    public void AdicionarEvento(Evento evento) {
    	Optional<Usuario> usuario = _usuarioRepository.findById(evento.getUser().getId());
		if(!usuario.isPresent() || !usuario.get().isAtivo()) {
			throw new NonExistentOrInactiveUserException();
		}
		 _EventoRepository.save(evento);
	}
    
    public List<Evento> ObterEventos() {
    	return _EventoRepository.findAll();
    }
    
}
