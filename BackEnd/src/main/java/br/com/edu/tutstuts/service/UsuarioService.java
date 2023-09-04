package br.com.edu.tutstuts.service;

import org.springframework.beans.factory.annotation.Autowired;
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
	
}
