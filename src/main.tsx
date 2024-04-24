import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "./utils/toasts";
import routes from "./routes";
import { AuthContextProvider } from "./context/authContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider>
    <AuthContextProvider>
      <RouterProvider router={routes} />
    </AuthContextProvider>
    <ToastContainer />
  </ChakraProvider>
);
