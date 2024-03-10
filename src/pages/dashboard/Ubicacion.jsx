import { FcMultipleDevices, FcShop, FcAlarmClock } from "react-icons/fc";
const icon = {
  className: "w-5 h-5 text-inherit",
};
export function Ubicacion() {
  return (
    <>

<section className="bg-gray-100">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Visita nuestra tienda</h2>
            <p className="mt-4 text-lg text-gray-500">Somos una empresa Mexicana dedicada a la fabricación de trofeos deportivos..</p>
        </div>
        <div className="mt-16 lg:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="col-span-1 md:col-span-2 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.5293319729644!2d-98.90963318751719!3d19.432731881770916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e1461db3f0c7%3A0xf81d3c9b4d8cbd48!2sTrofeos%20Abm!5e0!3m2!1ses-419!2sus!4v1710049071632!5m2!1ses-419!2sus"
                    width="1100"
                    height="650"
                    style={{ border: 0 }}
                    allowFullScreen="" 
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"> 
                  </iframe>
                </div>
                <div>
                    <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                        <div className="px-6 py-4">
                          <div className="flex items-center space-x-2"> {/* Use flex container */}
                            <FcShop className="text-xl" {...icon} /> {/* Adjust the size as needed */}
                            <h3 className="text-lg font-medium text-gray-900">Dirección</h3>
                          </div>
                          <p className="mt-1 text-gray-600">Av Filiberto Gomez 4, Santiago Cuautlalpan, 56250 Texcoco de Mora, Méx., México</p>
                        </div>
                        <div className="border-t border-gray-200 px-6 py-4">
                          <div className="flex items-center space-x-2">
                            <FcAlarmClock className="text-xl" />
                            <h3 className="text-lg font-medium text-gray-900">Horarioss</h3>
                          </div>
                          <p className="mt-2 text-gray-600">Lunes - Domingo: 9am - 5pm</p>
                        </div>
                        <div className="border-t border-gray-200 px-6 py-4">
                          <div className="flex items-center space-x-2 mb-2"> {/* Add margin-bottom to create space between this line and the paragraphs */}
                            <FcMultipleDevices className="text-xl" />
                            <h3 className="text-lg font-medium text-gray-900">Escríbenos</h3>
                          </div>
                          <p className="text-gray-600">Email: info@example.com</p>
                          <p className="text-gray-600">Phone: +52 59 5921 0879</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </>
  );
}

export default Ubicacion;
