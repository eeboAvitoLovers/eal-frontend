import { FC } from "react";
import FullPageLayout from "../components/FullPageLayout";
import TicketsListForSpecialist from "../components/TicketsListForSpecialist";
import { useAuth } from "../context/authContext";
import { Text } from "@chakra-ui/react";

const TicketsListForSpecialistPage: FC = () => {
  const [auth] = useAuth();

  if (!auth || !auth.is_engineer) return <Text>Страница недосупна</Text>;

  return (
    <FullPageLayout title={`Обращения специалиста ${auth.email}`}>
      <TicketsListForSpecialist />
    </FullPageLayout>
  );
};

export default TicketsListForSpecialistPage;
