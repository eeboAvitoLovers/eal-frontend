import { Text } from "@chakra-ui/react";
import Analytics from "../components/Analytics";
import FullPageLayout from "../components/FullPageLayout";
import { useAuth } from "../context/authContext";

const AnalyticsPage = () => {
  const [auth] = useAuth();

  return (
    <FullPageLayout title="Аналитика">
      {!auth || !auth.is_engineer ? (
        <Text>Страница недоступна</Text>
      ) : (
        <Analytics />
      )}
    </FullPageLayout>
  );
};

export default AnalyticsPage;
