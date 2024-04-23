import { FC } from "react";
import CardPageLayout from "../components/CardPageLayout";
import CheckStatus from "../components/CheckStatus";

const CheckStatusPage: FC = () => (
  <CardPageLayout title="Проверить статус обращения">
    <CheckStatus />
  </CardPageLayout>
);

export default CheckStatusPage;
