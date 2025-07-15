package com.evoluir.backend.repository;

import com.evoluir.backend.models.Cliente;
import com.evoluir.backend.enums.StatusBloqueio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long> {
    List<Cliente> findByStatusBloqueio(StatusBloqueio status);
}