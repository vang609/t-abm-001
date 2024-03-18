import { balonesData, medallasData, reconocimientosData,trofeosMainData } from '@/data'

const productDataMap = {
  balon: balonesData,
  medalla: medallasData,
  reconocimiento: reconocimientosData,
};
export const getProductById = (product_code) => {
  const { code, key } = extractParts(product_code);
  const data = productDataMap[key];

  if (data) {
    return data.find(item => item.id === code);
  }

  return trofeosMainData.find(trofeo => trofeo.id === 'ABM_C10');
};

const extractParts = (inputString) => {
  const parts = inputString.split('_');
  const key = parts.pop();
  const code = parts.join('_'); 
  return { code, key };
}