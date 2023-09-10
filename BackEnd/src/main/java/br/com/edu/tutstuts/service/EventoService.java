package br.com.edu.tutstuts.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.edu.tutstuts.model.UsuarioEmpresa;
import br.com.edu.tutstuts.repository.EventoRepository;

@Service
public class EventoService {
    @Autowired
    private EventoRepository _EventoRepository;

    public void AdicionarUsuarioEmpresa(Evento evento) {
		 _EventoRepository.save(evento);
	}
}
