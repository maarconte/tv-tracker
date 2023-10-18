import { Calendar } from "../screens/Calendar";
import Home from "../screens/Home";
import Login from "../screens/Login";
import { Profil } from "../screens/Profil";
import Show from "../screens/Show";

interface RouteType {
  path: string;
  component: any;
  name: string;
  protected: boolean;
}

const routes: RouteType[] = [
  {
    path: "",
    component: Home,
    name: "Home Screen",
    protected: true,
  },
  {
    path: "/login",
    component: Login,
    name: "Login Screen",
    protected: false,
  },
  {
    path: "/calendar",
    component: Calendar,
    name: "Calendar",
    protected: true,
  },
  {
    path: "/show/:id",
    component: Show,
    name: "Show",
    protected: true,
  },
  {
    path: "/profil/:id",
    component: Profil,
    name: "Profil",
    protected: true,
  },
];

export default routes;
