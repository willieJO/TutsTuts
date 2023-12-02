package br.com.edu.tutstuts.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.edu.tutstuts.model.Evento;
import br.com.edu.tutstuts.model.UsuarioEmpresa;
import br.com.edu.tutstuts.service.EventoService;
import javax.validation.Valid;

@RestController
@RequestMapping("/Evento")

public class EventoController {
    @Autowired
    private EventoService _EventoService;

    @PostMapping("AdicionarEvento")
    @ResponseStatus(HttpStatus.CREATED)
    private void AdicionarEvento(@Valid @RequestBody Evento evento) {
		_EventoService.AdicionarEvento(evento);
	}
    @PutMapping("AtualizarEvento")
    @ResponseStatus(HttpStatus.CREATED)
    private void AtualizarEvento(@Valid @RequestBody Evento evento) {
		_EventoService.AdicionarEvento(evento);
	}
     @GetMapping("ObterEventos")
     private  List<Evento> ObterEventos() {
		return _EventoService.ObterEventos();
	}
     @GetMapping("ObterEventos/{id}")
     private  List<Evento> ObterEventosFiltrado(@PathVariable int id) {
		return _EventoService.ObterEventosFiltrado(id);
	}
     @GetMapping("{id}")
     private  ResponseEntity<List<Evento>> ObterEventoPorId(@PathVariable int id) {
		return _EventoService.ObterEventoPorId(id);
	}
     @GetMapping("BuscaEventosPeloNome/{pesquisa}")
     private List<Evento> BuscaEventosPeloNome(@PathVariable String pesquisa) {
    	 return _EventoService.BuscaEventosPeloNome(pesquisa);
     }
     @GetMapping("ObterEventosEUsuariosParaBusca")
     private Object ObterEventosEUsuariosParaBusca() {
    	 return _EventoService.ObterEventosEUsuariosParaBusca();
     }
     @GetMapping("ObterEventosDesseUsuario/{id}")
     private List<Evento> ObterEventosDesseUsuario(@PathVariable long id) {
    	 return _EventoService.ObterEventosDesseUsuario(id);
     }
     @DeleteMapping("ExcluirUsuario/{id}")
     private void ExcluirUsuario(@PathVariable long id) {
    	  _EventoService.ExcluirUsuario(id);
     }
}
