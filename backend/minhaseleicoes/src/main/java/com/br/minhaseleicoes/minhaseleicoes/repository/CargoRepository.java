package com.br.minhaseleicoes.minhaseleicoes.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.br.minhaseleicoes.minhaseleicoes.model.Candidato;
import com.br.minhaseleicoes.minhaseleicoes.model.Cargo;

public interface CargoRepository extends JpaRepository<Cargo, Long>{
    
}
