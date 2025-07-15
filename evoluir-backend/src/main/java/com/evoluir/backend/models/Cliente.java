package com.evoluir.backend.models;




import com.evoluir.backend.enums.StatusBloqueio;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;


import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Entity
@Data
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    @Column(unique = true)
    private String cpf;

    private LocalDate dataNascimento;

    @Enumerated(EnumType.STRING)
    private StatusBloqueio statusBloqueio = StatusBloqueio.A;

    private BigDecimal limiteCredito;



    @OneToMany(mappedBy = "cliente", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<Fatura> faturas;

}

