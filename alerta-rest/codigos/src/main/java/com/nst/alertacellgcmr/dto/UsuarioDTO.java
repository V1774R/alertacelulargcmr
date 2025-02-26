package com.nst.alertacellgcmr.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;

import org.springframework.beans.BeanUtils;
import com.nst.alertacellgcmr.model.Usuario;


public class UsuarioDTO {
	
	private Long id;
	
	private String nome;

	private String cidade;

	private String estado;
	
	private String escolaridade;
	
	private LocalDate nascimento;
	
	private String imei1;
	
	private String imei2;
	
	private String modelo;
	
	private LocalDateTime criacao;
	
	private LocalDateTime exclusao;

	private LocalDateTime ulat;
	
	public UsuarioDTO() {
		
	}
	
	public UsuarioDTO(Usuario usuario) {
		BeanUtils.copyProperties(usuario, this);
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public String getEscolaridade() {
		return escolaridade;
	}

	public void setEscolaridade(String escolaridade) {
		this.escolaridade = escolaridade;
	}

	public LocalDate getNascimento() {
		return nascimento;
	}

	public void setNascimento(LocalDate nascimento) {
		this.nascimento = nascimento;
	}

	public String getImei1() {
		return imei1;
	}

	public void setImei1(String imei1) {
		this.imei1 = imei1;
	}

	public String getImei2() {
		return imei2;
	}

	public void setImei2(String imei2) {
		this.imei2 = imei2;
	}

	public String getModelo() {
		return modelo;
	}

	public void setModelo(String modelo) {
		this.modelo = modelo;
	}

	public LocalDateTime getCriacao() {
		return criacao;
	}

	public void setCriacao(LocalDateTime criacao) {
		this.criacao = criacao;
	}

	public LocalDateTime getExclusao() {
		return exclusao;
	}

	public void setExclusao(LocalDateTime exclusao) {
		this.exclusao = exclusao;
	}

	public LocalDateTime getUlat() {
		return ulat;
	}

	public void setUlat(LocalDateTime ulat) {
		this.ulat = ulat;
	}

	@Override
	public String toString() {
		return "UsuarioDTO [id=" + id + ", nome=" + nome + ", cidade=" + cidade + ", estado=" + estado
				+ ", escolaridade=" + escolaridade + ", nascimento=" + nascimento + ", imei1=" + imei1 + ", imei2="
				+ imei2 + ", modelo=" + modelo + ", criacao=" + criacao + ", exclusao=" + exclusao + ", ulat=" + ulat
				+ "]";
	}

}
