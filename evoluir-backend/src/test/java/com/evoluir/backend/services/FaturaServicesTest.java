package com.evoluir.backend.services;

import com.evoluir.backend.dtos.FaturaDTO;
import com.evoluir.backend.enums.StatusBloqueio;
import com.evoluir.backend.enums.StatusFatura;
import com.evoluir.backend.models.Cliente;
import com.evoluir.backend.models.Fatura;
import com.evoluir.backend.repository.ClienteRepository;
import com.evoluir.backend.repository.FaturaRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;



@ExtendWith(MockitoExtension.class)
class FaturaServicesTest {

    @Mock
    private FaturaRepository faturaRepository;

    @Mock
    private ClienteRepository clienteRepository;

    @InjectMocks
    private FaturaServices faturaServices;


    @Test
    @DisplayName("Deve pagar Fatura com Sucesso")
    void realizarPagamento() {

        // Cliente e faturaa de teste
        Cliente cliente = criarCliente();
        Fatura fatura = criarFatura(StatusFatura.A, cliente, LocalDate.now());


        when(faturaRepository.findById(1L)).thenReturn(Optional.of(fatura));
        when(faturaRepository.save(any(Fatura.class))).thenAnswer(inv -> inv.getArgument(0));

        FaturaDTO dto = faturaServices.realizarPagamento(1L);

        assertEquals(StatusFatura.P, dto.status());
        assertNotNull(dto.dataPagamento());

        verify(clienteRepository, never()).save(any());
    }

    @Test
    @DisplayName("Deve bloquear cliente quando pagamento atrasado")
    void pagamentoAtrasado() {
        Cliente cliente = criarCliente();
        Fatura fatura = criarFatura(StatusFatura.A, cliente, LocalDate.now().minusDays(10));

        when(faturaRepository.findById(1L)).thenReturn(Optional.of(fatura));
        when(faturaRepository.save(any(Fatura.class))).thenAnswer(inv -> inv.getArgument(0));
        when(clienteRepository.save(any(Cliente.class))).thenAnswer(inv -> inv.getArgument(0));


        faturaServices.realizarPagamento(1L);

        assertEquals(StatusBloqueio.B, cliente.getStatusBloqueio());
        assertEquals(BigDecimal.ZERO, cliente.getLimiteCredito());
    }

    @Test
    @DisplayName("Deve lancar excecao quando fatura ja estiver paga")
    void pagamentoJaPago() {
        Cliente cliente = criarCliente();
        Fatura fatura = criarFatura(StatusFatura.P, cliente, LocalDate.now());

        when(faturaRepository.findById(1L)).thenReturn(Optional.of(fatura));

        RuntimeException ex = assertThrows(RuntimeException.class,
                () -> faturaServices.realizarPagamento(1L));

        assertTrue(ex.getMessage().toLowerCase().contains("paga"));
    }

    @Test
    @DisplayName("Deve lancar excecao quando fatura não existir")
    void faturaInexistente() {

        when(faturaRepository.findById(999L)).thenReturn(Optional.empty());


        assertThrows(RuntimeException.class,
                () -> faturaServices.realizarPagamento(999L));

        verify(faturaRepository, never()).save(any());
    }

    @Test
    @DisplayName("Deve retornar lista de faturas do repositorio")
    void listarFaturas() {
        List<Fatura> lista = Arrays.asList(new Fatura(), new Fatura());
        when(faturaRepository.findByClienteId(1L)).thenReturn(lista);


        List<Fatura> result = faturaServices.listarFaturas(1L);

        assertEquals(2, result.size());
        verify(faturaRepository).findByClienteId(1L);
    }

    @Test
    @DisplayName("Deve retornar faturas atrasadas")
    void listarAtrasadas() {
        Cliente cliente = criarCliente();

        Fatura f1 = criarFatura(StatusFatura.A, cliente, LocalDate.now().minusDays(5));
        Fatura f2 = criarFatura(StatusFatura.A, cliente, LocalDate.now().minusDays(8));

        when(faturaRepository.findByStatus(StatusFatura.A)).thenReturn(List.of(f1,f2));

        List<FaturaDTO> atrasadas = faturaServices.faturasAtrasadas();

        assertEquals(2, atrasadas.size());
        verify(faturaRepository).findByStatus(StatusFatura.A);
    }

    // Cria cliente  pra usar nos testes
    private Cliente criarCliente() {
        Cliente c = new Cliente();
        c.setId(1L);
        c.setStatusBloqueio(StatusBloqueio.A);
        c.setLimiteCredito(new BigDecimal("5000"));
        return c;
    }

    // Cria fatura para usar nos testes
    private Fatura criarFatura(StatusFatura status, Cliente cliente, LocalDate vencimento) {
        Fatura f = new Fatura();
        f.setId(1L);
        f.setStatus(status);
        f.setDataVencimento(vencimento);
        f.setCliente(cliente);
        return f;
    }
}