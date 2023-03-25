import { useEffect, useState } from 'react';

const APP_ENDPOINT_URL = 'http://www.omdbapi.com';
const APP_API_KEY = '282106fa';

const useFetch = (props: any) => {
   const [data, setData] = useState<any>();
   const [loading, setLoading] = useState<boolean>(false);
   const [error, setError] = useState(null);
   let url = `${APP_ENDPOINT_URL}/?apikey=${APP_API_KEY}`;
   for (const key in props) {
      url = `${url}&${key}=${props[key]}`;
   }

   useEffect(() => {
      setLoading(true);
      fetch(url)
         .then((response) => response.json())
         .then(
            (result) => {
               setData(result);
            },
            (error) => setError(error),
         )
         .finally(() => {
            setLoading(false);
         });
   }, [url]);

   return {
      data,
      loading,
      error,
   };
};

export default useFetch;
