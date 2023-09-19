package br.com.edu.tutstuts.model;

import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

@Entity
@Table(name ="usuario_comum")
@PrimaryKeyJoinColumn(name="id",referencedColumnName = "id")
public class UsuarioComum extends Usuario{

}
