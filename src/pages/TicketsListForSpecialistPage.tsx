import { FC } from "react";
import FullPageLayout from "../components/FullPageLayout";
import TicketsListForSpecialist from "../components/TicketsListForSpecialist";
import { useAuth } from "../context/authContext";
import { Text } from "@chakra-ui/react";

const TicketsListForSpecialistPage: FC = () => {
  const [auth] = useAuth();

  return (
    <FullPageLayout title={`Обращения специалиста ${auth?.email}`}>
      {!auth || !auth.is_engineer ? (
        <Text>Страница недоступна</Text>
      ) : (
        <TicketsListForSpecialist />
      )}
    </FullPageLayout>
  );
};

export default TicketsListForSpecialistPage;
