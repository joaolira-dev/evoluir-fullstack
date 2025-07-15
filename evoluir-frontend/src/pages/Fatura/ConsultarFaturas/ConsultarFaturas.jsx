import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Input, PageContainer } from "../../../components/MainComponents";
import api from "../../../utils/api";
import FaturaItem from "../../../components/FaturaItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faSearch } from "@fortawesome/free-solid-svg-icons";

const ConsultarFaturas = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [clienteId, setClienteId] = useState(params.clienteId || "");
  const [faturas, setFaturas] = useState([]);
  const [faturasExibidas, setFaturasExibidas] = useState(false);

  useEffect(() => {
    if (params.clienteId) {
      buscarFaturas(params.clienteId);
    }
  }, [params.clienteId]);

  const buscarFaturas = async (id) => {
    const response = await api.get(`/faturas/${id}`)
    if (response.data) {
      setFaturas(response.data);
      setFaturasExibidas(true);
    } else {
      setFaturas([]);
      setFaturasExibidas(true); 
    }
  };

  const handleBuscarFaturas = () => {
    if (!clienteId.trim()) return;
    buscarFaturas(clienteId);
  };

  const handleReset = () => {
    setClienteId("");
    setFaturas([]);
    setFaturasExibidas(false);
    navigate("/faturas/consultar"); 
  };

  return (
    <PageContainer>
      <div className="flex flex-col items-center justify-center px-4 text-center">
        {!faturasExibidas && (
          <>
            <div className="flex justify-center items-center gap-12 py-4">
              <Link to="/clientes/lista" className="text-white hover:text-gray-300">
                <FontAwesomeIcon icon={faArrowLeft} className="text-2xl" />
              </Link>
              <h1 className="text-2xl text-white font-bold">
                Digite o <span className="text-blue-400">ID do Cliente</span> para Consultar Faturas
              </h1>
            </div>
            <Input
              placeholder="Ex: 1"
              onChange={(e) => setClienteId(e.target.value)}
              value={clienteId}
            />
            <button
              onClick={handleBuscarFaturas}
              className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg cursor-pointer font-semibold hover:bg-blue-700 transition-all duration-200 flex items-center gap-2 shadow-md"
            >
              <FontAwesomeIcon icon={faSearch} />
              Consultar Cliente
            </button>
          </>
        )}

        {faturasExibidas && faturas.length > 0 && (
          <>
            <div className="flex justify-center items-center gap-12 py-4">
              <Link to="/clientes/lista" className="text-white hover:text-gray-300">
                <FontAwesomeIcon icon={faArrowLeft} className="text-2xl" />
              </Link>
              <h1 className="text-2xl text-white font-bold">
                Faturas do <span className="text-blue-600">Cliente {clienteId}</span>
              </h1>
            </div>
            <FaturaItem
              faturas={faturas}
              clienteId={clienteId}
              onClick={handleReset}
            />
          </>
        )}

        {faturasExibidas && faturas.length === 0 && (
          <div className="text-white mt-8">
            <p>Nenhuma fatura encontrada para o cliente ID: {clienteId}</p>
            <button
              onClick={handleReset}
              className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Pesquisar Outro Cliente
            </button>
          </div>
        )}
      </div>
    </PageContainer>
  );
};

export default ConsultarFaturas;
