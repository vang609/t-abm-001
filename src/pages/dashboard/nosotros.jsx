import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import {
  EllipsisVerticalIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
import { StatisticsCard } from "@/widgets/cards";
import { StatisticsChart } from "@/widgets/charts";
import {
  statisticsCardsData,
  statisticsChartsData,
  projectsTableData,
  ordersOverviewData,
} from "@/data";
import { CheckCircleIcon, ClockIcon } from "@heroicons/react/24/solid";
import { aboutData } from "@/data";

export function Nosotros() {
  return (
    <div className="mt-12">
      

      <div className="items-center flex flex-wrap mb-6">
        <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
        <img className="max-w-full rounded-lg shadow-lg" src={`${import.meta.env.VITE_APP_ASSET_PATH}img/about/tienda.jpg`} 
                  alt="tienda T-ABM"  />
      
      </div>
      <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
        <div className="md:pr-12">
          <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300 mt-8">
            <i className="fas fa-rocket text-xl"></i>
          </div>
          <h3 className="text-3xl font-semibold">Una empresa en crecimiento</h3>
          <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
            ABM TROFEOS: Somos una empresa Mexicana dedicada a la fabricación de trofeos deportivos.
          </p>
          <ul className="list-none mt-6">
            <li className="py-2">
              <div className="flex items-center">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i className="fas fa-fingerprint"></i></span>
                </div>
                <div>
                  <h4 className="text-blueGray-500">
                    Calidad
                  </h4>
                </div>
              </div>
            </li>
            <li className="py-2">
              <div className="flex items-center">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i className="fab fa-html5"></i></span>
                </div>
                <div>
                  <h4 className="text-blueGray-500">Prestigo</h4>
                </div>
              </div>
            </li>
            <li className="py-2">
              <div className="flex items-center">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i className="far fa-paper-plane"></i></span>
                </div>
                <div>
                  <h4 className="text-blueGray-500">Precios competitivos</h4>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      </div>


    
      {/* <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
        {aboutData.map(({title, description, colorTitle}) => (
          <Card className="border border-blue-gray-100 shadow-sm">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 p-6"
            >
              <Typography variant="h4" className={`mb-2 ${colorTitle}`} >
                {title}
              </Typography>
              
            </CardHeader>
            <CardBody className="pt-0">
              <Typography
                        as="span"
                        color="blue-gray"
                        className="font-bold text-justify text-lg"
                      >
                        {description}
                </Typography>
              
            </CardBody>
        </Card>
        ))}
      </div> */}

      {/* <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 flex items-center justify-between p-6"
          >
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-1">
                Projects
              </Typography>
              <Typography
                variant="small"
                className="flex items-center gap-1 font-normal text-blue-gray-600"
              >
                <CheckCircleIcon strokeWidth={3} className="h-4 w-4 text-blue-gray-200" />
                <strong>30 done</strong> this month
              </Typography>
            </div>
            <Menu placement="left-start">
              <MenuHandler>
                <IconButton size="sm" variant="text" color="blue-gray">
                  <EllipsisVerticalIcon
                    strokeWidth={3}
                    fill="currenColor"
                    className="h-6 w-6"
                  />
                </IconButton>
              </MenuHandler>
              <MenuList>
                <MenuItem>Action</MenuItem>
                <MenuItem>Another Action</MenuItem>
                <MenuItem>Something else here</MenuItem>
              </MenuList>
            </Menu>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["companies", "members", "budget", "completion"].map(
                    (el) => (
                      <th
                        key={el}
                        className="border-b border-blue-gray-50 py-3 px-6 text-left"
                      >
                        <Typography
                          variant="small"
                          className="text-[11px] font-medium uppercase text-blue-gray-400"
                        >
                          {el}
                        </Typography>
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {projectsTableData.map(
                  ({ img, name, members, budget, completion }, key) => {
                    const className = `py-3 px-5 ${
                      key === projectsTableData.length - 1
                        ? ""
                        : "border-b border-blue-gray-50"
                    }`;

                    return (
                      <tr key={name}>
                        <td className={className}>
                          <div className="flex items-center gap-4">
                            <Avatar src={img} alt={name} size="sm" />
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-bold"
                            >
                              {name}
                            </Typography>
                          </div>
                        </td>
                        <td className={className}>
                          {members.map(({ img, name }, key) => (
                            <Tooltip key={name} content={name}>
                              <Avatar
                                src={img}
                                alt={name}
                                size="xs"
                                variant="circular"
                                className={`cursor-pointer border-2 border-white ${
                                  key === 0 ? "" : "-ml-2.5"
                                }`}
                              />
                            </Tooltip>
                          ))}
                        </td>
                        <td className={className}>
                          <Typography
                            variant="small"
                            className="text-xs font-medium text-blue-gray-600"
                          >
                            {budget}
                          </Typography>
                        </td>
                        <td className={className}>
                          <div className="w-10/12">
                            <Typography
                              variant="small"
                              className="mb-1 block text-xs font-medium text-blue-gray-600"
                            >
                              {completion}%
                            </Typography>
                            <Progress
                              value={completion}
                              variant="gradient"
                              color={completion === 100 ? "green" : "blue"}
                              className="h-1"
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </CardBody>
        </Card>
        <Card className="border border-blue-gray-100 shadow-sm overflow-hidden flex justify-center items-center">
          <div className="relative w-full h-full">
            <img 
              src={`${import.meta.env.VITE_APP_ASSET_PATH}img/about/tienda.jpg`} 
              alt="tienda T-ABM" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
      </Card>

      </div> */}

{/* *** START....NEW COMPONENT  */}
<div className="container mx-auto">
  <div className="flex flex-wrap items-center">
    

    <div className="w-full md:w-6/12 px-4">
      <div className="flex flex-wrap">
        <div className="w-full md:w-6/12 px-4">
          <div className="relative flex flex-col mt-4">
            <div className="px-4 py-5 flex-auto">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                <i className="fas fa-sitemap"></i>
              </div>
              {/* <h6 className="text-xl mb-1 font-semibold">CSS Components</h6> */}
                <Typography variant="h4" className={`mb-2 text-blue-500`} >
                  HISTORIA
                </Typography>
              
              <p className="mb-4 text-blueGray-500">
                Es una empresa 100% mexicana dedicada a la fabricación de trofeos deportivos, medallas de diseño especial como de línea como toda clase de reconocimientos elaborados en vidrio, aluminio, grabados en computadora, placas fotograbadas a color, grabados laser, pines, copas, balones cincelados de latón siempre a la vanguardia e innovación.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col min-w-0">
            <div className="px-4 py-5 flex-auto">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                <i className="fas fa-drafting-compass"></i>
              </div>
              <Typography variant="h4" className={`mb-2 text-amber-500`} >
                  MISIÓN
                </Typography>
              <p className="mb-4 text-blueGray-500">
                Ser una empresa competitiva y líder en el ámbito de los Trofeos así como los accesorios para trofeos y en base a la constante innovación de nuestros productos, satisfaciendo las necesidades de nuestros clientes, siempre manteniendo nuestra calidad y buen precio apoyando a nuestros clientes con información oportuna y certera ya sea desde nuestra página web o tiendas que están al servicio los 365 días del año.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-6/12 px-4">
          <div className="relative flex flex-col min-w-0 mt-4">
            <div className="px-4 py-5 flex-auto">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                <i className="fas fa-newspaper"></i>
              </div>
              <Typography variant="h4" className={`mb-2 text-red-500`} >
                  VISIÓN
                </Typography>
              <p className="mb-4 text-blueGray-500">
                Ser una empresa competitiva y líder en el ámbito de los Trofeos así como los accesorios para trofeos y en base a la constante innovación de nuestros productos, satisfaciendo las necesidades de nuestros clientes, siempre manteniendo nuestra calidad y buen precio apoyando a nuestros clientes con información oportuna y certera ya sea desde nuestra página web o tiendas que están al servicio los 365 días del año.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col min-w-0">
            <div className="px-4 py-5 flex-auto">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                <i className="fas fa-file-alt"></i>
              </div>
              <Typography variant="h4" className={`mb-2 text-green-500`} >
                  AVISO DE PRIVACIDAD
                </Typography>
              <p className="mb-4 text-blueGray-500">
                Trofeos ABM maneja la información de clientes y potenciales con estricta confidencialidad, recabando datos personales y técnicos necesarios para sus servicios, directamente, a través de representantes, terceros con pedidos en su nombre, o proveedores de servicios. Esto incluye nombre, contacto, y datos técnicos, además de información de terceros relacionados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full md:w-6/12 px-4">
      {/* Ensure this div aligns with the left column */}
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg h-auto">
        <Card className="border border-blue-gray-100 shadow-sm overflow-hidden flex justify-center items-center">
          <div className="relative w-full">
            {/* Your image here */}
            <img src={`${import.meta.env.VITE_APP_ASSET_PATH}img/about/about.webp`} alt="tienda" className="w-full object-cover" style={{ height: '100%' }} />
          </div>
        </Card>
      </div>
    </div>
    
  </div>
</div>
{/* *** END ....NEW COMPONENT  */}


    </div>
  );
}

export default Nosotros;
