package com.br.minhaseleicoes.minhaseleicoes.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.br.minhaseleicoes.minhaseleicoes.model.Resultado;
import com.br.minhaseleicoes.minhaseleicoes.service.ResultadoService;

@RestController
@RequestMapping("/api/v1/resultados")
public class ResultadoController {

    @Autowired
    private ResultadoService resultadoService;

    @GetMapping
    public List<Resultado> listarResultados() {
        return resultadoService.listarResultados();
    }
    
}
