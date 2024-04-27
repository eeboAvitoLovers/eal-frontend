import { FC } from "react";
import CreateTicketForm from "../components/CreateTicketForm";
import CardPageLayout from "../components/CardPageLayout";

const CreateTicketPage: FC = () => (
  <CardPageLayout title="Написать обращение">
    <CreateTicketForm />
  </CardPageLayout>
);

export default CreateTicketPage;
