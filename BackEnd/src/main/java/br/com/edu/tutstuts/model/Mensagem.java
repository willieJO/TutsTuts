package br.com.edu.tutstuts.model;

import java.time.LocalDate;

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
	private LocalDate data_mensagem;
    private int id_usuario_origem;
    private int id_usuario_destino;
    private String mensagem;
}
