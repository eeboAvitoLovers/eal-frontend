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
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
      <GridItem>
        <AnalyticValueCard
          title="Среднее время решения обращений (минут)"
          value={analytics.avg_time.accepted_solved / 60_000000000}
        />
      </GridItem>
      <GridItem>
        <AnalyticValueCard
          title=" Среднее время до начала работы над обращением (минут)"
          value={analytics.avg_time.accepted_in_progress / 60_000000000}
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
