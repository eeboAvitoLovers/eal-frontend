import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Center,
  Heading,
  Link,
} from "@chakra-ui/react";
import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import ComplianceForm from "../components/ComplianceForm";

const ComplianceFormPage: FC = () => (
  <Box p={4}>
    <Box height="2rem" display="flex" justifyContent="flex-end" gap="1rem">
      <Link as={RouterLink} to="/check">
        Проверить статус обращения
      </Link>
      <Link as={RouterLink} to="/login">
        Войти
      </Link>
    </Box>
    <Center minH="100vh">
      <Card maxW="lg" w="100%">
        <CardHeader>
          <Heading size="md">Написать обращение</Heading>
        </CardHeader>
        <CardBody>
          <ComplianceForm />
        </CardBody>
      </Card>
    </Center>
  </Box>
);

export default ComplianceFormPage;
