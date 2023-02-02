import { client } from '../utils/fetchClient';
import { Glasses } from '../types/Glasses';

export const getSpectaclesWoman = (currentPage = 1, filter = '') => {
  return client.get<Glasses>(`spectacles-women/glasses?sort[type]=collection_relations_position&sort[order]=asc&filters[lens_variant_prescriptions][]=fashion&filters[lens_variant_types][]=classic&page[limit]=12&page[number]=${currentPage}&filters[frame_variant_home_trial_available]=false${filter}`);
};

export const getSpectaclesMen = (currentPage = 1, filter = '') => {
  return client.get<Glasses>(`spectacles-men/glasses?sort[type]=collection_relations_position&sort[order]=asc&filters[lens_variant_prescriptions][]=fashion&filters[lens_variant_types][]=classic&page[limit]=12&page[number]=${currentPage}&filters[frame_variant_home_trial_available]=false${filter}`);
};

export const getSunglassesWomen = (currentPage = 1, filter = '') => {
  return client.get<Glasses>(`sunglasses-women/glasses?sort[type]=collection_relations_position&sort[order]=asc&filters[lens_variant_prescriptions][]=fashion&filters[lens_variant_types][]=classic&page[limit]=12&page[number]=${currentPage}&filters[frame_variant_home_trial_available]=false${filter}`);
};

export const getSunglassesMen = (currentPage = 1, filter = '') => {
  return client.get<Glasses>(`sunglasses-men/glasses?glasses?sort[type]=collection_relations_position&sort[order]=asc&filters[lens_variant_prescriptions][]=fashion&filters[lens_variant_types][]=classic&page[limit]=12&page[number]=${currentPage}&filters[frame_variant_home_trial_available]=false${filter}`);
};

export const getSpectaclesWomanColourTortoise = (currentPage = 1) => {
  return client.get<Glasses>(`spectacles-women/glasses?page%5Blimit%5D=12&page%5Bnumber%5D=${currentPage}&filters%5Bglass_variant_frame_variant_colour_tag_configuration_names%5D%5B%5D=tortoise`);
};
