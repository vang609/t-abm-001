import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";
import { Home, Contacto, Profile, Tables, Notifications, Inicio, Nosotros } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import { Trofeos } from "@/pages/products";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "inicio",
        path: "/inicio",
        element: <Inicio />,
      },
      {
        icon: <HomeIcon {...icon} />,
        name: "contacto",
        path: "/contacto",
        element: <Contacto />,
      },
      {
        icon: <HomeIcon {...icon} />,
        name: "nosotros",
        path: "/nosotros",
        element: <Nosotros />,
      },
      
      // {
      //   icon: <HomeIcon {...icon} />,
      //   name: "dashboard",
      //   path: "/home",
      //   element: <Home />,
      // },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "tables",
        path: "/tables",
        element: <Tables />,
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "notifications",
        path: "/notifications",
        element: <Notifications />,
      },
    ],
  },
  {
    title: "Productos",
    layout: "dashboard",
    // layout: "auth",
    pages: [
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "trofeos",
        path: "/trofeos",
        element: <Trofeos />,
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "copas",
        path: "/notifications",
        element: <Notifications />,
        isDisabled: false
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "balones",
        path: "/notifications",
        element: <Notifications />,
        isDisabled: false
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "terminacion mate",
        path: "/notifications",
        element: <Notifications />,
        isDisabled: false
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "reconocimiento cristal",
        path: "/notifications",
        element: <Notifications />,
        isDisabled: false
      },
      // {
      //   icon: <ServerStackIcon {...icon} />,
      //   name: "producto",
      //   path: "/producto/:id",
      //   element: <Product />,
      //   isDisabled: true
      // },
      // {
      //   icon: <ServerStackIcon {...icon} />,
      //   name: "sign in",
      //   path: "/sign-in",
      //   element: <SignIn />,
      // },
      // {
      //   icon: <RectangleStackIcon {...icon} />,
      //   name: "sign up",
      //   path: "/sign-up",
      //   element: <SignUp />,
      // },
    ],
  },
];

export default routes;
