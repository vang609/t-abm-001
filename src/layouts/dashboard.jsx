import { useEffect, useRef } from 'react';
import { setOpenSidenav } from "@/context";
import { Routes, Route } from "react-router-dom";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { IconButton } from "@material-tailwind/react";
import {
  Sidenav,
  DashboardNavbar,
  Configurator,
  Footer,
} from "@/widgets/layout";
import routes from "@/routes";
import { useMaterialTailwindController, setOpenConfigurator } from "@/context";
import { ProductDetail } from "@/pages/products";

export function Dashboard() {
  const sidenavRef = useRef();
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType } = controller;

  useEffect(() => {
  function handleClickOutside(event) {
    const isMobileView = window.innerWidth < 768; // Example breakpoint for mobile view
    if (isMobileView && sidenavRef.current && !sidenavRef.current.contains(event.target) && controller.openSidenav) {
      setOpenSidenav(dispatch, false);
    }
  }

  document.addEventListener('mousedown', handleClickOutside);
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, [controller.openSidenav, dispatch]);


  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      <Sidenav
        ref={sidenavRef}
        routes={routes}
        brandImg={`${import.meta.env.VITE_APP_ASSET_PATH}img/logo/trofeosABM.png`}
      />
      <div className="p-4 xl:ml-80">
        <DashboardNavbar />
        <Configurator />
        <IconButton
          size="lg"
          color="white"
          className="fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900/10"
          ripple={false}
          onClick={() => setOpenConfigurator(dispatch, true)}
        >
          <Cog6ToothIcon className="h-5 w-5" />
        </IconButton>
        <Routes>
          {routes.map(
            ({ layout, pages }) =>
              layout === "dashboard" &&
              pages.map(({ path, element, isDisabled }) => (
               <Route exact path={path} element={element} />
              ))
          )}
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <div className="text-blue-gray-600">
          <Footer />
        </div>
      </div>
    </div>
  );
}

Dashboard.displayName = "/src/layout/dashboard.jsx";

export default Dashboard;
