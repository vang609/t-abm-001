import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function Nosotros() {
  return (
    <>
      <section className="m-8 flex">
        <div className="w-2/5 h-full hidden lg:block">
          <img
            src={`${import.meta.env.VITE_APP_ASSET_PATH}img/contact/contact.webp`}
            className="h-full w-full object-cover rounded-3xl"
          />
        </div>
        {/* Adjustments for positioning start here */}
        <div className="w-full lg:w-3/5 flex flex-col items-center justify-center mt-6 lg:mt-0 lg:ml-4"> {/* Added margin-top for all screens, and margin-left for lg screens */}
          <div className="text-center">
            <Typography variant="h2" className="font-bold mb-4">¿Tienes alguna pregunta? Escríbenos</Typography>
            <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">CONTACTO.</Typography>
          </div>
          <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                Nombre completo
              </Typography>
              <Input
                size="lg"
                placeholder="Nombre completo"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                Correo electrónico
              </Typography>
              <Input
                size="lg"
                placeholder="nombre@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                Teléfono
              </Typography>
              <Input
                size="lg"
                placeholder="Teléfono"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
           
            <Button className="mt-6" fullWidth>
              Enviar
            </Button>

            
            <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4">
              Already have an account?
              <Link to="/auth/sign-in" className="text-gray-900 ml-1">Sign in</Link>
            </Typography>
          </form>

        </div>
      </section>
    </>
  );
}

export default Nosotros;
