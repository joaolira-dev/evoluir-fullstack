package com.evoluir.backend.services;


import com.evoluir.backend.dtos.FaturaDTO;
import com.evoluir.backend.enums.StatusBloqueio;
import com.evoluir.backend.enums.StatusFatura;
import com.evoluir.backend.models.Cliente;
import com.evoluir.backend.models.Fatura;
import com.evoluir.backend.repository.ClienteRepository;
import com.evoluir.backend.repository.FaturaRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Service
public class FaturaServices {

    @Autowired
    private FaturaRepository faturaRepository;

    @Autowired
    private ClienteRepository clienteRepository;


    public List<Fatura> listarFaturas(Long id) {
        return faturaRepository.findByClienteId(id);
    }

    @Transactional
    public FaturaDTO realizarPagamento(Long id) {
        Fatura fatura = faturaRepository.findById(id).orElseThrow(() -> new RuntimeException("Fatura não encontrada!"));

        if (fatura.getCliente() == null) {
            throw new RuntimeException("Cliente associado à fatura não encontrado.");
        }


        if (fatura.getStatus() == StatusFatura.P) {
            throw new RuntimeException("Fatura com ID " + id + " já está paga.");
        }

        fatura.setStatus(StatusFatura.P);
        fatura.setDataPagamento(LocalDate.now());

        LocalDate vencimento = fatura.getDataVencimento();
        LocalDate pagamento = fatura.getDataPagamento(); // agora tem valor

        if (vencimento != null && pagamento.isAfter(vencimento.plusDays(3))) {
            Cliente cliente = fatura.getCliente();
            cliente.setStatusBloqueio(StatusBloqueio.B);
            cliente.setLimiteCredito(BigDecimal.ZERO);
            clienteRepository.save(cliente);
        }


        Fatura salva = faturaRepository.save(fatura);
        return new FaturaDTO(salva);
    }

    public List<FaturaDTO> faturasAtrasadas() {
        return faturaRepository.findByStatus(StatusFatura.A).stream().map(FaturaDTO::new).toList();
    }
}
