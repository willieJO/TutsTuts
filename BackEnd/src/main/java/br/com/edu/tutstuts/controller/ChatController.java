package br.com.edu.tutstuts.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.edu.tutstuts.model.Mensagem;
import br.com.edu.tutstuts.model.Usuario;
import br.com.edu.tutstuts.service.MensagemService;

@RestController
@RequestMapping("/Chat")

public class ChatController {
    @Autowired
    private MensagemService _MensagemService;

    @PostMapping("EnviarMensagem")
    private void EnviarMensagem(@Valid @RequestBody Mensagem mensagem) {
      _MensagemService.EnviarMensagem(mensagem);
    }
    @GetMapping("ObterMensagemDoUsuario/{id}/destino/{destino}")
    private  List<Mensagem> ObterMensagemDoUsuario(@PathVariable int id, @PathVariable int destino) {
		  return _MensagemService.ObterMensagemDoUsuario(id, destino);
	  }

    @GetMapping("ObterUsuariosDoSistema")
    private  List<Usuario> ObterUsuariosDoSistema() {
		  return _MensagemService.ObterUsuariosDoSistema();
	  }
}
