package com.br.minhaseleicoes.minhaseleicoes.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.br.minhaseleicoes.minhaseleicoes.model.Cargo;

public interface CargoRepository extends JpaRepository<Cargo, Long>{
    
    @Query("select c from Cargo c where c.cargoId >= 6")
    public List<Cargo> findByEleicoesMunicipais();

    @Query("select c from Cargo c where c.cargoId < 6")
    public List<Cargo> findByEleicoesNacionais();

}
