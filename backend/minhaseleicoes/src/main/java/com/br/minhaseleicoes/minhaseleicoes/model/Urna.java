package com.br.minhaseleicoes.minhaseleicoes.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class Urna {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String codigoIdentificacao;

    @Column(nullable = false)
    private String municipio;
    
    @Column(nullable = false)
    private String zonaEleitoral;
    
    @Column(nullable = false)
    private String secaoEleitoral;
    
    @Column(nullable = false)
    private Integer votosValidos;
    
    @Column(nullable = false)
    private Integer votosBrancos;
    
    @Column(nullable = false)
    private Integer votosNulos;
    
    @JsonManagedReference
    @OneToMany(mappedBy = "urna", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Candidato> candidatos;

}
