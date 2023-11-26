package br.com.edu.tutstuts.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import br.com.edu.tutstuts.model.Curtida;
import br.com.edu.tutstuts.model.Evento;
import br.com.edu.tutstuts.service.CurtidaService;
import javax.validation.Valid;

@RestController
@RequestMapping("/Curtida")

public class CurtidaController {
    @Autowired
    private CurtidaService _CurtidaService;

    @PostMapping("CurtirEvento")
    @ResponseStatus(HttpStatus.CREATED)
    private void CurtirEvento(@Valid @RequestBody Curtida curtida) {
    	_CurtidaService.CurtirEvento(curtida);
	}
    
    @GetMapping("ObterEventosCurtidoPeloUsuario/{id}")
    private  List<Curtida> ObterEventosCurtidoPeloUsuario(@PathVariable int id) {
		return _CurtidaService.ObterEventosCurtidoPeloUsuario(id);
	}
    
}
