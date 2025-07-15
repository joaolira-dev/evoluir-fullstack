import { faMoneyCheck, faUser } from "@fortawesome/free-solid-svg-icons";
import { PageContainer } from "../../components/MainComponents";
import CardItem from "../../components/CardItem";


const Home = () => {
  return (
    <PageContainer>
      <div className="flex items-center justify-center gap-16 flex-wrap">
        <CardItem icon={faUser} to="/clientes" label="Área do Cliente" />
        <CardItem icon={faMoneyCheck} to="/faturas" label="Área da Fatura" />
      </div>
    </PageContainer>
  );
};

export default Home;



