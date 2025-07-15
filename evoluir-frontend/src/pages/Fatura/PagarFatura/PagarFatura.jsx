import { useState, useEffect } from "react";
import { Input, PageContainer } from "../../../components/MainComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import api from "../../../utils/api";
import { Link, useParams } from "react-router-dom";

const PagarFatura = () => {
  const { faturaId: faturaIdParam } = useParams();

  const [faturaId, setFaturaId] = useState(faturaIdParam || "");
  const [fatura, setFatura] = useState(null);
  const [cliente, setCliente] = useState(null);

  useEffect(() => {
    if (faturaIdParam) {
      pagarFatura(faturaIdParam);
    }
  }, [faturaIdParam]);

  const pagarFatura = async (id) => {
    const faturaResponse = await api.put(`/faturas/${id}/pagamento`);
    if (faturaResponse.data) {
      setFatura(faturaResponse.data);

      const clienteResponse = await api.get(`/clientes/${faturaResponse.data.clienteId}`);
      if (clienteResponse.data) {
        setCliente(clienteResponse.data);
      }
    }
  };

  const handlePagarFatura = () => {
    if (!faturaId.trim()) return;
    pagarFatura(faturaId);
  };

  const handleReset = () => {
    setFaturaId("");
    setFatura(null);
    setCliente(null);
  };

  return (
    <PageContainer>
      {!fatura ? (
        <div className="flex flex-col justify-center items-center text-center px-4">
          <div className="flex items-center gap-4 py-6">
            <Link to="/faturas" className="text-white hover:text-gray-300">
              <FontAwesomeIcon icon={faArrowLeft} className="text-2xl" />
            </Link>
            <h1 className="text-2xl text-white font-bold leading-none">
              Pagar <span className="text-green-400">Fatura</span> de um cliente
            </h1>
          </div>

          <Input
            placeholder="Ex: 1"
            onChange={(e) => setFaturaId(e.target.value)}
            value={faturaId}
          />

          <button
            onClick={handlePagarFatura}
            className="mt-6 px-6 py-3 bg-green-600 cursor-pointer text-white rounded-lg font-semibold hover:bg-green-700 transition-all duration-200 flex items-center gap-2 shadow-md"
          >
            <FontAwesomeIcon icon={faMoneyBill} />
            Registrar Pagamento
          </button>
        </div>
      ) : (
        <div className="text-center flex flex-col justify-center items-center px-4">
          <h1 className="text-2xl text-white font-bold mb-4">
            Fatura de <span className="text-green-400">{cliente?.nome}</span> paga com sucesso!
          </h1>
          <p className="text-white">Valor: R$ {fatura.valor.toFixed(2)}</p>
          <p className="text-white mb-4">
            Vencimento: {new Date(fatura.dataVencimento).toLocaleDateString()}
          </p>
          <button
            onClick={handleReset}
            className="mt-4 px-4 py-2 bg-green-600 cursor-pointer text-white rounded-lg hover:bg-green-700 transition-all duration-200"
          >
            Pagar Outra Fatura
          </button>
        </div>
      )}
    </PageContainer>
  );
};

export default PagarFatura;
