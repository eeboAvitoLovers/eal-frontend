import { FC } from "react";
import ComplianceForm from "../components/ComplianceForm";
import CardPageLayout from "../components/CardPageLayout";

const ComplianceFormPage: FC = () => (
  <CardPageLayout title="Написать обращение">
    <ComplianceForm />
  </CardPageLayout>
);

export default ComplianceFormPage;
