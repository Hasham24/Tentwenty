import {ServicesPath} from '~constants';

const getImage = (size: string, path: string): string => {
  return `${ServicesPath.IMAGE_URL}${size}${path}`;
};
const getFormattedDate = (date: string) => {
  const newDate = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const formattedDate = newDate.toLocaleDateString('en-US', options);
  return formattedDate;
};
export {getImage, getFormattedDate};
