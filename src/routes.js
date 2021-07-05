// core components
import Dashboard from "views/admin/Dashboard.js";
import Upload from "views/admin/Upload.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/upload",
    name: "Upload",
    component: Upload,
    layout: "/admin",
  },
];
export default routes;
