import { Card, CardHeader, Heading, CardBody, Text } from "@chakra-ui/react";
import { FC } from "react";

type AnalyticValueCardProps = {
  title: string;
  value: string | number | undefined;
};

const AnalyticValueCard: FC<AnalyticValueCardProps> = ({ title, value }) => (
  <Card height="100%">
    <CardHeader pb={2}>
      <Heading size="xs">{title}</Heading>
    </CardHeader>
    <CardBody pt={0}>
      <Text fontSize="xx-large" fontWeight="light">
        {value ?? "-"}
      </Text>
    </CardBody>
  </Card>
);

export default AnalyticValueCard;
