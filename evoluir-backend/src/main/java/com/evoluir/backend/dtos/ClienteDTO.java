package com.evoluir.backend.dtos;



import com.evoluir.backend.enums.StatusBloqueio;
import com.evoluir.backend.models.Cliente;

import java.math.BigDecimal;
import java.time.LocalDate;

public record ClienteDTO(
        Long id,
        String nome,
        String cpf,
        LocalDate dataNascimento,
        StatusBloqueio statusBloqueio,
        BigDecimal limiteCredito
) {
    public ClienteDTO(Cliente cliente) {
        this(
                cliente.getId(),
                cliente.getNome(),
                cliente.getCpf(),
                cliente.getDataNascimento(),
                cliente.getStatusBloqueio(),
                cliente.getLimiteCredito()
        );
    }
}
