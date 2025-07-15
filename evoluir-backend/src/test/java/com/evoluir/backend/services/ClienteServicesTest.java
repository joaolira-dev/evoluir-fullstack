package com.evoluir.backend.services;


import com.evoluir.backend.dtos.ClienteCreateDTO;
import com.evoluir.backend.dtos.ClienteDTO;
import com.evoluir.backend.enums.StatusBloqueio;
import com.evoluir.backend.models.Cliente;
import com.evoluir.backend.repository.ClienteRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;


@ExtendWith(MockitoExtension.class)
class ClienteServicesTest {


    @Mock ClienteRepository clienteRepository;

    @InjectMocks
    private ClienteServices clienteServices;

    @Test
    @DisplayName("Deve cadastrar cliente")
    void cadastrarCliente() {

        ClienteCreateDTO dto = new ClienteCreateDTO("João", "12345678901", LocalDate.now().minusYears(2), new BigDecimal("1000"), StatusBloqueio.A, null);

        Cliente clienteSalvo = new Cliente();

        clienteSalvo.setId(1L);
        clienteSalvo.setNome(dto.nome());
        clienteSalvo.setCpf(dto.cpf());
        clienteSalvo.setDataNascimento(dto.dataNascimento());
        clienteSalvo.setLimiteCredito(dto.limiteCredito());
        clienteSalvo.setStatusBloqueio(StatusBloqueio.A);
        clienteSalvo.setFaturas(null);

        when(clienteRepository.save(any(Cliente.class))).thenReturn(clienteSalvo);

        ClienteDTO resultado = clienteServices.cadastrarCliente(dto);

        assertEquals("João", resultado.nome());
        assertEquals(StatusBloqueio.A, resultado.statusBloqueio());
    }

    @Test
    @DisplayName("Deve editar cliente || realizar pagamento")
    void editarCliente() {
        Cliente clienteExistente = new Cliente();
        clienteExistente.setId(1L);
        clienteExistente.setNome("Antigo");
        clienteExistente.setLimiteCredito(new BigDecimal("1000"));

        ClienteDTO novoDTO = new ClienteDTO(1L, "Novo Nome","12345678901", LocalDate.now().minusYears(8), StatusBloqueio.B, new BigDecimal("500"));

        when(clienteRepository.findById(1L)).thenReturn(Optional.of(clienteExistente));
        when(clienteRepository.save(any(Cliente.class))).thenAnswer(inv -> inv.getArgument(0));

        ClienteDTO atualizado = clienteServices.editarCliente(1L, novoDTO);

        assertEquals("Novo Nome", atualizado.nome());
        assertEquals(StatusBloqueio.B, atualizado.statusBloqueio());
        assertEquals(new BigDecimal("500"), atualizado.limiteCredito());
    }

    @Test
    @DisplayName("Deve lançar excecao se cliente não for encontrado")
    void listarClienteInexistente() {
        when(clienteRepository.findById(99L)).thenReturn(Optional.empty());

        RuntimeException ex = assertThrows(RuntimeException.class, () -> clienteServices.listarCliente(99L));

        assertTrue(ex.getMessage().toLowerCase().contains("não encontrada"));
    }
}