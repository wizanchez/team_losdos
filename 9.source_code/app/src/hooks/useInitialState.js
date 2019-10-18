import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [ videos, setVideos ] = useState([]);
  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setVideos(data))
      .catch(err=>{ 
        console.log('ERROR EN el api');
       // alert('Error al conectarse al API');

        return err});
  }, []);
  return videos;
};

export default useInitialState;
