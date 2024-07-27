import {ServicesPath} from '~constants';

const getImage = (size: string, path: string): string => {
  return `${ServicesPath.IMAGE_URL}${size}${path}`;
};
export {getImage};
