package com.evoluir.backend.dtos;



import com.evoluir.backend.enums.StatusBloqueio;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

public record ClienteCreateDTO(
        String nome,
        String cpf,
        LocalDate dataNascimento,
        BigDecimal limiteCredito,
        StatusBloqueio statusBloqueio,
        List<FaturaCreateDTO> faturas
) {
}
