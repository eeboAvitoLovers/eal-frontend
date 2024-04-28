import { FC, useEffect, useState } from "react";
import analyticsApi, { AnalyticsData } from "../api/analytics";
import { toast } from "../utils/toasts";
import { GridItem, Progress, SimpleGrid, Text } from "@chakra-ui/react";
import AnalyticValueCard from "./AnalyticValueCard";

const Analytics: FC = () => {
  const [analytics, setAnalytics] = useState<AnalyticsData>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    analyticsApi
      .getAnalytics()
      .then((res) => setAnalytics(res.data))
      .catch(() => {
        toast({
          title: "Ошибка!",
          description: "Не удалось загрузить аналитику",
          status: "error",
        });
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Progress isIndeterminate colorScheme="green" />;
  if (!analytics) return <Text>Не удалось загрузить аналитику</Text>;

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
      <GridItem>
        <AnalyticValueCard
          title="Среднее время решения обращений"
          value={analytics.avg_time.accepted_solved}
        />
      </GridItem>
      <GridItem>
        <AnalyticValueCard
          title=" Среднее время до начала работы над обращением"
          value={analytics.avg_time.accepted_in_progress}
        />
      </GridItem>
      <GridItem>
        <AnalyticValueCard
          title="Всего закрытых обращений"
          value={analytics.closed_tickets.total}
        />
      </GridItem>
      <GridItem>
        <AnalyticValueCard
          title="Закрытых обращений за этот месяц"
          value={analytics.closed_tickets.this_month}
        />
      </GridItem>
      <GridItem>
        <AnalyticValueCard
          title="Закрытых обращений за предыдущий месяц"
          value={analytics.closed_tickets.prev_month}
        />
      </GridItem>
    </SimpleGrid>
  );
};

export default Analytics;
