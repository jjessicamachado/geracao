import Calls from "views/op/Calls.jsx";
import Log from "views/op/Log.jsx";
import Single from "views/op/Single.jsx";


const dashboardRoutes = [
  {
    path: "/calls",
    name: "Chamadas",
    icon: "pe-7s-headphones",
    component: Calls,
    layout: "/op"
  },
  {
    path: "/history",
    name: "Histórico",
    icon: "pe-7s-clock",
    component: Log,
    layout: "/op"
  },
  {
    path: "/scall",
    name: "SingleCall",
    icon: "pe-7s-clock",
    component: Single,
    layout: "/op"
  }
];

export default dashboardRoutes;
