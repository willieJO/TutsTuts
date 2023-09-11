package br.com.edu.tutstuts.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.edu.tutstuts.model.Evento;
import br.com.edu.tutstuts.repository.EventoRepository;

@Service
public class EventoService {
    @Autowired
    private EventoRepository _EventoRepository;

    public void AdicionarEvento(Evento evento) {
		 _EventoRepository.save(evento);
	}
    
    public List<Evento> ObterEventos() {
    	return _EventoRepository.findAll();
    }
    public List<Evento> BuscaEventosPeloNome(String pesquisa) {
    	return _EventoRepository.BuscaEventosPeloNome(pesquisa);
    }
    
}
