package br.com.edu.tutstuts.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.edu.tutstuts.model.Evento;
import br.com.edu.tutstuts.model.UsuarioEmpresa;
import br.com.edu.tutstuts.service.EventoService;

@RestController
@RequestMapping("/Evento")

public class EventoController {
    @Autowired
    private EventoService _EventoService;

    @PostMapping("AdicionarEvento")
    private void AdicionarEvento(@RequestBody Evento evento) {
		_EventoService.AdicionarEvento(evento);
	}
     @GetMapping("ObterEventos")
    private  List<Evento> ObterEventos() {
		return _EventoService.ObterEventos();
	}
}
