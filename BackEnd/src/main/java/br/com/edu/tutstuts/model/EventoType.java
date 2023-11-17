package br.com.edu.tutstuts.model;

public enum EventoType {
	
	NENHUM ("Nenhum"),
	FESTIVAL("Festival"),
	SHOW("Show"),
	PALESTRA("Palestra"),
	MUSICAL("Musical");
	
	private String type;
	
	EventoType(String type) {
		this.type = type;
	}
	
	public String getType() {
		return type;
	}
}
