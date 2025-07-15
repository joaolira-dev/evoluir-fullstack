import { Link } from "react-router-dom";

const FaturaItem = ({ faturas, onClick }) => {
  return (
    <div className="text-center text-white">
      <div className="max-w-2xl mx-auto">
        {faturas.map((fatura) => {
          const statusLabel =
            fatura.status === "P"
              ? "Paga"
              : fatura.status === "B"
              ? "Aberta"
              : "Atrasada";

          const statusColor =
            fatura.status === "P"
              ? "text-green-500"
              : fatura.status === "B"
              ? "text-red-500"
              : "text-yellow-400";

          return (
            <div
              key={fatura.id}
              className="bg-gray-800 p-6 mb-4 rounded-xl shadow text-left"
            >
              <p className="text-lg mb-1">
                <span className="font-semibold text-blue-400">ID:</span>{" "}
                {fatura.id}
              </p>
              <p className="text-lg mb-1">
                <span className="font-semibold text-blue-400">Valor:</span> R${" "}
                {fatura.valor.toFixed(2)}
              </p>
              <p className="text-lg mb-1">
                <span className="font-semibold text-blue-400">Vencimento:</span>{" "}
                {new Date(fatura.dataVencimento).toLocaleDateString()}
              </p>
              <p className="text-lg mb-1">
                <span className="font-semibold text-blue-400">Status:</span>{" "}
                <span className={`font-bold ${statusColor}`}>
                  {statusLabel}
                </span>
              </p>
              {fatura.dataPagamento && (
                <p className="text-lg mb-1">
                  <span className="font-semibold text-blue-400">Pago em:</span>{" "}
                  {new Date(fatura.dataPagamento).toLocaleDateString()}
                </p>
              )}
            </div>
          );
        })}

        <Link to="/faturas/consultar">
          <button
            onClick={onClick}
            className="inline-block mt-4 px-6 py-2 cursor-pointer bg-blue-600 text-lg text-white rounded-lg hover:bg-blue-700 transition"
          >
            Pesquisar Mais Faturas
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FaturaItem;
