import { FC, createContext, useContext, useEffect, useState } from "react";
import authApi, { User } from "../api/auth";
import { Progress } from "@chakra-ui/react";

type AuthContext = [User | undefined, (newAuth: User | undefined) => void];
const authContext = createContext<AuthContext>([undefined, () => {}]);

type AuthContextProviderProps = {
  children: React.ReactNode;
};

export const AuthContextProvider: FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [auth, setAuth] = useState<User>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    authApi
      .me()
      .then((res) => setAuth(res.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <authContext.Provider value={[auth, setAuth]}>
      {loading ? <Progress isIndeterminate size="xs" /> : children}
    </authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);
