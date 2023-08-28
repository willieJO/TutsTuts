package br.com.edu.tutstuts.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.edu.tutstuts.model.Usuario;
import br.com.edu.tutstuts.repository.EmpresaRepository;
import br.com.edu.tutstuts.repository.UsuarioRepository;

@RestController
@RequestMapping("/Usuario")
public class UsuarioController {
	@Autowired
	private EmpresaRepository _empresaRepository;
	@Autowired
	private UsuarioRepository _usuarioRepository;
	
	
	@PostMapping
	private void AdicionarUsuario(@RequestBody Usuario a) {
		 _usuarioRepository.Teste();
	}
}
