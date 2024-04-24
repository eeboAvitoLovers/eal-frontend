import { FC } from "react";
import CardPageLayout from "../components/CardPageLayout";
import AuthForm from "../components/AuthForm";
import { useAuth } from "../context/authContext";
import FullPageLayout from "../components/FullPageLayout";
import Profile from "../components/Profile";

const AuthPage: FC = () => {
  const [auth] = useAuth();

  return auth ? (
    <FullPageLayout title="Профиль">
      <Profile />
    </FullPageLayout>
  ) : (
    <CardPageLayout title="Аутентификация">
      <AuthForm />
    </CardPageLayout>
  );
};

export default AuthPage;
