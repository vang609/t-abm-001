import React, { forwardRef } from 'react';
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { IoCloseCircle } from "react-icons/io5";
import { Button, IconButton, Typography } from "@material-tailwind/react";
import { useMaterialTailwindController, setOpenSidenav } from "@/context";

export const Sidenav = forwardRef(({ brandImg, routes }, ref) => {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavColor, sidenavType, openSidenav } = controller;
  const sidenavTypes = {
    dark: "bg-gradient-to-br from-gray-800 to-gray-900",
    white: "bg-white shadow-sm",
    transparent: "bg-transparent",
  };

  return (
    <aside
      ref={ref}
      className={`${
        sidenavTypes[sidenavType]
      } ${openSidenav ? "translate-x-0" : "-translate-x-80"} fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 border border-blue-gray-100 overflow-hidden flex flex-col`}
    >
      <div className="relative py-6 px-8 text-center">
        <Link to="/">
          <Typography variant="h6" color={sidenavType === "dark" ? "white" : "blue-gray"}>
            Premiando al esfuerzo!
          </Typography>
          <img src={brandImg} alt="Brand" className="mx-auto mt-4" style={{ maxWidth: "70%", height: "auto" }} />
        </Link>
        <IconButton
          variant="text"
          color="red"
          size="sm"
          ripple={false}
          className="absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
          onClick={() => setOpenSidenav(dispatch, false)}
        >
          <IoCloseCircle className="h-6 w-6" />
        </IconButton>
      </div>
      <div className="flex-grow overflow-auto">
        <div className="px-2"> {/* Adjust this padding as needed */}
          {routes.map(({ layout, title, pages }, key) => (
            <ul key={key} className="mb-4 flex flex-col gap-1">
              {title && (
                <li className="mt-4 mb-2 px-2"> {/* Adjusted padding here */}
                  <Typography variant="small" color={sidenavType === "dark" ? "white" : "blue-gray"} className="font-black uppercase opacity-75">
                    {title}
                  </Typography>
                </li>
              )}
              {pages.map(({ icon, name, path }) => (
                <li key={name} className="px-2"> {/* Adjusted padding here */}
                  <NavLink to={`/${layout}${path}`}>
                    {({ isActive }) => (
                      <Button
                        variant={isActive ? "gradient" : "text"}
                        color={isActive ? sidenavColor : sidenavType === "dark" ? "white" : "blue-gray"}
                        className="flex items-center gap-4 capitalize w-full justify-start" // Removed px-4 to adjust padding
                      >
                          {icon}
                        <Typography color="inherit" size="inherit" className="font-medium capitalize">
                          {name}
                        </Typography>
                      </Button>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </aside>
  );
});

// Sidenav.defaultProps = {
//   brandImg: "/img/logo-ct.png",
//   brandName: "Premiando al esfuerzo!",
// };

// Sidenav.propTypes = {
//   brandImg: PropTypes.string,
//   brandName: PropTypes.string,
//   routes: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

// Sidenav.displayName = "/src/widgets/layout/sidnave.jsx";

// export default Sidenav;

