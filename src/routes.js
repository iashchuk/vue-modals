import Home from "./pages/Home.vue";
import Modals from "./pages/Modals.vue";
import Auth from "./pages/Auth.vue";
import NotFound from "./pages/404.vue";
import SignIn from "./components/SignIn/SignIn.vue";
import SignUp from "./components/SignUp/SignUp.vue";

export default [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/modals",
    name: "modals",
    component: Modals
  },
  {
    path: "/auth",
    name: "auth",
    component: Auth,
    children: [
      { path: "signin", component: SignIn },
      { path: "signup", component: SignUp }
    ]
  },
  {
    path: "*",
    name: "not-found",
    component: NotFound
  }
];
