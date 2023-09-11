package br.com.edu.tutstuts.model;

import jakarta.persistence.Entity;
import jakarta.persistence.PrimaryKeyJoinColumn;
import jakarta.persistence.Table;

@Entity
@Table(name ="usuario_comum")
@PrimaryKeyJoinColumn(name="id",referencedColumnName = "id")
public class UsuarioComum extends Usuario{

}
