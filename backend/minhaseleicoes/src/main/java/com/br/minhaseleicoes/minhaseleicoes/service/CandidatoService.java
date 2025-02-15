package com.br.minhaseleicoes.minhaseleicoes.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.minhaseleicoes.minhaseleicoes.model.Candidato;
import com.br.minhaseleicoes.minhaseleicoes.repository.CandidatoRepository;

@Service
public class CandidatoService {

    @Autowired
    private CandidatoRepository candidatoRepository;

    public List<Candidato> findTopByCargoOrderByVotosDesc(Long cargoId) {
        return candidatoRepository.findTopByCargoOrderByVotosDesc(cargoId);
    }

    public List<Candidato> findByCargoId(Long cargoId) {
        return candidatoRepository.findByCargoId(cargoId);
    }

    public List<Candidato> listarTodos() {
        return candidatoRepository.findAll();
    }

}
