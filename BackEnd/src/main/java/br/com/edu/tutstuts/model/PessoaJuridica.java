package br.com.edu.tutstuts.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name ="UsuarioEmpresa")
public class PessoaJuridica extends Usuario {
	@NotNull
	private String cnpf;
	
}
