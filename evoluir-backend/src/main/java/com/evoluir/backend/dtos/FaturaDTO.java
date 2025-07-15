package com.evoluir.backend.dtos;


import com.evoluir.backend.enums.StatusFatura;
import com.evoluir.backend.models.Fatura;

import java.math.BigDecimal;
import java.time.LocalDate;

public record FaturaDTO(
        Long id,
        LocalDate dataVencimento,
        LocalDate dataPagamento,
        BigDecimal valor,
        StatusFatura status,
        Long clienteId
) {
    public FaturaDTO(Fatura fatura) {
        this(
                fatura.getId(),
                fatura.getDataVencimento(),
                fatura.getDataPagamento(),
                fatura.getValor(),
                fatura.getStatus(),
                fatura.getCliente().getId()
        );
    }
}
