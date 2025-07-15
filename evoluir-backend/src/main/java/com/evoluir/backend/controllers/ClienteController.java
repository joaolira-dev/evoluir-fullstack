package com.evoluir.backend.controllers;



import com.evoluir.backend.dtos.ClienteCreateDTO;
import com.evoluir.backend.dtos.ClienteDTO;
import com.evoluir.backend.models.Cliente;
import com.evoluir.backend.services.ClienteServices;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/clientes")
public class ClienteController {

    @Autowired
    private ClienteServices clienteServices;

    @GetMapping
    public List<Cliente> listarClientes() {
        return clienteServices.listarClientes();
    }

    @PostMapping
    public ClienteDTO cadastrarCliente(@Valid @RequestBody ClienteCreateDTO cliente) {
        return clienteServices.cadastrarCliente(cliente);
    }

    @GetMapping("/{id}")
    public Cliente listarCliente(@PathVariable Long id) {
        return clienteServices.listarCliente(id);
    }

    @PutMapping("/{id}")
    public ClienteDTO editarCliente(@PathVariable Long id, @RequestBody ClienteDTO clienteAtualizado) {
        return clienteServices.editarCliente(id, clienteAtualizado);
    }

    @GetMapping("/bloqueados")
    public List<Cliente> listarBloqueados() {
        return clienteServices.listarBloqueados();
    }
}
