package com.br.minhaseleicoes.minhaseleicoes.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.br.minhaseleicoes.minhaseleicoes.model.Candidato;
import com.br.minhaseleicoes.minhaseleicoes.service.CandidatoService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/api/v1/candidatos")
public class CandidatoController {

    @Autowired
    private CandidatoService candidatoService;

    @GetMapping("/cargo/top/{cargoId}")
    public List<Candidato> getTopCandidatoByCargo(@PathVariable Long cargoId) {
        return candidatoService.findTopByCargoOrderByVotosDesc(cargoId);
    }

    @GetMapping("/cargo/{cargoId}")
    public List<Candidato> getCandidatosByCargo(@PathVariable Long cargoId) {
        return candidatoService.findByCargoId(cargoId);
    }

    @GetMapping
    public List<Candidato> listarTodos() {
        return candidatoService.listarTodos();
    }
    
    
    

}
