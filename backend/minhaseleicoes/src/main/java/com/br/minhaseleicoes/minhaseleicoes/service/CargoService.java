package com.br.minhaseleicoes.minhaseleicoes.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.minhaseleicoes.minhaseleicoes.model.Cargo;
import com.br.minhaseleicoes.minhaseleicoes.repository.CargoRepository;

@Service
public class CargoService {
    
    @Autowired
    private CargoRepository cargoRepository;

    public List<Cargo> listarTodos() {
        return cargoRepository.findAll();
    }

    public Cargo listarById(Long id) {
        return cargoRepository.findById(id).orElse(null);
    }


}
