package com.nst.alertacellgcmr.controler;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nst.alertacellgcmr.dto.UsuarioDTO;
import com.nst.alertacellgcmr.model.Usuario;
import com.nst.alertacellgcmr.service.UsuarioService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/usuario")
public class UsuarioController {
	
	@Autowired
	private UsuarioService service;
	
	@GetMapping("/listar")
	public ResponseEntity<List<UsuarioDTO>> listarTudo(){
		return service.listarTudo();
	}
	
	@GetMapping("/listar/{id}")
	public ResponseEntity<UsuarioDTO> listarUm(@PathVariable Long id) {
		return service.listarUm(id);
	}
	
	@PostMapping("/inserir")
	public ResponseEntity<UsuarioDTO> inserir(@RequestBody @Valid Usuario usuario){
		return service.inserir(usuario);
	}
	
	@PutMapping("/atualizar")
	public ResponseEntity<UsuarioDTO> atualizar(@RequestBody @Valid Usuario usuario){
		return service.atualizar(usuario);
	}
	
	@DeleteMapping("/deletar/{id}")
	public ResponseEntity<UsuarioDTO> deletar(@PathVariable Long id){
		return service.deletar(id);
	}
}
