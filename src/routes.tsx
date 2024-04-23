import { createBrowserRouter } from "react-router-dom";
import ComplianceFormPage from "./pages/ComplianceFormPage";
import CheckStatusPage from "./pages/CheckStatusPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <ComplianceFormPage />,
  },
  {
    path: "/check",
    element: <CheckStatusPage />,
  },
]);

export default routes;
