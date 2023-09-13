package br.com.edu.tutstuts.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
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
		 _empresaRepository.save(usuario);
	}
	
	public void AdicionarUsuario(UsuarioComum usuario) {
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
	
	public UsuarioComum findUserById(Long id) {
		UsuarioComum userSaved = _usuarioComumRepository.findById(id)
				.orElseThrow(
				(() -> new EmptyResultDataAccessException(1)));
		return userSaved;
	}
	

}
