import httpClient from "./httpClient";

export const register = (
  email: string,
  password: string,
  isEngineer: boolean
) => httpClient.post("/register", { email, password, isEngineer });

export const login = (email: string, password: string) =>
  httpClient.post("/login", { email, password });

export const logout = () => httpClient.post("/logout");

export const me = () => httpClient.get("/me");
