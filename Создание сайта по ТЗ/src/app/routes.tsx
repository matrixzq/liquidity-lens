import { createBrowserRouter, Navigate } from "react-router";
import { Layout } from "./components/Layout";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { Accounts } from "./pages/Accounts";
import { Forecast } from "./pages/Forecast";
import { Alerts } from "./pages/Alerts";
import { Optimize } from "./pages/Optimize";
import { CalendarPage } from "./pages/Calendar";
import { Integrations } from "./pages/Integrations";
import { Reports } from "./pages/Reports";
import { Settings } from "./pages/Settings";
import { Admin } from "./pages/Admin";

export const router = createBrowserRouter([
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: "accounts", Component: Accounts },
      { path: "forecast", Component: Forecast },
      { path: "alerts", Component: Alerts },
      { path: "optimize", Component: Optimize },
      { path: "calendar", Component: CalendarPage },
      { path: "integrations", Component: Integrations },
      { path: "reports", Component: Reports },
      { path: "settings", Component: Settings },
      { path: "admin", Component: Admin },
      { path: "*", Component: () => <Navigate to="/" replace /> },
    ],
  },
]);
