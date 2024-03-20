import {
  Card,
  CardBody,
  CardHeader,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import Slider from 'react-slick';
import { ProfileInfoCard } from "@/widgets/cards";
import { projectsData, carouselData, inicioProfileData } from "@/data";
import { Carousel } from "@/widgets/carousel/Carousel";

export function Inicio() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <>

      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/banner/banner01.webp')] bg-cover bg-bottom">
    <div className="absolute inset-0 h-full w-full " />
</div>

      <Card className="mx-3 -mt-16 mb-6 lg:mx-4 border border-blue-gray-100">
        <CardBody className="p-4">
          <div className="mb-10 flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center gap-6" >
              <Avatar
                src={`${import.meta.env.VITE_APP_ASSET_PATH}img/logo/trofeosABM.png`}
                alt="adrian-ceo"
                size="xl"
                variant="rounded"
                className="rounded-lg shadow-lg shadow-blue-gray-500/40"
              />

              <div>
                <Typography variant="h5" color="blue-gray" className="mb-1">
                  Trofeos ABM
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal text-blue-gray-600"
                >
                  Premiando a los campeones desde 1998.
                </Typography>
              </div>
            </div>
             <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <p className="mt-2 text-4xl font-bold tracking-tight text-blue-500 sm:text-5xl">Comprometidos con la calidad a buen precio.</p>
            </div> 
          </div>

          <div className="gird-cols-1 mb-12 grid gap-12 px-4 lg:grid-cols-2 xl:grid-cols-3">
            {/* Column for ProfileInfoCards */}
            <div className="flex flex-col">
              { inicioProfileData.map(
                ({caption, subCaption}) => (
                   <ProfileInfoCard
                title={caption}
                description={subCaption}
              />
                )
              )}
            </div>


            <div className="mb-12 px-4">
                <Typography variant="h5" color="blue-gray" className="mb-4">
                  Productos Exclusivos
                </Typography>
                <Carousel images={carouselData} />
            </div>
          </div>

          {/* <div className="gird-cols-1 mb-12 grid gap-12 px-4 lg:grid-cols-2 xl:grid-cols-3">
              <ProfileInfoCard
                title="+ DE 3000 DISEÑOS"
                description="Contamos con diversos modelos en latón, zamack, aluminio, cristal para cualquier tipo de evento deportivo y cultural."
              />
              <div className="mb-12 px-4">
                <Typography variant="h5" color="blue-gray" className="mb-4">
                  Productos Exclusivos
                </Typography>
                <Carousel images={carouselData} />
            </div>

          </div> */}
          <div className="px-4 pb-4">
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Recomendaciones
            </Typography>
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500"
            >
              La mejor calidad en todas nuestras piezas
            </Typography>
            <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
              {projectsData.map(
                ({ img, title, description, tag, route, members }) => (
                  <Card key={title} color="transparent" shadow={false}>
                    <CardHeader
                      floated={false}
                      color="gray"
                      className="mx-0 mt-0 mb-4 h-64 xl:h-40"
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

export default Inicio;
