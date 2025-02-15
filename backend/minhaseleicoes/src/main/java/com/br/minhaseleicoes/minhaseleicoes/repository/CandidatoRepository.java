package com.br.minhaseleicoes.minhaseleicoes.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.RequestParam;

import com.br.minhaseleicoes.minhaseleicoes.model.Candidato;

import jakarta.websocket.server.PathParam;

public interface CandidatoRepository extends JpaRepository<Candidato, Long>{

    @Query("select c from Candidato c where c.cargo.id = :cargoId order by c.votos desc")
    List<Candidato> findTopByCargoOrderByVotosDesc(@Param("cargoId") Long cargoId);

    @Query("select c from Candidato c where c.cargo.id = :cargoId")
    List<Candidato> findByCargoId(@Param("cargoId") Long cargoId);

}
