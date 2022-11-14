import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrild } from './components/GifGrild';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['Feliz']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory) ) return;
        console.log(categories);
        return setCategories([newCategory,...categories]);
    }

    return (
        <>
            <h1>Buscar los Gif que necesites Aqui!!!</h1>
            {/*input */}
            <AddCategory onNewCategory={onAddCategory} />
        
            {
                categories.map( category => (
                  < GifGrild key={category} category={category} />
                )

                )
            }
        
        </>

  
    )
}
