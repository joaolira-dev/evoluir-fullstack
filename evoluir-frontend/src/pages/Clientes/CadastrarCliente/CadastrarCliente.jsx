import { useState } from "react";
import { PageContainer, Input } from "../../../components/MainComponents";
import api from "../../../utils/api";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const CadastrarCliente = () => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [limiteCredito, setLimiteCredito] = useState("");

  const handleCadastrar = async () => {
    if (!nome || !cpf || !dataNascimento || !limiteCredito) {
      alert("Preencha todos os campos!");
      return;
    }

    console.log(nome, cpf, dataNascimento, limiteCredito);

    await api.post("/clientes", {
      nome,
      cpf,
      dataNascimento,
      limiteCredito: parseFloat(limiteCredito),
    });

    alert("Cliente cadastrado com sucesso!");
    setNome("");
    setCpf("");
    setDataNascimento("");
    setLimiteCredito("");
  };

  return (
    <PageContainer>
      <div className="flex flex-col items-center text-white justify-center">
        
        <div className="flex items-center gap-4 py-4">
          <Link to="/clientes" className="text-white hover:text-gray-300">
            <FontAwesomeIcon icon={faArrowLeft} className="text-2xl" />
          </Link>
          <h1 className="text-2xl text-white font-bold leading-none">
            Cadastrar <span className="text-blue-400">Cliente</span>
          </h1>
        </div>

        <div className="flex flex-col gap-4 w-full max-w-md">
          <Input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <Input
            type="text"
            placeholder="CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
          <Input
            placeholder="Data de Nascimento"
            type="date"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
          />

          <Input
            placeholder="Limite de Crédito"
            type="number"
            value={limiteCredito}
            onChange={(e) => setLimiteCredito(e.target.value)}
          />

          <button
            onClick={handleCadastrar}
            className="mt-4 px-6 py-3 cursor-pointer bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all font-semibold"
          >
            Cadastrar Cliente
          </button>
        </div>
      </div>
    </PageContainer>
  );
};

export default CadastrarCliente;
