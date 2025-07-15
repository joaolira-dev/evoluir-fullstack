import { useState } from "react";
import { Input, PageContainer } from "../../../components/MainComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import api from "../../../utils/api";
import ClienteItem from "../../../components/ClienteItem";

const ConsultarCliente = () => {
  const [clienteConsultado, setClienteConsultado] = useState("");
  const [clienteId, setClienteId] = useState("");
  const [showCliente, setShowCliente] = useState(false);

  const handleConsultar = async (id) => {
    if (!clienteId) return alert("Digite um ID válido!");
    const response = await api.get(`/clientes/${id}`);
    setClienteConsultado(response.data);
    setShowCliente(true);
    console.log(clienteConsultado);
  };

  return (
    <PageContainer>
      {!showCliente && (
        <div className="flex flex-col justify-center items-center text-center ">

          <div className="flex justify-center items-center gap-12 py-4">
            <Link to="/clientes" className="text-white hover:text-gray-300">
              <FontAwesomeIcon icon={faArrowLeft} className="text-2xl" />
            </Link>
            <h1 className="text-2xl text-white font-bold">
              Digite o <span className="text-blue-400">ID do Cliente</span> para
              Consultar
            </h1>
          </div>

          <Input
            placeholder={"Ex: 1"}
            onChange={(e) => setClienteId(e.target.value)}
            value={clienteId}
          />

          <button
            onClick={() => handleConsultar(clienteId)}
            className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg cursor-pointer font-semibold hover:bg-blue-700 transition-all duration-200 flex items-center gap-2 shadow-md"
          >
            <FontAwesomeIcon icon={faSearch} />
            Consultar Cliente
          </button>
        </div>
      )}
      {showCliente && clienteConsultado && (
        <ClienteItem clienteConsultado={clienteConsultado} />
      )}
    </PageContainer>
  );
};

export default ConsultarCliente;
