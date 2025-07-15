import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import ListarClientes from "../pages/Clientes/ListarClientes/ListarClientes.jsx";
import HomeClientes from "../pages/Clientes/HomeClientes/HomeClientes.jsx";
import CadastrarCliente from "../pages/Clientes/CadastrarCliente/CadastrarCliente.jsx";
import Faturas from "../pages/Fatura/FaturasHome/FaturasHome.jsx";
import FaturasAtrasadas from "../pages/Fatura/FaturasAtrasadas/FaturasAtrasadas.jsx";
import PagarFatura from "../pages/Fatura/PagarFatura/PagarFatura.jsx";
import ConsultarFaturas from "../pages/Fatura/ConsultarFaturas/ConsultarFaturas.jsx";
import ConsultarCliente from "../pages/Clientes/ConsultarClientes/ConsultarCliente.jsx";

export const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/clientes" element={<HomeClientes />} />
    <Route path="/clientes/lista" element={<ListarClientes />} />
    <Route path="/clientes/cadastrar" element={<CadastrarCliente />} />
    <Route path="/clientes/consultar" element={<ConsultarCliente/>}/>
    <Route path="/faturas" element={<Faturas />} />
    <Route path="/faturas/atrasadas" element={<FaturasAtrasadas />} />
    <Route path="/faturas/pagamento" element={<PagarFatura />} />
    <Route path="/faturas/pagamento/:faturaId" element={<PagarFatura />} />
    <Route path="/faturas/consultar" element={<ConsultarFaturas />} />
    <Route path="/faturas/:clienteId" element={<ConsultarFaturas />} />
  </Routes>
);

export default MainRoutes;
