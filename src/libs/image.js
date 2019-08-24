import { baseUrlProd } from './vars';

const getAssets = url => {
  return `${baseUrlProd}/storage/${url}`;
};

export default getAssets;
