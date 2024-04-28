import { Button, Stack, Text } from "@chakra-ui/react";
import { useAuth } from "../context/authContext";
import authApi from "../api/auth";

const Profile = () => {
  const [auth, setAuth] = useAuth();

  const handleLogout = () => {
    authApi.logOut().then(() => setAuth(undefined));
  };

  if (!auth) return <Text>Страница недоступна</Text>;

  return (
    <Stack gap="1rem">
      <Text size="sm">Электронная почта: {auth.email}</Text>
      <Text size="sm">
        Роль: {auth.is_engineer ? "Инженер" : "Пользователь"}
      </Text>
      <Text size="sm">ID: {auth.ID}</Text>
      <Button onClick={handleLogout}>Выйти из аккаунта</Button>
    </Stack>
  );
};

export default Profile;
