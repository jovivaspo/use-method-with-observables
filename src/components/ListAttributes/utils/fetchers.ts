import { data } from '../constants';
import { AttributeI } from '../models/Attribute';

export const fetcher = async (): Promise<AttributeI[]> => {
  const data = await fakeFetch();
  return data;
};

const fakeFetch = (): Promise<AttributeI[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 3000);
  });
};
