package com.br.minhaseleicoes.minhaseleicoes.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.br.minhaseleicoes.minhaseleicoes.model.Urna;
import com.br.minhaseleicoes.minhaseleicoes.service.UrnaService;

@RestController
@RequestMapping("/api/v1/urnas")
public class UrnaController {

    @Autowired
    private UrnaService urnaService;

    @GetMapping
    public List<Urna> listarUrnas() {
        return urnaService.listarUrnas();
    }
}
