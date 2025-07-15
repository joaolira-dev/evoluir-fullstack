package com.evoluir.backend.dtos;


import com.evoluir.backend.enums.StatusFatura;

import java.math.BigDecimal;
import java.time.LocalDate;

public record FaturaCreateDTO(
        LocalDate dataVencimento,
        LocalDate dataPagamento,
        BigDecimal valor,
        StatusFatura status
) {
}
