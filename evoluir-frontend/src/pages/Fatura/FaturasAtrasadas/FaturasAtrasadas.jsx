import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../utils/api";
import { PageContainer } from "../../../components/MainComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const FaturasAtrasadas = () => {
  const [faturas, setFaturas] = useState([]);

  useEffect(() => {
    const carregarFaturas = async () => {
      const resFaturas = await api.get("/faturas/atrasadas");
      const faturasComClientes = await Promise.all(
        resFaturas.data.map(async (fatura) => {
          const resCliente = await api.get(`/clientes/${fatura.clienteId}`);
          return { ...fatura, cliente: resCliente.data };
        })
      );
      setFaturas(faturasComClientes);
    };

    carregarFaturas();
  }, []);

  return (
    <PageContainer>
      {faturas.length > 0 ? (
        <>
          <div className="flex justify-center items-center gap-4 py-4">
            <Link to="/faturas" className="text-white hover:text-gray-300">
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="text-2xl -ml-105"
              />
            </Link>
            <h1 className="text-2xl font-bold text-white">
              Lista de Faturas{" "}
              <span className="text-red-600 font-semibold">Atrasadas</span>
            </h1>
          </div>

          <div className="overflow-x-auto flex items-center justify-center">
            <table className="min-w-6xl bg-white shadow-md rounded">
              <thead className="bg-blue-700 text-white">
                <tr>
                  <th className="text-left px-4 py-2">ID da Fatura</th>
                  <th className="text-left px-4 py-2">Cliente</th>
                  <th className="text-left px-4 py-2">Data de Vencimento</th>
                  <th className="text-left px-4 py-2">Data de Pagamento</th>
                  <th className="text-left px-4 py-2">Status</th>
                  <th className="text-left px-4 py-2">Ações</th>
                </tr>
              </thead>
              <tbody>
                {faturas.map((fatura) => {
                  const status =
                    fatura.statusFatura === "P" ? "Paga" : "Aberto";
                  const statusClass =
                    status === "Aberto" ? "text-red-600" : "text-green-600";

                  return (
                    <tr key={fatura.id} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-2">{fatura.id}</td>
                      <td className="px-4 py-2">{fatura.cliente.nome}</td>
                      <td className="px-4 py-2">{fatura.dataVencimento}</td>
                      <td className="px-4 py-2 text-red-700 font-bold">
                        Não Paga
                      </td>
                      <td className={`px-4 py-2 font-semibold ${statusClass}`}>
                        {status}
                      </td>
                      <td className="px-4 py-2">
                        <Link
                          to={`/faturas/pagamento/${fatura.id}`}
                          className="text-red-700 font-semibold hover:underline"
                        >
                          Registrar Pagamento
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <div className="text-3xl font-bold text-red-400">Não há faturas para listar!</div>
      )}
    </PageContainer>
  );
};

export default FaturasAtrasadas;
