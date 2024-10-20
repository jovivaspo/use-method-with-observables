import { useEffect, useState } from 'react';
import useMethods from 'use-methods';
import { innnitialData } from './constants';
import { fetcher } from './utils/fetchers';
import { methods } from './utils/methods';

export const ListAttributesController = () => {
  const [state, { addAttribute, removeAttribute, changeAttribute, addAttributes }] = useMethods(methods, innnitialData);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetcher()
      .then((data) => {
        addAttributes(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { data: state, addAttribute, removeAttribute, changeAttribute, loading };
};
