import { FC, ReactNode, useEffect } from "react";
import { useAuth } from "../context/authContext";
import { toast } from "../utils/toasts";
import { Navigate } from "react-router-dom";

type ProtectedProps = {
  children: ReactNode;
};

const Protected: FC<ProtectedProps> = ({ children }) => {
  const [auth] = useAuth();

  useEffect(() => {
    if (!auth) toast({ title: "Вход не выполнен", status: "error" });
  }, [auth]);

  if (auth) return children;

  return <Navigate to="/auth" />;
};

export default Protected;
