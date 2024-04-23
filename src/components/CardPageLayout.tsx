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
  <Box p={4} minH="100vh" display="flex" flexDirection="column">
    <Navigation />
    <Center flexDirection="column" flexGrow={1}>
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
