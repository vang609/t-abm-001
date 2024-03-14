import { balonesData, trofeosMainData } from '@/data'


export const getProductById = ( id ) => {



    if (id.toLowerCase().includes("balon")) {
    return balonesData.find(balon => balon.id === id);
  } else {
    return trofeosMainData.find(trofeo => trofeo.id === 'ABM_C10');
  }
}