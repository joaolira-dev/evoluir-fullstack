package com.evoluir.backend.mappers;



import com.evoluir.backend.dtos.ClienteCreateDTO;
import com.evoluir.backend.enums.StatusBloqueio;
import com.evoluir.backend.models.Cliente;
import com.evoluir.backend.models.Fatura;

import java.util.List;

public class ClienteMapper {

    public static Cliente toEntity(ClienteCreateDTO dto) {
        Cliente cliente = new Cliente();
        cliente.setNome(dto.nome());
        cliente.setCpf(dto.cpf());
        cliente.setDataNascimento(dto.dataNascimento());
        cliente.setLimiteCredito(dto.limiteCredito());
        cliente.setStatusBloqueio(StatusBloqueio.A);

        if (dto.faturas() != null && !dto.faturas().isEmpty()) {
            List<Fatura> faturas = dto.faturas().stream().map(f -> {
                Fatura fatura = new Fatura();
                fatura.setDataVencimento(f.dataVencimento());
                fatura.setDataPagamento(f.dataPagamento());
                fatura.setValor(f.valor());
                fatura.setStatus(f.status());
                fatura.setCliente(cliente);
                return fatura;
            }).toList();

            cliente.setFaturas(faturas);
        }

        return cliente;
    }
}
