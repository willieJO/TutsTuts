package br.com.edu.tutstuts.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import br.com.edu.tutstuts.model.BuscaProjection;
import br.com.edu.tutstuts.model.Evento;

public interface EventoRepository extends JpaRepository<Evento,Long>{
	@Query(
			  value = "SELECT * FROM evento e WHERE e.nome LIKE %?1%", 
			  nativeQuery = true)
	List<Evento> BuscaEventosPeloNome(String palavraChave);
	@Query(
			  value = "SELECT e.* \n" + //
			  		"FROM evento e\n" + //
			  		"INNER JOIN usuario u\n" + //
			  		"ON u.id =  ?1\n" + //
			  		"ORDER BY \n" + //
			  		"  CASE \n" + //
			  		"    WHEN e.categoria = u.categoria THEN 0 \n" + //
			  		"    ELSE 1 \n" + //
			  		"  END, e.categoria;\n" + //
			  		"", 
			  nativeQuery = true)
	List<Evento> ObterEventosFiltrado(int id);
	
	@Query(
			  value = "SELECT COUNT(*) FROM evento e\n"
			  		+ "INNER JOIN curtidas_x_evento cxe\n"
			  		+ "on cxe.evento_id = e.id\n"
			  		+ "where e.id = ?1 and is_curtiu = 1", 
			  nativeQuery = true)
	int ObterQuantidadeDeCurtidasDoEvento(long id);
	@Query(
		value = "SELECT Id, Nome, 1 as isEvento, foto FROM evento\n"
			  + "Union \n"
			  + "SELECT Id,Nome, 0 isEvento, foto FROM usuario;",
			nativeQuery = true)
	List<BuscaProjection> ObterEventosEUsuariosParaBusca();

	@Query(
	    value = "SELECT * from evento\n"
	            + "where cnpj_empresa = ?1",
	    nativeQuery = true)
		List<Evento> ObterEventosDesseUsuario(long id );

}

