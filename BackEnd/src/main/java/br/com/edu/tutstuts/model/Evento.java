package br.com.edu.tutstuts.model;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "evento")
public class Evento {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
    @NotNull
	private String nome;
    @NotNull
    private String descricao;
    @NotNull
    @JsonFormat(pattern = "dd/MM/yyyy")
	private LocalDate data_evento;
    private int avaliacao;
    private String localidade;
    private int ativo;
    private String categoria;
    @NotNull
	@ManyToOne
	@JoinColumn(name = "cnpj_empresa")
	private Usuario user;
    
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public String getDescricao() {
        return descricao;
    }
    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
    public LocalDate getData_evento() {
        return data_evento;
    }
    public void setData_evento(LocalDate data_evento) {
        this.data_evento = data_evento;
    }
    public int getAvaliacao() {
        return avaliacao;
    }
    public void setAvaliacao(int avaliacao) {
        this.avaliacao = avaliacao;
    }
    public String getLocalidade() {
        return localidade;
    }
    public void setLocalidade(String localidade) {
        this.localidade = localidade;
    }
    public int getAtivo() {
        return ativo;
    }
    public void setAtivo(int ativo) {
        this.ativo = ativo;
    }
    public String getCategoria() {
        return categoria;
    }
    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }
    public Usuario getUser() {
        return user;
    }
    public void setUser(Usuario user) {
        this.user = user;
    }
    
}