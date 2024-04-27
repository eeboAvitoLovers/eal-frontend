import { Link, Box, Heading, Flex } from "@chakra-ui/react";
import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useAuth } from "../context/authContext";

const Navigation: FC = () => {
  const [auth] = useAuth();

  return (
    <Flex
      as="nav"
      alignItems="center"
      flexWrap="wrap"
      gap="1rem"
      justifyContent="space-between"
      shadow="md"
      p={4}
    >
      <Heading size="sm" mr={2}>
        EAL Support
      </Heading>
      <Flex alignItems="center" gap="1rem" flexWrap="wrap">
        <Link as={RouterLink} to="/auth">
          Аккаунт
        </Link>
        <Link as={RouterLink} to="/check">
          Проверить статус обращения
        </Link>

        {auth && (
          <>
            <Link as={RouterLink} to="/">
              Создать обращение
            </Link>
            {auth.is_engineer && (
              <>
                <Link as={RouterLink} to="/tickets">
                  Все обращения
                </Link>
                <Link as={RouterLink} to="/analytics">
                  Аналитика
                </Link>
              </>
            )}
          </>
        )}
      </Flex>
    </Flex>
  );
};
export default Navigation;
