package br.com.edu.tutstuts.model;

import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name ="usuario_empresa")
@PrimaryKeyJoinColumn(name="id",referencedColumnName = "id")
public class UsuarioEmpresa extends Usuario {
	
	@NotNull
	private String cnpj;

	public String getCnpj() {
		return cnpj;
	}

	public void setCnpj(String cnpj) {
		this.cnpj = cnpj;
	}
	
	
}
