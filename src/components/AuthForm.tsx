import { FC, FormEvent, MouseEvent, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "../utils/toasts";
import { login, register } from "../api/auth";
import { Box, Button, Checkbox, Input, Link } from "@chakra-ui/react";
import { useAuth } from "../context/authContext";

const AuthForm: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEngineer, setIsEngineer] = useState(false);

  const [urlSearchParams, setUrlSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const authType = urlSearchParams.get("authType") || "login";

  const changeAuthType = (e: MouseEvent) => {
    e.preventDefault();
    setUrlSearchParams({
      authType: authType === "login" ? "register" : "login",
    });
  };

  const [, setAuth] = useAuth();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const promise =
      authType === "login"
        ? login(email, password)
        : register(email, password, isEngineer);

    promise
      .then((response) => {
        setAuth(response.data);
        toast({
          title: "Успешно!",
          description: "Вы вошли в систему",
          status: "success",
        });
        navigate("/");
      })
      .catch((e: Error) => {
        toast({
          title: "Ошибка!",
          description: e.message,
          status: "error",
        });
      });
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={4}
      as="form"
      onSubmit={handleSubmit}
    >
      <Input
        type="email"
        autoComplete="email"
        placeholder="Электронная почта"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        type="password"
        autoComplete="current-password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {authType === "register" && (
        <Checkbox
          defaultChecked={isEngineer}
          onChange={(e) => setIsEngineer(e.target.checked)}
        >
          Я инженер службы поддержки
        </Checkbox>
      )}
      <Button colorScheme="blue" type="submit">
        {authType === "login" ? "Войти" : "Зарегистрироваться"}
      </Button>
      <Link onClick={changeAuthType}>
        {authType === "login"
          ? "У меня ещё нет аккаунта"
          : "У меня уже есть аккаунт"}
      </Link>
    </Box>
  );
};

export default AuthForm;
