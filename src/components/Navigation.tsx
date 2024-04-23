import { Link, Box } from "@chakra-ui/react";
import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";

const Navigation: FC = () => (
  <Box
    as="nav"
    display="flex"
    justifyContent="flex-end"
    flexWrap="wrap"
    gap="1rem"
  >
    <Link as={RouterLink} to="/">
      Создать обращение
    </Link>
    <Link as={RouterLink} to="/check">
      Проверить статус обращения
    </Link>
    <Link as={RouterLink} to="/login">
      Войти
    </Link>
  </Box>
);
export default Navigation;
