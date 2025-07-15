import { calcularIdade } from "../utils/calcular-idade";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const ClienteItem = ({ clienteConsultado }) => {
  const idade = calcularIdade(clienteConsultado.dataNascimento);
  const status =
    clienteConsultado.statusBloqueio === "B" ? "Bloqueado" : "Ativo";
  const statusClass =
    status === "Bloqueado" ? "text-red-500" : "text-green-500";

  return (
    <div className="text-center text-white min-h-[calc(100vh-64px)]">
      <div className="flex justify-center items-center gap-4 mb-6">
        <Link
          to="/clientes"
          className="text-white hover:text-gray-300 transition"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="text-2xl -ml-90" />
        </Link>
        <h1 className="text-2xl font-bold">Cliente Consultado</h1>
      </div>

      <div className="bg-gray-800 max-w-2xl mx-auto p-6 rounded-xl shadow-lg">
        <p className="text-lg mb-2">
          <span className="font-semibold text-blue-400">Nome:</span>{" "}
          {clienteConsultado.nome}
        </p>
        <p className="text-lg mb-2">
          <span className="font-semibold text-blue-400">CPF:</span>{" "}
          {clienteConsultado.cpf}
        </p>
        <p className="text-lg mb-2">
          <span className="font-semibold text-blue-400">Idade:</span> {idade}
        </p>
        <p className="text-lg mb-2">
          <span className="font-semibold text-blue-400">Limite:</span> R${" "}
          {clienteConsultado.limiteCredito.toFixed(2)}
        </p>
        <p className="text-lg mb-4">
          <span className="font-semibold text-blue-400">Status:</span>{" "}
          <span className={`font-bold ${statusClass}`}>{status}</span>
        </p>

        <Link
          to={`/faturas/${clienteConsultado.id}`}
          className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Ver Faturas
        </Link>
      </div>
    </div>
  );
};

export default ClienteItem;
