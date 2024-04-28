import {
  Link,
  Box,
  Heading,
  Flex,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
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
        {auth && auth.is_engineer && (
          <Link as={RouterLink} to="/analytics">
            Аналитика
          </Link>
        )}
        <Menu>
          <MenuButton as={Button} rightIcon={<>▼</>} variant="outline">
            Обращения
          </MenuButton>
          <MenuList>
            <MenuItem as={RouterLink} to="/check">
              Проверить статус обращения
            </MenuItem>
            {auth && (
              <>
                <MenuItem as={RouterLink} to="/">
                  Создать обращение
                </MenuItem>
                {auth.is_engineer && (
                  <>
                    <MenuItem as={RouterLink} to="/tickets">
                      Все обращения
                    </MenuItem>
                    <MenuItem as={RouterLink} to="/tickets/my">
                      Обращения в работе
                    </MenuItem>
                  </>
                )}
              </>
            )}
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};
export default Navigation;
