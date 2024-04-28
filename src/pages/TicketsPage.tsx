import { FC } from "react";
import { useAuth } from "../context/authContext";
import { Text } from "@chakra-ui/react";
import FullPageLayout from "../components/FullPageLayout";
import TicketsList from "../components/TicketsList";

const MessagesPage: FC = () => {
  const [auth] = useAuth();

  return (
    <FullPageLayout title="Обращения">
      {!auth || !auth.is_engineer ? (
        <Text>Страница недоступна</Text>
      ) : (
        <TicketsList />
      )}
    </FullPageLayout>
  );
};

export default MessagesPage;
