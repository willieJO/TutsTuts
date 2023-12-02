package br.com.edu.tutstuts.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name ="curtidas_x_evento")
public class Curtida {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@NotNull
	private long usuario_id;
	@NotNull
	private long evento_id;
	private boolean is_curtiu;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public long getUsuario_id() {
		return usuario_id;
	}
	public void setUsuario_id(long usuario_id) {
		this.usuario_id = usuario_id;
	}
	public long getEvento_id() {
		return evento_id;
	}
	public void setEvento_id(long evento_id) {
		this.evento_id = evento_id;
	}
	public boolean isIs_curtiu() {
		return is_curtiu;
	}
	public void setIs_curtiu(boolean is_curtiu) {
		this.is_curtiu = is_curtiu;
	}
	
	
}
