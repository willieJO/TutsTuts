package br.com.edu.tutstuts.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;

import br.com.edu.tutstuts.model.Evento;
import br.com.edu.tutstuts.model.Usuario;
import br.com.edu.tutstuts.repository.CurtidaRepository;
import br.com.edu.tutstuts.repository.EventoRepository;
import br.com.edu.tutstuts.repository.UsuarioRepository;
import br.com.edu.tutstuts.service.exception.NonExistentOrInactiveUserException;

@Service
public class EventoService {
    @Autowired
    private EventoRepository _EventoRepository;
    @Autowired
	private UsuarioRepository _usuarioRepository;
	@Autowired
	private CurtidaRepository _curtidaRepository;

    public void AdicionarEvento(Evento evento) {
    	Optional<Usuario> usuario = _usuarioRepository.findById(evento.getUser().getId());
		if(!usuario.isPresent() || !usuario.get().isAtivo()) {
			throw new NonExistentOrInactiveUserException();
		}
		 _EventoRepository.save(evento);
	}
    public void AtualizarEvento(Evento evento) {
		_EventoRepository.save(evento);
	}
    public List<Evento> ObterEventos() {
    	List<Evento> eventos =  _EventoRepository.findAll();
    	if (eventos.size() > 0) {
    		eventos.stream()
    			.forEach(x -> {
    				x.setCurtidasDoEvento(_EventoRepository.ObterQuantidadeDeCurtidasDoEvento(x.getId()));
    			});
    	}
    	return eventos;
    }
	 public List<Evento> ObterEventosFiltrado(int id) {
		 List<Evento> eventos = _EventoRepository.ObterEventosFiltrado(id);
    	 if (eventos.size() > 0) {
     		eventos.stream()
     			.forEach(x -> {
     				x.setCurtidasDoEvento(_EventoRepository.ObterQuantidadeDeCurtidasDoEvento(x.getId()));
     			});
     	}
    	return eventos;
    }
    public List<Evento> BuscaEventosPeloNome(String pesquisa) {
    	return _EventoRepository.BuscaEventosPeloNome(pesquisa);
    }

	public ResponseEntity<List<Evento>> ObterEventoPorId(int id) {
		Optional<Evento> evento =  _EventoRepository.findById((long)id);
		if (evento.isPresent()) {
			evento.stream()
    			.forEach(x -> {
    				x.setCurtidasDoEvento(_EventoRepository.ObterQuantidadeDeCurtidasDoEvento(x.getId()));
    			});
			List<Evento> eventos = new ArrayList<>();
			eventos.add(evento.get());
			return ResponseEntity.ok(eventos);
		}
		return ResponseEntity.notFound().build();
	}
	public Object ObterEventosEUsuariosParaBusca() {
    	 return _EventoRepository.ObterEventosEUsuariosParaBusca();
    }
	public List<Evento> ObterEventosDesseUsuario(long id) {
    	 return _EventoRepository.ObterEventosDesseUsuario(id);
     }
	 @Transactional
	 public void ExcluirUsuario(@PathVariable long id) {
		Optional<Evento> evento = _EventoRepository.findById(id);
		if (evento.isPresent()) {
			_curtidaRepository.deleteByEventoId(evento.get().getId());
			_EventoRepository.delete(evento.get());
		}
	}

    
}
