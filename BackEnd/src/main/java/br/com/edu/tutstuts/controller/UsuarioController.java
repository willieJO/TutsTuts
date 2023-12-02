package br.com.edu.tutstuts.controller;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
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
import org.springframework.http.HttpStatus;
import br.com.edu.tutstuts.model.UsuarioComum;
import br.com.edu.tutstuts.model.UsuarioEmpresa;
import br.com.edu.tutstuts.model.Usuario;
import br.com.edu.tutstuts.repository.UsuarioComumRepository;
import br.com.edu.tutstuts.repository.UsuarioEmpresaRepository;
import br.com.edu.tutstuts.repository.UsuarioRepository;
import br.com.edu.tutstuts.service.UsuarioService;
import javax.validation.Valid;

@RestController
@RequestMapping("/Usuario")
public class UsuarioController {
	@Autowired
	private UsuarioService _service;
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@GetMapping("ObterLista")
	public List<Usuario> list(){
		return _service.ObterLista();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Usuario> findById(@PathVariable Long id){
		
		Optional<Usuario> usuario = _service.ObterUsuarioPorId(id);
		if(usuario.isPresent()) {
			return ResponseEntity.ok(usuario.get());
		}
		return ResponseEntity.notFound().build();
	}
	
	@PostMapping("AdicionarUsuarioEmpresa")
	private void AdicionarUsuarioEmpresa(@RequestBody UsuarioEmpresa usuario) {
		_service.AdicionarUsuarioEmpresa(usuario);
	}
	@PostMapping("AdicionarUsuario")
	private void AdicionarUsuario(@RequestBody UsuarioComum usuario) {
		_service.AdicionarUsuario(usuario);
	}
	
	@PutMapping("AtualizarEmpresa/{id}")
	public ResponseEntity<UsuarioEmpresa> updateEmpresa(@PathVariable Long id,
			@Valid @RequestBody UsuarioEmpresa usuario){
		UsuarioEmpresa userSaved = _service.updateEmpresa(id, usuario);
		return ResponseEntity.ok(userSaved);
	}
	
	@PutMapping("UsuarioComum/{id}")
	public ResponseEntity<UsuarioComum> update(@PathVariable Long id,
			@Valid @RequestBody UsuarioComum usuario){
		UsuarioComum userSaved = _service.update(id, usuario);
		return ResponseEntity.ok(userSaved);
	}
	@GetMapping("ObterCnpjEmpresa/{id}")
	public ResponseEntity<UsuarioEmpresa> ObterCnpjEmpresa(@PathVariable Long id){
		return _service.ObterCnpjEmpresa(id);
	}
	
	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void remove(@PathVariable Long id) {
		usuarioRepository.deleteById(id);
	}	
	
	
}
