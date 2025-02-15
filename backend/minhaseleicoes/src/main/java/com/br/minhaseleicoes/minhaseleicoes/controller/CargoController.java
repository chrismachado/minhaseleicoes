package com.br.minhaseleicoes.minhaseleicoes.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.br.minhaseleicoes.minhaseleicoes.model.Cargo;
import com.br.minhaseleicoes.minhaseleicoes.service.CargoService;

@RestController
@RequestMapping("/api/v1/cargos")
public class CargoController {

    @Autowired
    private CargoService cargoService;

    @GetMapping("/todos")
    public List<Cargo> listarTodos() {
        return cargoService.listarTodos();
    }

    @GetMapping("/{id}")
    public Cargo listarById(@PathVariable Long id) {
        return cargoService.listarById(id);
    }

}
