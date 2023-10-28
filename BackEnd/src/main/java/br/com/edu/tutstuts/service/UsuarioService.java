package br.com.edu.tutstuts.service;

import java.util.List;
import java.util.Optional;

import org.bouncycastle.crypto.generators.BCrypt;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import br.com.edu.tutstuts.model.Usuario;
import br.com.edu.tutstuts.model.UsuarioComum;
import br.com.edu.tutstuts.model.UsuarioEmpresa;
import br.com.edu.tutstuts.repository.UsuarioComumRepository;
import br.com.edu.tutstuts.repository.UsuarioEmpresaRepository;
import br.com.edu.tutstuts.repository.UsuarioRepository;

@Service
public class UsuarioService {
	@Autowired
	private UsuarioEmpresaRepository _empresaRepository;
	@Autowired
	private UsuarioRepository _usuarioRepository;
	@Autowired
	private UsuarioComumRepository _usuarioComumRepository;
	
	public void AdicionarUsuarioEmpresa(UsuarioEmpresa usuario) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		var senhaCriptografada = encoder.encode(usuario.getSenha());
		usuario.setSenha(senhaCriptografada);
		 _empresaRepository.save(usuario);
	}

	public Optional<Usuario> ObterUsuarioPorId(long id) {
		return _usuarioRepository.findById(id);
	}

	public List<Usuario> ObterLista() {
		return _usuarioRepository.findAll();
	}
	
	public void AdicionarUsuario(UsuarioComum usuario) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		var senhaCriptografada = encoder.encode(usuario.getSenha());
		usuario.setSenha(senhaCriptografada);
		_usuarioComumRepository.save(usuario);
	}
	
	public UsuarioEmpresa updateEmpresa(Long id, UsuarioEmpresa usuario) {
		UsuarioEmpresa usuarioEditado = findUserByIdEmpresa(id);
		BeanUtils.copyProperties(usuario, usuarioEditado, "id");
		return _empresaRepository.save(usuarioEditado);
	}
	
	public UsuarioEmpresa findUserByIdEmpresa(Long id) {
		UsuarioEmpresa userSaved = _empresaRepository.findById(id)
				.orElseThrow(
				(() -> new EmptyResultDataAccessException(1)));
		return userSaved;
	}
	
	public UsuarioComum update(Long id, UsuarioComum usuario) {
		UsuarioComum usuarioEditado = findUserById(id);
		BeanUtils.copyProperties(usuario, usuarioEditado, "id");
		return _usuarioComumRepository.save(usuarioEditado);
	}

	public ResponseEntity<UsuarioEmpresa> ObterCnpjEmpresa(Long id) {
		 Optional<UsuarioEmpresa> usuario = _empresaRepository.findById(id);
		 if(usuario.isPresent()) {
			return ResponseEntity.ok(usuario.get());
		 }
		 return ResponseEntity.notFound().build();
	}
	
	public UsuarioComum findUserById(Long id) {
		UsuarioComum userSaved = _usuarioComumRepository.findById(id)
				.orElseThrow(
				(() -> new EmptyResultDataAccessException(1)));
		return userSaved;
	}
	

}
