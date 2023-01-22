import { client } from '../utils/fetchClient';
import { Glasses } from '../types/Glasses';

export const getSpectaclesWoman = (currentPage = 1, filter = '') => {
  // eslint-disable-next-line max-len
  // return client.get<Glasses>(`spectacles-women/glasses?page%5Blimit%5D=12&page%5Bnumber%5D=${currentPage}&filters%5Bglass_variant_frame_variant_colour_tag_configuration_names%5D%5B%5D=tortoise`);

  return client.get<Glasses>(`spectacles-women/glasses?page%5Blimit%5D=12&page%5Bnumber%5D=${currentPage}${filter}`);
};

export const getSpectaclesMen = (currentPage = 1, filter = '') => {
  return client.get<Glasses>(`spectacles-men/glasses?page%5Blimit%5D=12&page%5Bnumber%5D=${currentPage}${filter}`);
};

export const getSunglassesWomen = (currentPage = 1, filter = '') => {
  return client.get<Glasses>(`sunglasses-women/glasses?page%5Blimit%5D=12&page%5Bnumber%5D=${currentPage}${filter}`);
};

export const getSunglassesMen = (currentPage = 1, filter = '') => {
  return client.get<Glasses>(`sunglasses-men/glasses?page%5Blimit%5D=12&page%5Bnumber%5D=${currentPage}${filter}`);
};

export const getSpectaclesWomanColourTortoise = (currentPage = 1) => {
  // eslint-disable-next-line max-len
  // return client.get<Glasses>(`spectacles-women/glasses?sort%5Btype%5D=collection_relations_position&sort%5Border%5D=asc&filters%5Blens_variant_prescriptions%5D%5B%5D=fashion&filters%5Blens_variant_types%5D%5B%5D=classic&page%5Blimit%5D=12&page%5Bnumber%5D=${currentPage}&filters%5Bglass_variant_frame_variant_colour_tag_configuration_names%5D%5B%5D=coloured&filters%5Bglass_variant_frame_variant_frame_tag_configuration_names%5D%5B%5D=round&filters%5Bframe_variant_home_trial_available%5D=false`);

  return client.get<Glasses>(`spectacles-women/glasses?page%5Blimit%5D=12&page%5Bnumber%5D=${currentPage}&filters%5Bglass_variant_frame_variant_colour_tag_configuration_names%5D%5B%5D=tortoise`);
};
