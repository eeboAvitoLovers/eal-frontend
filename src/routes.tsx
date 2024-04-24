import { createBrowserRouter } from "react-router-dom";
import ComplianceFormPage from "./pages/ComplianceFormPage";
import CheckStatusPage from "./pages/CheckStatusPage";
import AuthPage from "./pages/AuthPage";
import Protected from "./components/Protected";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <ComplianceFormPage />
      </Protected>
    ),
  },
  {
    path: "/check",
    element: <CheckStatusPage />,
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
]);

export default routes;
