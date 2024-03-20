import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Avatar,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
  Switch,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import {
  HomeIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { platformSettingsData, conversationsData, trofeosData } from "@/data";
import useAOS from "@/hooks/useAOS";


export function Copas() {
  useAOS();
  return (
    <>
     
      <Card className="mx-3 mt-20 mb-6 lg:mx-4 border border-blue-gray-100">
        <CardBody className="p-4">
          <div className="mb-10 flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center gap-6">
              <Avatar
                src={`${import.meta.env.VITE_APP_ASSET_PATH}img/products/trofeos/avatar_trophy.webp`}
                alt="bruce-mars"
                size="xl"
                variant="rounded"
                className="rounded-lg shadow-lg shadow-blue-gray-500/40"
              />
              <div>
                <Typography variant="h5" color="blue-gray" className="mb-1">
                  Copas
                </Typography>
               
              </div>
            </div>

          </div>
         
          <div className="px-4 pb-4">
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Catalogo de Trofeos
            </Typography>
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500"
            >
              Comparte con el codigo
            </Typography>
            <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4 animate__animated animate__fadeIn" data-aos="fade-up">
              {trofeosData.map(
                ({ img, title, description, tag, route, id }, index) => (
                  <Card key={`${title}-${index}`} color="transparent" shadow={false} data-aos="fade-up">
                   {/* <CardHeader
  floated={false}
  color="gray"
  className="mx-0 mt-0 mb-4 h-64 xl:h-40 relative overflow-hidden"
>
  <img
    src={`${import.meta.env.VITE_APP_ASSET_PATH}${img}`}
    alt={title}
    className="w-full h-full object-contain"
  />
</CardHeader> */}


                    <CardHeader
                      floated={false}
                      color="gray"
                      className="mx-0 mt-0 mb-4 aspect-w-16 aspect-h-9"
                      // className="mx-0 mt-0 mb-4 h-64 xl:h-40"
                    >
                      <img
                        src={`${import.meta.env.VITE_APP_ASSET_PATH}${img}`}
                        alt={title}
                        className="h-full w-full object-cover"
                      />
                    </CardHeader>
                    <CardBody className="py-0 px-1">
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        {tag}
                      </Typography>
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="mt-1 mb-2"
                      >
                        {title}
                      </Typography>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        {description}
                      </Typography>
                    </CardBody>
                    <CardFooter className="mt-6 flex items-center justify-between py-0 px-1">
                      <Link to={`/dashboard/product/${id}`}>
                        <Button variant="outlined" size="sm">
                          Ver detalles...
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                )
              )}
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default Copas;
