import { FC } from "react";
import { useAuth } from "../context/authContext";
import { Text } from "@chakra-ui/react";
import FullPageLayout from "../components/FullPageLayout";
import UnsolvedMessages from "../components/UnsolvedMessages";

const MessagesPage: FC = () => {
  const [auth] = useAuth();

  if (!auth.isEngineer) return <Text>Страница недосупна</Text>;

  return (
    <FullPageLayout title="Обращения">
      <UnsolvedMessages />
    </FullPageLayout>
  );
};

export default MessagesPage;
