package com.br.minhaseleicoes.minhaseleicoes.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class Candidato {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nome;

    @Column(nullable = false)
    private String partido;

    @Column(nullable = false)
    private Integer votos;

    @Column(nullable = false)
    private Integer numero;

    @JsonBackReference
    @ManyToOne
        @JoinColumn(name = "cargo_id", nullable = false)
    private Cargo cargo;

    @JsonBackReference
    @ManyToOne
        @JoinColumn(name = "urna_id", nullable = false)
    private Urna urna;


}
