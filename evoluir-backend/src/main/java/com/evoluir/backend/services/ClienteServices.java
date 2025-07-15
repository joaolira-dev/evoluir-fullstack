package com.evoluir.backend.services;


import com.evoluir.backend.dtos.ClienteCreateDTO;
import com.evoluir.backend.dtos.ClienteDTO;
import com.evoluir.backend.enums.StatusBloqueio;
import com.evoluir.backend.mappers.ClienteMapper;
import com.evoluir.backend.models.Cliente;
import com.evoluir.backend.repository.ClienteRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class ClienteServices {

    @Autowired
    private ClienteRepository clienteRepository;


    public List<Cliente> listarClientes() {
        return clienteRepository.findAll();
    }

    public ClienteDTO cadastrarCliente(ClienteCreateDTO dto) {
        Cliente cliente = ClienteMapper.toEntity(dto);
        cliente.setStatusBloqueio(StatusBloqueio.A);
        Cliente salvo = clienteRepository.save(cliente);
        return new ClienteDTO(salvo);
    }

    public Cliente listarCliente(Long id) {
        return clienteRepository.findById(id).orElseThrow(() -> new RuntimeException("Pessoa não encontrada"));
    }

    public ClienteDTO editarCliente(@Valid Long id, ClienteDTO clienteDTO) {
        Cliente cliente = clienteRepository.findById(id).orElseThrow(() -> new RuntimeException("Cliente não encontrado"));

        if(clienteDTO.nome() != null) {
            cliente.setNome(clienteDTO.nome());
        }
        if(clienteDTO.statusBloqueio() != null) {
            cliente.setStatusBloqueio(clienteDTO.statusBloqueio());
        }
        if(clienteDTO.limiteCredito() != null) {
            cliente.setLimiteCredito(clienteDTO.limiteCredito());
        }

        Cliente salvo = clienteRepository.save(cliente);
        return new ClienteDTO(salvo);
    }

    public List<Cliente> listarBloqueados() {
        return clienteRepository.findByStatusBloqueio(StatusBloqueio.B);
    }
}
