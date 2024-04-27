import { FC } from "react";
import CardPageLayout from "../components/CardPageLayout";
import AuthForm from "../components/AuthForm";
import { useAuth } from "../context/authContext";
import Profile from "../components/Profile";

const AuthPage: FC = () => {
  const [auth] = useAuth();

  return (
    <CardPageLayout title={auth ? "Профиль" : "Авторизация"}>
      {auth ? <Profile /> : <AuthForm />}
    </CardPageLayout>
  );
};

export default AuthPage;
