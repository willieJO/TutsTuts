package br.com.edu.tutstuts.model;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonFormat;


@Entity
@Table(name = "mensagens")
public class Mensagem {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@NotNull
	@JsonFormat(pattern = "dd/MM/yyyy")
	@Column(name = "data")
	private LocalDate data_mensagem;
    private int id_usuario_origem;
    private int id_usuario_destino;
    private String mensagem;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public LocalDate getData_mensagem() {
		return data_mensagem;
	}
	public void setData_mensagem(LocalDate data_mensagem) {
		this.data_mensagem = data_mensagem;
	}
	public int getId_usuario_origem() {
		return id_usuario_origem;
	}
	public void setId_usuario_origem(int id_usuario_origem) {
		this.id_usuario_origem = id_usuario_origem;
	}
	public int getId_usuario_destino() {
		return id_usuario_destino;
	}
	public void setId_usuario_destino(int id_usuario_destino) {
		this.id_usuario_destino = id_usuario_destino;
	}
	public String getMensagem() {
		return mensagem;
	}
	public void setMensagem(String mensagem) {
		this.mensagem = mensagem;
	}
    
    
}
