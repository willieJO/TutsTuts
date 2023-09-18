package br.com.edu.tutstuts.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.edu.tutstuts.model.Evento;
import br.com.edu.tutstuts.model.Mensagem;
import br.com.edu.tutstuts.model.Usuario;
import br.com.edu.tutstuts.service.ChatService;
import br.com.edu.tutstuts.service.EventoService;

@RestController
@RequestMapping("/Chat")
public class ChatController {
	
	@Autowired
    private ChatService _ChatService;

    @PostMapping("EnviarMensagem")
    private void EnviarMensagem(@RequestBody Mensagem mensagem) {
    	_ChatService.EnviarMensagem(mensagem);
	}
    
    @GetMapping("ObterMensagem/{id}")
	public ResponseEntity<Mensagem> ObterMensagem(@PathVariable Long id){
		
		Optional<Mensagem> usuario = _ChatService.ObterMensagem(id);
		if(usuario.isPresent()) {
			return ResponseEntity.ok(usuario.get());
		}
		return ResponseEntity.notFound().build();
	}
    
}
