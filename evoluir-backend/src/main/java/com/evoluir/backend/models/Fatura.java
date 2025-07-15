package com.evoluir.backend.models;



import com.evoluir.backend.enums.StatusFatura;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;


import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Data
public class Fatura {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private LocalDate dataVencimento;
    private LocalDate dataPagamento;

    private BigDecimal valor;


    @Enumerated(EnumType.STRING)
    @Column(name = "status_fatura", nullable = false)
    private StatusFatura status = StatusFatura.B;

    @ManyToOne
    @JoinColumn(name = "cliente_id", nullable = false)
    @JsonBackReference
    private Cliente cliente;
}
