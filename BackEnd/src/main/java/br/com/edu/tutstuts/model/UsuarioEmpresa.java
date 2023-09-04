package br.com.edu.tutstuts.model;

import jakarta.persistence.Entity;
import jakarta.persistence.PrimaryKeyJoinColumn;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;

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
