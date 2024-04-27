import { FC } from "react";
import CardPageLayout from "../components/CardPageLayout";
import CheckTicketStatusForm from "../components/CheckTicketStatusForm";

const CheckTicketStatusPage: FC = () => (
  <CardPageLayout title="Проверить статус обращения">
    <CheckTicketStatusForm />
  </CardPageLayout>
);

export default CheckTicketStatusPage;
