package br.com.edu.tutstuts.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.edu.tutstuts.model.UsuarioComum;
import br.com.edu.tutstuts.model.UsuarioEmpresa;
import br.com.edu.tutstuts.model.Usuario;
import br.com.edu.tutstuts.repository.UsuarioComumRepository;
import br.com.edu.tutstuts.repository.UsuarioEmpresaRepository;
import br.com.edu.tutstuts.repository.UsuarioRepository;
import br.com.edu.tutstuts.service.UsuarioService;

@RestController
@RequestMapping("/Usuario")
public class UsuarioController {
	@Autowired
	private UsuarioService _service;
	
	@PostMapping("AdicionarUsuarioEmpresa")
	private void AdicionarUsuarioEmpresa(@RequestBody UsuarioEmpresa usuario) {
		_service.AdicionarUsuarioEmpresa(usuario);
	}
	@PostMapping("AdicionarUsuario")
	private void AdicionarUsuario(@RequestBody UsuarioComum usuario) {
		_service.AdicionarUsuario(usuario);
	}
	
}
