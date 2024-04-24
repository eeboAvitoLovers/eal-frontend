import { Button, Stack, Text } from "@chakra-ui/react";
import { useAuth } from "../context/authContext";
import { logout } from "../api/auth";

const Profile = () => {
  const [auth, setAuth] = useAuth();

  const handleLogout = () => {
    logout().then(() => setAuth(null));
  };

  if (!auth) return null;
  console.log(auth);

  return (
    <Stack gap="1rem">
      <Text size="sm">Электронная почта: {auth.email}</Text>
      <Text size="sm">
        Роль: {auth.isEngineer ? "Инженер" : "Пользователь"}
      </Text>
      <Text size="sm">ID: {auth.id}</Text>
      <Button onClick={handleLogout}>Выйти из аккаунта</Button>
    </Stack>
  );
};

export default Profile;
