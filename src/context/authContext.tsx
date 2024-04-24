import { FC, createContext, useContext, useEffect, useState } from "react";
import { me } from "../api/auth";
import { Progress } from "@chakra-ui/react";

type AuthContext = [any, (newAuth: any) => void];
const authContext = createContext<AuthContext>([null, (newAuth: any) => {}]);

type AuthContextProviderProps = {
  children: React.ReactNode;
};

export const AuthContextProvider: FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [auth, setAuth] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    me()
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
