import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";
import { IoIosFootball } from "react-icons/io";
import { GiTrophyCup, GiLaurelsTrophy, GiDiamondTrophy } from "react-icons/gi";
import { LiaTrophySolid } from "react-icons/lia";
import { FcContacts, FcHome, FcAbout, FcGlobe } from "react-icons/fc";

import { Contacto, Inicio, Nosotros, Ubicacion } from "@/pages/dashboard";
import { PiMedalLight } from "react-icons/pi";
import { Balones, Copas, Medallas,Reconocimientos, TerminacionMate, Trofeos } from "@/pages/products";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <FcHome {...icon} />,
        name: "inicio",
        path: "/inicio",
        element: <Inicio />,
      },
      {
        icon: <FcContacts {...icon} />,
        name: "contacto",
        path: "/contacto",
        element: <Contacto />,
      },
      {
        icon: <FcAbout {...icon} />,
        name: "nosotros",
        path: "/nosotros",
        element: <Nosotros />,
      },
      {
        icon: <FcGlobe {...icon} />,
        name: "Ubicación",
        path: "/Ubicacion",
        element: <Ubicacion />,
      },
    ],
  },
  {
    title: "Productos",
    layout: "dashboard",
    // layout: "auth",
    pages: [
      {
        icon: <GiTrophyCup color="#D4AF37" size="54px" {...icon} />,
        name: "trofeos",
        path: "/trofeos",
        element: <Trofeos />,
      },
      {
        icon: <GiLaurelsTrophy color="#CC9933" {...icon} />,
        name: "copas",
        path: "/copas",
        element: <Copas />,
        isDisabled: false
      },
      {
        icon: <IoIosFootball color="#0099FF" {...icon} />,
        name: "balones",
        path: "/balones",
        element: <Balones />,
        isDisabled: false
      },
      // {
      //   icon: <LiaTrophySolid color="#CC9933" {...icon} />,
      //   name: "terminacion mate",
      //   path: "/TerminacionMate",
      //   element: <TerminacionMate />,
      //   isDisabled: false
      // },
      {
        icon: <GiDiamondTrophy color="#009999" {...icon} />,
        name: "Reconocimientos",
        path: "/Reconocimientos",
        element: <Reconocimientos />,
        isDisabled: false
      },
      {
        icon: <PiMedalLight color="#DB1F48" {...icon} />,
        name: "medallas",
        path: "/medallas",
        element: <Medallas />,
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
