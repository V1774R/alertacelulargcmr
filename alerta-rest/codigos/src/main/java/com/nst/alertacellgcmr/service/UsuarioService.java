package com.nst.alertacellgcmr.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.nst.alertacellgcmr.dto.UsuarioDTO;
import com.nst.alertacellgcmr.exception.ResourceNotFoundException;
import com.nst.alertacellgcmr.model.Usuario;
import com.nst.alertacellgcmr.repository.UsuarioRepository;

@Service
public class UsuarioService {
	@Autowired
	private UsuarioRepository repository;
	
	public ResponseEntity<List<UsuarioDTO>> listarTudo(){
		return new ResponseEntity<>(repository.findAll().stream().map(UsuarioDTO::new).toList(), HttpStatus.OK);
	}
	
	public ResponseEntity<UsuarioDTO> listarUm(Long id) {
		Optional<Usuario> usuario = repository.findById(id);
		if(usuario.isPresent()) {
			return new ResponseEntity<>(new UsuarioDTO(usuario.get()), HttpStatus.OK); //.get() usado aqui para tirar o usuário do optional
		}
		throw new ResourceNotFoundException("Nenhum usuário foi encontrado com o id "+id);
	}
	
	//new ResponseEntity<>(usuarioDTO, HttpStatus.OK);
	
	public ResponseEntity<UsuarioDTO> inserir(Usuario usuario){
		usuario.setCriacao(LocalDateTime.now());
		repository.save(usuario);
		return new ResponseEntity<>(new UsuarioDTO(usuario), HttpStatus.OK);
	}
	
	public ResponseEntity<UsuarioDTO> atualizar(Usuario usuario){
		usuario.setUlat(LocalDateTime.now());
		repository.save(usuario);
		return new ResponseEntity<>(new UsuarioDTO(usuario), HttpStatus.OK);
	}
	
	public ResponseEntity<UsuarioDTO> deletar(Long id){
		Usuario usuario = repository.findById(id).get();
		usuario.setExclusao(LocalDateTime.now());
		repository.save(usuario);
		return new ResponseEntity<>(new UsuarioDTO(usuario), HttpStatus.OK);
	}
	
}
