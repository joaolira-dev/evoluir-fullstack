
import { PageContainer } from "../../../components/MainComponents";
import { faCalendarTimes, faFileInvoiceDollar, faHandHoldingUsd } from "@fortawesome/free-solid-svg-icons";
import CardItem from "../../../components/CardItem";

const Faturas = () => {
  return (
    <PageContainer>
      <div className="flex items-center justify-center gap-16">
      <CardItem icon={faFileInvoiceDollar} to="/faturas/consultar" label="Faturas do cliente"/>
      <CardItem icon={faHandHoldingUsd} to="/faturas/pagamento" label="Pagar uma fatura"/>
      <CardItem icon={faCalendarTimes} to="/faturas/atrasadas" label="Faturas Atrasadas"/>
      
     </div> 
    </PageContainer>
  );
};

export default Faturas;
