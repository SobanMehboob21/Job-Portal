
import Login from "../components/Login";
import Signup from "../components/Signup";
import UserDashBoard from "../Pages/User/UserDashBoard";
import { UserHome } from "../Pages/User/UserHome";
import { RouteName } from "./RouteName";

export const RouteList = [
  {
    path: RouteName.Home,
    element: UserHome,
  },
  {
    path: RouteName.Signup,
    element: Signup,
  },
  {
    path: RouteName.Login,
    element: Login,
  },
  {
    path: RouteName.UserDashBoard,
    element: UserDashBoard,
  },
];
