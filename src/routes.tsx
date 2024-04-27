import { createBrowserRouter } from "react-router-dom";
import CreateTicketPage from "./pages/CreateTicketPage";
import CheckTicketStatusPage from "./pages/CheckTicketStatusPage";
import AuthPage from "./pages/AuthPage";
import Protected from "./components/Protected";
import TicketsPage from "./pages/TicketsPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <CreateTicketPage />
      </Protected>
    ),
  },
  {
    path: "/tickets",
    element: (
      <Protected>
        <TicketsPage />
      </Protected>
    ),
  },
  {
    path: "/check",
    element: <CheckTicketStatusPage />,
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
]);

export default routes;
