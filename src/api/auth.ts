import httpClient from "./httpClient";

export type User = {
  ID: number;
  email: string;
  is_engineer: boolean;
};

class AuthApi {
  register(email: string, password: string, is_engineer: boolean) {
    return httpClient.post<User>("/register/", {
      email,
      password,
      is_engineer,
    });
  }

  login(email: string, password: string) {
    return httpClient.post<User>("/login/", { email, password });
  }

  me() {
    return httpClient.get<User>("/me/");
  }

  logOut() {
    document.cookie = "";
    return httpClient.post("/logout/");
  }
}

const authApi = new AuthApi();
export default authApi;
