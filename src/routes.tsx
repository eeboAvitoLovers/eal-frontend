import { createBrowserRouter } from "react-router-dom";
import ComplianceFormPage from "./pages/ComplianceFormPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <ComplianceFormPage />,
  },
]);

export default routes;
