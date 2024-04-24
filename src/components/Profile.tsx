import { Button, Heading, Text } from "@chakra-ui/react";
import { useAuth } from "../context/authContext";
import { logout } from "../api/auth";

const Profile = () => {
  const [auth, setAuth] = useAuth();

  const handleLogout = () => {
    logout().then(() => setAuth(null));
  };

  if (!auth) return null;

  return (
    <>
      <Heading size="md">{auth.email}</Heading>
      <Text size="sm">{auth.isEngineer ? "Engineer" : "User"}</Text>
      <Text size="sm">ID: {auth.id}</Text>
      <Button onClick={handleLogout}>Logout</Button>
    </>
  );
};

export default Profile;
