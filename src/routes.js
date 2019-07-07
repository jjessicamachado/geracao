import Dashboard from "views/Dashboard.jsx";
import Calls from "views/Calls.jsx";
import Single from "views/Single.jsx";
import Login from "views/Login.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/calls",
    name: "Chamadas",
    icon: "pe-7s-user",
    component: Calls,
    layout: "/admin"
  },
  {
    path: "/history",
    name: "Histórico",
    icon: "pe-7s-user",
    component: Single,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    icon: "pe-7s-user",
    component: Login,
    layout: "/admin"
  }
];

export default dashboardRoutes;
