import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../utils/api";
import { calcularIdade } from "../../../utils/calcular-idade";
import { PageContainer } from "../../../components/MainComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const ListarClientes = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const getClientes = async () => {
      const response = await api.get("/clientes");
      setClientes(response.data);
    };
    getClientes();
  }, []);

  return (
    <PageContainer>
      {clientes.length > 0 ? (
        <>
          <div className="flex justify-center items-center gap-4 mb-4">
            <Link to="/clientes" className="text-white hover:text-gray-300">
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="text-2xl -ml-135"
              />
            </Link>
            <h1 className="text-2xl font-bold text-white">Lista de Clientes</h1>
          </div>

          <div className="overflow-x-auto flex items-center justify-center">
            <table className="min-w-7xl bg-white shadow-md rounded">
              <thead className="bg-blue-700 text-white">
                <tr>
                  <th className="text-left px-4 py-2">Nome</th>
                  <th className="text-left px-4 py-2">CPF</th>
                  <th className="text-left px-4 py-2">Idade</th>
                  <th className="text-left px-4 py-2">Status</th>
                  <th className="text-left px-4 py-2">Limite</th>
                  <th className="text-left px-4 py-2">Ações</th>
                </tr>
              </thead>
              <tbody>
                {clientes.map((cliente) => {
                  const idade = calcularIdade(cliente.dataNascimento);
                  const status =
                    cliente.statusBloqueio === "B" ? "Bloqueado" : "Ativo";
                  const statusClass =
                    status === "Bloqueado" ? "text-red-600" : "text-green-600";

                  return (
                    <tr key={cliente.id} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-2">{cliente.nome}</td>
                      <td className="px-4 py-2">{cliente.cpf}</td>
                      <td className="px-4 py-2">{idade}</td>
                      <td className={`px-4 py-2 font-semibold ${statusClass}`}>
                        {status}
                      </td>
                      <td className="px-4 py-2">R$ {cliente.limiteCredito}</td>
                      <td className="px-4 py-2">
                        <Link
                          to={`/faturas/${cliente.id}`}
                          className="text-blue-700 font-semibold hover:underline"
                        >
                          Ver Faturas
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      ): 
         <div className="text-3xl font-bold text-red-400">Não há Clientes para listar!</div>
      }
    </PageContainer>
  );
};

export default ListarClientes;
