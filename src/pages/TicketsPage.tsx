import { FC } from "react";
import { useAuth } from "../context/authContext";
import { Text } from "@chakra-ui/react";
import FullPageLayout from "../components/FullPageLayout";
import TicketsList from "../components/TicketsList";

const MessagesPage: FC = () => {
  const [auth] = useAuth();

  if (!auth || !auth.is_engineer) return <Text>Страница недосупна</Text>;

  return (
    <FullPageLayout title="Обращения">
      <TicketsList />
    </FullPageLayout>
  );
};

export default MessagesPage;
