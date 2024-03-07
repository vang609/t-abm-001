// import {
//   Card,
//   CardHeader,
//   CardBody,
//   Typography,
//   Avatar,
//   Chip,
//   Tooltip,
//   Progress,
// } from "@material-tailwind/react";
// import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
// import { authorsTableData, projectsTableData } from "@/data";
import { Link } from "react-router-dom";
import { HiArrowCircleLeft } from "react-icons/hi";
import { ProfileInfoCard } from "@/widgets/cards";

export function ProductDetail() {
  return (
    <div className="flex justify-center mt-12 mb-8">
      <div className="flex max-w-4xl flex-col md:flex-row rounded-xl bg-white shadow-md">
        {/* Adjust the width here for the image to be 2/3 on medium screens */}
        <div className="md:w-2/3 overflow-hidden rounded-t-xl md:rounded-tr-none md:rounded-l-xl bg-white">
          <img
            src={`${import.meta.env.VITE_APP_ASSET_PATH}img/products/trofeos/ABM_C10.jpg`}
            alt="Trofeos"
            className="h-full w-full object-cover"
          />
        </div>
        {/* Adjust the content to take up the remaining 1/3 on medium screens */}
        <div className="md:w-1/3 p-6">
          <h6 className="mb-4 text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500">
            Trofeo Soccer 
          </h6>
          <h4 className="mb-2 text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900">
            Premisacion 1ro y 2do lugar
          </h4>
          <p className="mb-8 text-base font-normal leading-relaxed text-gray-700">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis beatae facilis modi dicta nobis, sapiente aspernatur, molestias optio aliquid quisquam repellendus.
          </p>
          <a href="#" className="inline-block">
            <button
              className="flex items-center gap-2 rounded-lg bg-transparent py-3 px-6 text-center text-xs font-bold uppercase leading-normal text-pink-500 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              Ficha Tecnica
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5l6 6m0 0l-6 6m6-6H4.875" />
              </svg>
            </button>
          </a>
          <ProfileInfoCard
              title="Consideraciones"
              description="Trofeos ABM nos comprometemos a..."
              details={{
                "Nombre": "ABM_C10",
                "Tamaño": "1m",
                Color: "Oro/Plateado/bronce",
                Deporte: "Cualquiera",
                
              }}
             
            />

             
            <div className="mt-8">
              <Link to={`/dashboard/trofeos`}>
                <button
                  className="flex items-center gap-2 rounded-lg bg-transparent py-3 px-6 text-center text-xs font-bold uppercase leading-normal text-pink-500 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Regresar
                  <HiArrowCircleLeft size="24px" />
                </button>
              </Link>
            </div>

        </div>
      </div>
    </div>
  );
}


export default ProductDetail;

// export function ProductDetail() {
//   return (
//     <div className="mt-12 mb-8 flex flex-col gap-12">

//     <div className="flex min-h-screen items-center justify-center">
//       <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
//         <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
//           <img
//             src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
//             alt="image"
//             className="h-full w-full object-cover"
//           />
//         </div>
//         <div className="p-6">
//           <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
//             startups
//           </h6>
//           <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
//             Lyft launching cross-platform service this week
//           </h4>
//           <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
//             Like so many organizations these days, Autodesk is a company in
//             transition. It was until recently a traditional boxed software company
//             selling licenses. Yet its own business model disruption is only part of
//             the story
//           </p>
//           <a className="inline-block" href="#">
//             <button
//               className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//               type="button"
//             >
//               Learn More
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke-width="2"
//                 stroke="currentColor"
//                 aria-hidden="true"
//                 className="h-4 w-4"
//               >
//                 <path
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
//                 ></path>
//               </svg>
//             </button>
//           </a>
//         </div>
//         </div>
//       </div>

      {/* <Card> */}
        {/* <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Authors Table
          </Typography>
        </CardHeader> */}
        {/* <CardBody className="overflow-x-scroll px-0 pt-0 pb-2"> */}
          {/* <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["author", "function", "status", "employed", ""].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {authorsTableData.map(
                ({ img, name, email, job, online, date }, key) => {
                  const className = `py-3 px-5 ${
                    key === authorsTableData.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={name}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <Avatar src={img} alt={name} size="sm" variant="rounded" />
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {name}
                            </Typography>
                            <Typography className="text-xs font-normal text-blue-gray-500">
                              {email}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {job[0]}
                        </Typography>
                        <Typography className="text-xs font-normal text-blue-gray-500">
                          {job[1]}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Chip
                          variant="gradient"
                          color={online ? "green" : "blue-gray"}
                          value={online ? "online" : "offline"}
                          className="py-0.5 px-2 text-[11px] font-medium w-fit"
                        />
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {date}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography
                          as="a"
                          href="#"
                          className="text-xs font-semibold text-blue-gray-600"
                        >
                          Edit
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table> */}

          {/* <div className="flex items-center justify-center bg-gray-100">
  <div className="flex font-sans">
    <div className="flex-none w-48 relative">
      <img src="https://images.unsplash.com/photo-1699412958387-2fe86d46d394?q=80&w=3329&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
    </div>
    <form className="flex-auto p-6">
      <div className="flex flex-wrap">
        <h1 className="flex-auto text-xl font-semibold text-gray-900">
          Pullover Unisex
        </h1>
        <div className="text-lg font-semibold text-black-500">
          $110.00
        </div>
        <div className="w-full flex-none text-sm font-medium text-black-700 mt-2">
          In stock
        </div>
      </div>
      <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
        <div className="space-x-2 flex text-sm">
          <label>
            <input className="sr-only peer" name="size" type="radio" value="xs" />
            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
              XS
            </div>
          </label>
          <label>
            <input className="sr-only peer" name="size" type="radio" value="s" />
            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
              S
            </div>
          </label>
          <label>
            <input className="sr-only peer" name="size" type="radio" value="m" checked/>
            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
              M
            </div>
          </label>
          <label>
            <input className="sr-only peer" name="size" type="radio" value="l" />
            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
              L
            </div>
          </label>
          <label>
            <input className="sr-only peer" name="size" type="radio" value="xl" />
            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
              XL
            </div>
          </label>
        </div>
      </div>
      <div className="flex space-x-4 mb-6 text-sm font-medium">
        <div className="flex-auto flex space-x-4">
          <button className="h-10 px-6 font-semibold rounded-md border border-balck-800 text-gray-900" type="button">
            Add to cart
          </button>
        </div>
        <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Favorites">
          <svg width="20" height="20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
          </svg>
        </button>
      </div>
      <p className="text-sm text-slate-700">
        Free shipping 
      </p>
    </form>
  </div>
</div> */}




        {/* </CardBody>
      </Card> */}


      {/* NEW CODE */}

      

    {/* <div className="flex min-h-screen items-center justify-center">
    <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
          alt="image"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-6">
        <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
          startups
        </h6>
        <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          Lyft launching cross-platform service this week
        </h4>
        <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
          Like so many organizations these days, Autodesk is a company in
          transition. It was until recently a traditional boxed software company
          selling licenses. Yet its own business model disruption is only part of
          the story
        </p>
        <a className="inline-block" href="#">
          <button
            className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              className="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              ></path>
            </svg>
          </button>
        </a>
      </div>
      </div>
    </div> */}

//     </div>
//   );
// }


