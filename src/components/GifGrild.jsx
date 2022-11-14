
/*import { GifItem } from './GifItem';
//import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {
  
  //hooks carga y maneja las imagenes
  //const {images, isLoading} = useFetchGifs( category );

  return (
    <>
        <h3>{category}</h3>
        {//si la variable esta en TRUE muestra el h2
         // isLoading && ( <h2> Cargando... </h2> )
        }

        
    </>
)}*/
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

import React from 'react'

export const GifGrild = ({category}) => {
    const {images, isLoading} = useFetchGifs( category );

  return (
    <>
        <h2>{category}</h2>
       { isLoading && ( <h2> Cargando... </h2> )}
        
       <div className='card-grid'>
          {
              images.map( (image) => ( 
                < GifItem 
                  key={image.id} 
                  { ...image }//enviando todas las propiedades de image                
                />
            ))
          } 
        </div>
    </>
  )
}

