import { Card, CardHeader, Heading, CardBody, Text } from "@chakra-ui/react";
import { FC } from "react";

type AnalyticValueCardProps = {
  title: string;
  value: string | number | undefined;
};

const AnalyticValueCard: FC<AnalyticValueCardProps> = ({ title, value }) => (
  <Card height="100%">
    <CardHeader>
      <Heading size="sm">{title}</Heading>
    </CardHeader>
    <CardBody>
      <Text fontSize="xxx-large" fontWeight="light">
        {value ?? "-"}
      </Text>
    </CardBody>
  </Card>
);

export default AnalyticValueCard;
