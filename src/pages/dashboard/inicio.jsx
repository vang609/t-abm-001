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
import { ProfileInfoCard, MessageCard } from "@/widgets/cards";
import { platformSettingsData, conversationsData, projectsData } from "@/data";

export function Inicio() {
  return (
    <>
      {/* <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/banner/banner01.webp')] bg-cover	bg-center">
        <div className="absolute inset-0 h-full w-full " />
      </div> */}

      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/banner/banner01.webp')] bg-cover bg-bottom">
    <div className="absolute inset-0 h-full w-full " />
</div>

{/* <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/banner/banner01.webp')] bg-bottom"
     style={{backgroundSize: '90%', backgroundRepeat: 'no-repeat'}}>
    <div className="absolute inset-0 h-full w-full " />
</div> */}

     {/* <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-bottom" 
     style={{ backgroundImage: "url('/img/banner/banner01.webp')", backgroundSize: 'auto 100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
    <div className="absolute inset-0 h-full w-full" />
</div> */}




      <Card className="mx-3 -mt-16 mb-6 lg:mx-4 border border-blue-gray-100">
        <CardBody className="p-4">
          <div className="mb-10 flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center gap-6" >
              <Avatar
                src={`${import.meta.env.VITE_APP_ASSET_PATH}img/avatar/adrian.jpeg`}
                alt="adrian-ceo"
                size="xl"
                variant="rounded"
                className="rounded-lg shadow-lg shadow-blue-gray-500/40"
              />

              <div>
                <Typography variant="h5" color="blue-gray" className="mb-1">
                  Adrian Banda
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal text-blue-gray-600"
                >
                  CEO / Fundador
                </Typography>
              </div>
            </div>
             <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <p class="mt-2 text-4xl font-bold tracking-tight text-blue-500 sm:text-5xl">Ofrecemos servicios premium a precios justos.</p>
            </div> 
            {/* <div className="w-96">
              <Tabs value="app">
                <TabsHeader>
                  <Tab value="app">
                    <HomeIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                    App
                  </Tab>
                  <Tab value="message">
                    <ChatBubbleLeftEllipsisIcon className="-mt-0.5 mr-2 inline-block h-5 w-5" />
                    Message
                  </Tab>
                  <Tab value="settings">
                    <Cog6ToothIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                    Settings
                  </Tab>
                </TabsHeader>
              </Tabs>
            </div> */}
          </div>
          
           {/* <div class="bg-white py-24 sm:py-32"> */}
            {/* <div class="mx-auto max-w-7xl px-6 lg:px-8">
              <div class="mx-auto max-w-4xl text-center">
                <h2 class="text-base font-semibold leading-7 text-teal-600">Pricing</h2>
                <p class="mt-2 text-4xl font-bold tracking-tight text-blue-500 sm:text-5xl">Pricing plans for teams of all sizes</p>
              </div> 
            </div>  */}
          {/* </div>   */}


          <div className="gird-cols-1 mb-12 grid gap-12 px-4 lg:grid-cols-2 xl:grid-cols-3">
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-3">
                Platform Settings
              </Typography>
              <div className="flex flex-col gap-12">
                {platformSettingsData.map(({ title, options }) => (
                  <div key={title}>
                    <Typography className="mb-4 block text-xs font-semibold uppercase text-blue-gray-500">
                      {title}
                    </Typography>
                    <div className="flex flex-col gap-6">
                      {options.map(({ checked, label }) => (
                        <Switch
                          key={label}
                          id={label}
                          label={label}
                          defaultChecked={checked}
                          labelProps={{
                            className: "text-sm font-normal text-blue-gray-500",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <ProfileInfoCard
              title="Profile Information"
              description="Hi, I'm Alec Thompson, Decisions: If you can't decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
              details={{
                "first name": "Alec M. Thompson",
                mobile: "(44) 123 1234 123",
                email: "alecthompson@mail.com",
                location: "USA",
                social: (
                  <div className="flex items-center gap-4">
                    <i className="fa-brands fa-facebook text-blue-700" />
                    <i className="fa-brands fa-twitter text-blue-400" />
                    <i className="fa-brands fa-instagram text-purple-500" />
                  </div>
                ),
              }}
              action={
                <Tooltip content="Edit Profile">
                  <PencilIcon className="h-4 w-4 cursor-pointer text-blue-gray-500" />
                </Tooltip>
              }
            />
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-3">
                Platform Settings
              </Typography>
              <ul className="flex flex-col gap-6">
                {conversationsData.map((props) => (
                  <MessageCard
                    key={props.name}
                    {...props}
                    action={
                      <Button variant="text" size="sm">
                        reply
                      </Button>
                    }
                  />
                ))}
              </ul>
            </div>
          </div>
          <div className="px-4 pb-4">
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Más vendidos 
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
                    {/* <CardFooter className="mt-6 flex items-center justify-between py-0 px-1">
                      <Link to={route}>
                        <Button variant="outlined" size="sm">
                          view project
                        </Button>
                      </Link>
                      <div>
                        {members.map(({ img, name }, key) => (
                          <Tooltip key={name} content={name}>
                            <Avatar
                              src={`${import.meta.env.VITE_APP_ASSET_PATH}${img}`}
                              alt={name}
                              size="xs"
                              variant="circular"
                              className={`cursor-pointer border-2 border-white ${
                                key === 0 ? "" : "-ml-2.5"
                              }`}
                            />
                          </Tooltip>
                        ))}
                      </div>
                    </CardFooter> */}
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
