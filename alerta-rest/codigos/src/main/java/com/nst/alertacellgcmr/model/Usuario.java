package com.nst.alertacellgcmr.model;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Objects;

import org.springframework.beans.BeanUtils;

import com.nst.alertacellgcmr.dto.UsuarioDTO;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "TBUSUARIO", schema = "ALCE")
public class Usuario {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "cliente_seq")
	@SequenceGenerator(name = "cliente_seq", sequenceName = "PETSCHEMA.SEQUENCE_CLIENTE_CCLIE_CODIGO")
	@Column(name = "CUSER_CODIGO")
	private Long id;
	
	@NotBlank(message = "Nome não informado.")
	@Column(name = "NUSER_NOME")
	private String nome;
	
	@NotBlank(message = "Cidade não informada.")	
	@Column(name = "NUSER_CIDADE")
	private String cidade;
	
	@NotBlank(message = "Estado não informado.")
	@Column(name = "NUSER_ESTADO")
	private String estado;
	
	@NotBlank(message = "Escolaridade não informada.")
	@Column(name = "NUSER_ESCOLARIDADE")
	private String escolaridade;
	
	@NotNull(message = "Data de nascimento não informada.")
	@Column(name = "TUSER_NASCIMENTO")
	private LocalDate nascimento;
	
	@NotBlank(message = "Imei 1 não informado.")
	@Column(name = "CUSER_IMEI1")
	private String imei1;
	
	@NotBlank(message = "Imei 2 não informado.")
	@Column(name = "CUSER_IMEI2")
	private String imei2;
	
	@NotBlank(message = "Modelo não informado.")
	@Column(name = "NUSER_MODELO")
	private String modelo;
	
	@Column(name = "TUSER_CRIACAO")
	private LocalDateTime criacao;
	
	@Column(name = "TUSER_EXCLUSAO")
	private LocalDateTime exclusao;
	
	@Column(name = "TUSER_ULAT")
	private LocalDateTime ulat;
	
	public Usuario() {
		
	}
	
	public Usuario(UsuarioDTO usuarioDTO) {
		BeanUtils.copyProperties(usuarioDTO, this);
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
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Usuario other = (Usuario) obj;
		return Objects.equals(id, other.id);
	}

	@Override
	public String toString() {
		return "Usuario [id=" + id + ", nome=" + nome + ", cidade=" + cidade + ", estado=" + estado + ", escolaridade="
				+ escolaridade + ", nascimento=" + nascimento + ", imei1=" + imei1 + ", imei2=" + imei2 + ", modelo="
				+ modelo + ", criacao=" + criacao + ", exclusao=" + exclusao + ", ulat=" + ulat + "]";
	}

}
