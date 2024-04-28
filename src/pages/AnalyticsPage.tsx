import { Text } from "@chakra-ui/react";
import Analytics from "../components/Analytics";
import FullPageLayout from "../components/FullPageLayout";
import { useAuth } from "../context/authContext";

const AnalyticsPage = () => {
  const [auth] = useAuth();
  if (!auth || !auth.is_engineer) return <Text>Страница недоступна</Text>;

  return (
    <FullPageLayout title="Аналитика">
      <Analytics />
    </FullPageLayout>
  );
};

export default AnalyticsPage;
