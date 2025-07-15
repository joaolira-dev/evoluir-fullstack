package com.evoluir.backend.controllers;



import com.evoluir.backend.dtos.FaturaDTO;
import com.evoluir.backend.models.Fatura;
import com.evoluir.backend.services.FaturaServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/faturas")
public class FaturaController {


    @Autowired
    private FaturaServices faturaServices;


    @GetMapping("/{id}")
    public List<Fatura> listarFaturas(@PathVariable Long id) {
        return faturaServices.listarFaturas(id);
    }

    @PutMapping("/{id}/pagamento")
    public ResponseEntity<FaturaDTO> realizarPagamento(@PathVariable Long id) {
        FaturaDTO faturaPaga = faturaServices.realizarPagamento(id);
        return ResponseEntity.ok(faturaPaga);
    }

    @GetMapping("/atrasadas")
    public List<FaturaDTO> faturasAtrasadas() {
        return faturaServices.faturasAtrasadas();
    }
}
