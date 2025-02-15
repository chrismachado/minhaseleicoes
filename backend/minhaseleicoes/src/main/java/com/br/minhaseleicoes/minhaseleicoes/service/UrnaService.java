package com.br.minhaseleicoes.minhaseleicoes.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.minhaseleicoes.minhaseleicoes.model.Urna;
import com.br.minhaseleicoes.minhaseleicoes.repository.UrnaRepository;

@Service
public class UrnaService {

    @Autowired
    private UrnaRepository urnaRepository;

    public List<Urna> listarUrnas() {
        return urnaRepository.findAll();
    }
}
