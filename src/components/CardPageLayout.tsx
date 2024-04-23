import { FC } from "react";
import Navigation from "./Navigation";
import {
  Center,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Box,
} from "@chakra-ui/react";

type CardPageLayoutProps = {
  title: string;
  children: React.ReactNode;
};

const CardPageLayout: FC<CardPageLayoutProps> = ({ children, title }) => (
  <Box p={4}>
    <Navigation />
    <Center minH="calc(100vh - 2rem - 2 * var(--chakra-space-4))">
      <Card maxW="lg" w="100%">
        <CardHeader>
          <Heading size="md">{title}</Heading>
        </CardHeader>
        <CardBody>{children}</CardBody>
      </Card>
    </Center>
  </Box>
);

export default CardPageLayout;
