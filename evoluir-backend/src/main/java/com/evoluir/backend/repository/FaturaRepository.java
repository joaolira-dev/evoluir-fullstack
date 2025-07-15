package com.evoluir.backend.repository;



import com.evoluir.backend.enums.StatusFatura;
import com.evoluir.backend.models.Fatura;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FaturaRepository extends JpaRepository<Fatura, Long> {
    List<Fatura> findByClienteId (Long clienteId);
    List<Fatura> findByStatus (StatusFatura status);
}