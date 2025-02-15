package com.br.minhaseleicoes.minhaseleicoes.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.minhaseleicoes.minhaseleicoes.model.Resultado;
import com.br.minhaseleicoes.minhaseleicoes.repository.ResultadoRepository;

@Service
public class ResultadoService {

    @Autowired
    private ResultadoRepository resultadoRepository;

    public List<Resultado> listarResultados() {
        return resultadoRepository.findAll();
    }
}
