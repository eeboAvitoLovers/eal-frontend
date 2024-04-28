import { FC, useEffect, useMemo, useState } from "react";
import analyticsApi, { AnalyticsData } from "../api/analytics";
import { toast } from "../utils/toasts";
import {
  Flex,
  GridItem,
  Heading,
  Progress,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import AnalyticValueCard from "./AnalyticValueCard";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

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

  const metricData = useMemo(
    () =>
      analytics?.metrics.date.map((date, i) => ({
        date,
        percent: analytics?.metrics.percent[i],
      })),
    [analytics]
  );

  if (loading) return <Progress isIndeterminate colorScheme="green" />;
  if (!analytics) return <Text>Не удалось загрузить аналитику</Text>;

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
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
      <GridItem colSpan={{ base: 1, md: 2, lg: 3 }}>
        <Heading size="md" mb={2} textAlign="center">
          Процент отказов в месяц
        </Heading>
        <Flex justifyContent="center" overflowY="auto">
          <LineChart
            width={600}
            height={300}
            data={metricData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" /> {/* corrected line */}
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="percent"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </Flex>
      </GridItem>
    </SimpleGrid>
  );
};

export default Analytics;
