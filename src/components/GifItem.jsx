import React from 'react'

export const GifItem = ({title, url, id}) => {
  return (
    <div className='card'>
      <div className='center'>
        <img src={ url } alt={ title } />
         <p>{ title }</p>
      </div>
         
    </div>
  )
}
