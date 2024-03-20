import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Avatar,
  Typography,
  Button,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";
import { medallasData } from "@/data";
import useAOS from '@/hooks/useAOS';



export function Medallas() {
  useAOS();

  return (
    <>
     
      <Card className="mx-3 mt-20 mb-6 lg:mx-4 border border-blue-gray-100">
        <CardBody className="p-4">
          <div className="mb-10 flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center gap-6">
              <Avatar
                src={`${import.meta.env.VITE_APP_ASSET_PATH}img/products/medallas/avatar_medalla.webp`}
                alt="avatar_trophyBall"
                size="xl"
                variant="rounded"
                className="rounded-lg shadow-lg shadow-blue-gray-500/40"
              />
              <div>
                <Typography variant="h5" color="blue-gray" className="mb-1">
                  Medallas
                </Typography>
               
              </div>
            </div>

          </div>
         
          <div className="px-4 pb-4" data-aos="fade-up">
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
              {medallasData.map(
                ({ img, title, description, tag, route, id, type }, index) => (
                  <Card key={`${title}-${index}`} color="transparent" shadow={false} data-aos="fade-up">
                    <CardHeader
                      floated={false}
                      color="gray"
                      className="mx-0 mt-0 mb-4 aspect-w-16 aspect-h-9"
                    >
                      <img
                        src={`${import.meta.env.VITE_APP_ASSET_PATH}${img}`}
                        alt={title}
                        className="h-full w-full object-cover"
                      />
                    </CardHeader>
                    <CardBody className="py-0 px-1">
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
                      <Link to={`/dashboard/product/${id}_${type}`}>
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

export default Medallas;
