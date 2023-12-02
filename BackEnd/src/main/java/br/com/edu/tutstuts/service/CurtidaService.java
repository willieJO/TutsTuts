package br.com.edu.tutstuts.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.edu.tutstuts.model.Curtida;
import br.com.edu.tutstuts.repository.CurtidaRepository;

@Service
public class CurtidaService {
	@Autowired
    private CurtidaRepository _Curtidarepository;
	
	public void CurtirEvento(Curtida curtida) {
		Optional<Curtida> possuiEvento = _Curtidarepository.BuscaCurtidaDoUsuarioNesseEvento(curtida.getUsuario_id(), curtida.getEvento_id());
		if (possuiEvento.isPresent()) {
			curtida.setId(possuiEvento.get().getId());
		}
		_Curtidarepository.save(curtida);
	}
	public List<Curtida>ObterEventosCurtidoPeloUsuario(int id) {
		return _Curtidarepository.ObterEventosCurtidoPeloUsuario(id);
	}
}
