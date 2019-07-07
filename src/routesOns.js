import Dashboard from "views/ons/Dashboard.jsx";
import Calls from "views/ons/Calls.jsx";
import Single from "views/ons/Single.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/ons"
  },
  {
    path: "/calls",
    name: "Chamadas",
    icon: "pe-7s-user",
    component: Calls,
    layout: "/ons"
  },
  {
    path: "/history",
    name: "Histórico",
    icon: "pe-7s-user",
    component: Single,
    layout: "/ons"
  }
];

export default dashboardRoutes;
