package com.evoluir.backend.utils;

import com.evoluir.backend.enums.StatusBloqueio;
import com.evoluir.backend.models.Cliente;
import com.evoluir.backend.models.Fatura;
import com.evoluir.backend.repository.ClienteRepository;
import com.evoluir.backend.repository.FaturaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.List;

@Component
public class FaturaStatusProcessor {

    @Autowired
    private ClienteRepository clienteRepository;

    @Autowired
    private FaturaRepository faturaRepository;

    @EventListener(ApplicationReadyEvent.class)
    public void aplicarBloqueioSeAtrasado() {
        List<Fatura> faturas = faturaRepository.findAll();

        LocalDate hoje = LocalDate.now();

        for (Fatura fatura : faturas) {
            if (fatura.getDataPagamento() == null) {
                LocalDate vencimento = fatura.getDataVencimento();
                if (vencimento != null && ChronoUnit.DAYS.between(vencimento, hoje) > 3) {
                    Cliente cliente = fatura.getCliente();
                    cliente.setStatusBloqueio(StatusBloqueio.B);
                    cliente.setLimiteCredito(BigDecimal.ZERO);
                    clienteRepository.save(cliente);
                }
            }
        }
    }
}
