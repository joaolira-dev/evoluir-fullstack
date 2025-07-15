import { faIdCard, faUserPlus, faUsers } from "@fortawesome/free-solid-svg-icons";
import { PageContainer } from "../../../components/MainComponents";
import CardItem from "../../../components/CardItem";


const Clientes = () => {
  return (
    <PageContainer>
      <div className="flex items-center justify-center gap-16">
        <CardItem icon={faUsers} to="/clientes/lista" label="Lista dos Clientes" />
        <CardItem icon={faIdCard} to="/clientes/consultar" label="Consultar um Cliente" />
        <CardItem icon={faUserPlus} to="/clientes/cadastrar" label="Cadastrar um Cliente" />
      </div>
    </PageContainer>
  );
};

export default Clientes;
