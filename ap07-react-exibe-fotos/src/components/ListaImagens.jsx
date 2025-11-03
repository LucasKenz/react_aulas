import React from 'react'

const ListaImagens = ({photos}) => {
  return (
    photos.map((phto) => (
        <Imagem 
          key={phto.id}
          src={phto.src.medium}
          alt={phto.alt}
        />
    ))
  )
}

export default ListaImagens