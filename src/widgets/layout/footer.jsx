import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";
import { HeartIcon } from "@heroicons/react/24/solid";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa6";

export function Footer({ brandName, brandLink, routes }) {
  const year = new Date().getFullYear();
  const message = 'Necesito un cotizacion'

  return (
<footer className="py-2">
  <div className="flex w-full flex-wrap items-center justify-center gap-6 px-2 md:justify-between">
    <div className="flex items-center font-normal text-inherit mr-1">
      &copy; {new Date().getFullYear()}, by T-ABM{" "}
      <HeartIcon className="h-3.5 w-3.5 text-red-600 mr-5" /> {/* Added marginRight for spacing */}
      <a href={`https://wa.me/+525533483104?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer" className="flex items-center mr-2"> {/* Added marginRight for spacing */}
        <FaWhatsapp color="#128c7e" className="mr-1"/> 55 33 48 31 04 {/* Added marginRight to the icon */}
      </a>
      <a href="mailto:abm_trofeos@live.com.mx" target="_blank" rel="noopener noreferrer" className="flex items-center"> {/* Corrected protocol for email */}
        {/* <FaEnvelope color="#525252" className="mr-1 ml-2"/> abm_trofeos@live.com.mx  */}
      </a>
    </div>
  </div>
</footer>

  );
}

// Footer.defaultProps = {
//   brandName: "Creative Tim",
//   brandLink: "https://www.creative-tim.com",
//   routes: [
//     { name: "Creative Tim", path: "https://www.creative-tim.com" },
//     { name: "About Us", path: "https://www.creative-tim.com/presentation" },
//     { name: "Blog", path: "https://www.creative-tim.com/blog" },
//     { name: "License", path: "https://www.creative-tim.com/license" },
//   ],
// };

// Footer.propTypes = {
//   brandName: PropTypes.string,
//   brandLink: PropTypes.string,
//   routes: PropTypes.arrayOf(PropTypes.object),
// };

// Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
